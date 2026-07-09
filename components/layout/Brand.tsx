export function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5 font-semibold tracking-tight text-ink">
      <svg aria-hidden="true" className="size-6 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M3 12 9 6M3 12l6 6M3 12h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 12h3" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="20" cy="12" r="2.5" stroke="#14B8A6" strokeWidth="1.6" />
      </svg>
      <span>ClearPath <span className="hidden sm:inline">Technologies</span></span>
    </span>
  );
}
