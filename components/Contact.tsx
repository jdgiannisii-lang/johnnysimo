const socials = [
  { label: "X / Twitter", href: "https://x.com/simoprods" },
  { label: "Instagram", href: "https://instagram.com/simoprods" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/johnny-simoncic-607290316",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{
        borderTop: "1px solid var(--border)",
        background:
          "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(200,169,110,0.04) 0%, transparent 60%)",
      }}
    >
      <div
        className="mx-auto px-8 lg:px-16"
        style={{ maxWidth: 1320 }}
      >
        <span className="section-label">Contact</span>

        <div className="max-w-[680px]">
          <h2
            className="mb-6 font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--text-1)",
            }}
          >
            Let&apos;s make
            <br />
            something real.
          </h2>
          <p
            className="mb-10 max-w-[420px] text-[15px] leading-relaxed"
            style={{ color: "var(--text-2)" }}
          >
            Looking for a cinematographer for your program, brand, or event?
            Reach out — always open to the right project.
          </p>

          {/* Email link */}
          <a
            href="mailto:johnny@simoprods.com"
            className="group inline-flex items-center gap-3"
          >
            <span
              className="font-semibold underline decoration-[var(--border)] underline-offset-4 transition-colors duration-200 group-hover:text-[var(--accent)]"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "var(--text-1)",
              }}
            >
              johnny@simoprods.com
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="-translate-x-1 text-[var(--accent)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                d="M3 10h14M10 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Social links */}
          <div className="mt-12 flex flex-wrap gap-6">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-text-1 text-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
