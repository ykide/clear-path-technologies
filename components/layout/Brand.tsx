export function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5 font-semibold tracking-tight text-ink">
      <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="12" fill="#0B1220" />
        <path d="M39.6 45.5A18.5 18.5 0 1 1 39.6 18.5" stroke="#F8FAFC" strokeWidth="8" strokeLinecap="round" />
        <path d="M39.6 18.5 48 10.5" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" />
        <circle cx="51" cy="8.5" r="5.5" fill="#14B8A6" />
      </svg>
      <span>ClearPath <span className="hidden sm:inline">Technologies</span></span>
    </span>
  );
}
