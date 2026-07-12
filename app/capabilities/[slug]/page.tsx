import { redirect } from "next/navigation";

type CapabilitySlugRedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CapabilitySlugRedirectPage({ params }: CapabilitySlugRedirectPageProps) {
  const { slug } = await params;
  redirect(`/capabilities#${slug}`);
}
