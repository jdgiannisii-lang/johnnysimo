const stats = [
  { value: "3+", label: "Years producing" },
  { value: "47", label: "Projects delivered" },
  { value: "D1", label: "Athletics content" },
  { value: "Class of '29", label: "University of Iowa" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        className="mx-auto px-8 lg:px-16"
        style={{ maxWidth: 1320 }}
      >
        <div className="grid items-start gap-16 md:grid-cols-2 lg:gap-24">
          {/* Left: bio */}
          <div>
            <span className="section-label">About</span>
            <h2
              className="mb-8 font-bold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--text-1)",
              }}
            >
              Film-first thinking,
              <br />
              built for athletics.
            </h2>

            <div
              className="max-w-[480px] space-y-4 text-[15px] leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              <p>
                Based in Iowa City, Johnny Simoncic is a video producer and
                cinematographer operating as Simo Prods. He creates game-day
                coverage, recruitment films, and branded content for college
                and high school programs across the midwest.
              </p>
              <p>
                Studying Business Marketing at the University of Iowa, he
                produces content for Hawkeyes athletics while building his
                client roster. His approach is cinematic and direct — built to
                perform on social feeds and stand up on the biggest screens.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Work together
              </a>
              <a
                href="https://x.com/simoprods"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Follow on X
              </a>
            </div>
          </div>

          {/* Right: stats grid */}
          <div
            className="grid grid-cols-2 gap-px"
            style={{ background: "var(--border)" }}
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="px-6 py-8"
                style={{ background: "var(--bg)" }}
              >
                <p
                  className="mb-1 font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                    color: "var(--accent)",
                  }}
                >
                  {value}
                </p>
                <p
                  className="text-sm tracking-wide"
                  style={{ color: "var(--text-2)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
