import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-6">
          404
        </p>
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter leading-[0.95] mb-4">
          Page not found
        </h1>
        <p className="text-base text-muted leading-relaxed mb-10">
          This frame doesn&apos;t exist. The link might be broken, or the page
          may have moved.
        </p>
        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Back home
          <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
