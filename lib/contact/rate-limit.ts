import { createHash } from "crypto";

type RateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfter: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const limits = {
  ip: { limit: 5, windowSeconds: 60 * 15 },
  email: { limit: 3, windowSeconds: 60 * 60 },
} as const;

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const cfConnectingIp = request.headers.get("cf-connecting-ip")?.trim();

  return forwardedFor || realIp || cfConnectingIp || "unknown";
}

export async function enforceContactRateLimit({ ip, email }: { ip: string; email: string }) {
  const ipResult = await checkRateLimit(`contact:ip:${hashValue(ip)}`, limits.ip.limit, limits.ip.windowSeconds);
  if (!ipResult.allowed) return ipResult;

  return checkRateLimit(`contact:email:${hashValue(email.toLowerCase())}`, limits.email.limit, limits.email.windowSeconds);
}

async function checkRateLimit(key: string, limit: number, windowSeconds: number): Promise<RateLimitResult> {
  const externalResult = await checkExternalRateLimit(key, limit, windowSeconds);
  if (externalResult) return externalResult;

  return checkMemoryRateLimit(key, limit, windowSeconds);
}

async function checkExternalRateLimit(key: string, limit: number, windowSeconds: number): Promise<RateLimitResult | null> {
  const url = process.env.RATE_LIMIT_REDIS_REST_URL;
  const token = process.env.RATE_LIMIT_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, windowSeconds, "NX"],
        ["TTL", key],
      ]),
      cache: "no-store",
    });

    if (!response.ok) return null;

    const result = (await response.json()) as Array<{ result?: number }>;
    const count = Number(result[0]?.result ?? 0);
    const ttl = Number(result[2]?.result ?? windowSeconds);
    const retryAfter = Math.max(ttl, 1);

    return {
      allowed: count <= limit,
      limit,
      remaining: Math.max(limit - count, 0),
      retryAfter,
    };
  } catch {
    return null;
  }
}

function checkMemoryRateLimit(key: string, limit: number, windowSeconds: number): RateLimitResult {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, limit, remaining: limit - 1, retryAfter: windowSeconds };
  }

  current.count += 1;

  const retryAfter = Math.max(Math.ceil((current.resetAt - now) / 1000), 1);

  return {
    allowed: current.count <= limit,
    limit,
    remaining: Math.max(limit - current.count, 0),
    retryAfter,
  };
}

function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}
