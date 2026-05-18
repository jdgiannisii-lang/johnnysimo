export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 68% 28%, rgba(200,169,110,0.055) 0%, transparent 62%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, var(--bg), transparent)",
        }}
      />

      {/* Main content */}
      <div
        className="mx-auto flex w-full flex-1 flex-col justify-center px-8 pb-16 pt-28 lg:px-16"
        style={{ maxWidth: 1320 }}
      >
        {/* Category label */}
        <p
          className="anim-fade-up delay-1 mb-10 text-[11px] font-medium uppercase tracking-[0.3em]"
          style={{ color: "var(--accent)" }}
        >
          Cinematographer &amp; Video Producer
        </p>

        {/* Giant display name */}
        <div>
          <h1
            className="anim-fade-up delay-2 font-extrabold leading-[0.82] tracking-[-0.035em]"
            style={{
              fontSize: "clamp(4rem, 14.5vw, 14rem)",
              color: "var(--text-1)",
            }}
          >
            JOHNNY
          </h1>
          <h1
            className="anim-fade-up delay-3 font-extrabold leading-[0.82] tracking-[-0.035em]"
            style={{
              fontSize: "clamp(4rem, 14.5vw, 14rem)",
              WebkitTextStroke: "2px var(--accent)",
              color: "transparent",
            }}
          >
            SIMONCIC
          </h1>
        </div>

        {/* Location / availability */}
        <div
          className="anim-fade-up delay-4 mt-12 flex flex-wrap items-center gap-x-5 gap-y-2"
          style={{ color: "var(--text-2)" }}
        >
          <span className="text-sm tracking-wide">Iowa City, IA</span>
          <span style={{ color: "var(--text-3)" }}>·</span>
          <span className="text-sm tracking-wide">Available for projects</span>
          <span className="hidden sm:inline" style={{ color: "var(--text-3)" }}>
            ·
          </span>
          <span className="hidden text-sm tracking-wide sm:inline">2025</span>
        </div>

        {/* CTAs */}
        <div className="anim-fade-up delay-5 mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a href="#work" className="btn-ghost">
            Selected work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="anim-fade-up delay-6 mx-auto flex w-full items-center justify-between px-8 pb-8 lg:px-16"
        style={{ maxWidth: 1320 }}
      >
        <span
          className="text-[11px] uppercase tracking-[0.22em]"
          style={{ color: "var(--text-3)" }}
        >
          Scroll to explore
        </span>
        <div
          className="h-10 w-px"
          style={{ background: "var(--text-3)" }}
        />
      </div>
    </section>
  );
}
