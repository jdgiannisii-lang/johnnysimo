export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="py-8">
      <div
        className="mx-auto flex flex-col items-start justify-between gap-4 px-8 sm:flex-row sm:items-center lg:px-16"
        style={{ maxWidth: 1320 }}
      >
        <span className="text-sm" style={{ color: "var(--text-3)" }}>
          © 2025 Johnny Simoncic / Simo Prods
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover-text-2 text-sm"
            >
              {label}
            </a>
          ))}
          <span className="text-sm" style={{ color: "var(--text-3)" }}>
            Iowa City, IA
          </span>
        </div>
      </div>
    </footer>
  );
}
