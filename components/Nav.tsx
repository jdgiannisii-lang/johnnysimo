"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-40 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(9, 9, 9, 0.88)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid var(--border)",
            }
          : undefined
      }
    >
      <div
        className="mx-auto flex h-[72px] items-center justify-between px-8 lg:px-16"
        style={{ maxWidth: 1320 }}
      >
        <a href="#" className="hover-accent text-[13px] font-semibold uppercase tracking-[0.18em]">
          Simo Prods
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="hover-text-1 text-sm tracking-wide">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
