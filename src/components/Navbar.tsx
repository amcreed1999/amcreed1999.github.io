"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "Impact", href: "#impact", id: "impact" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Capabilities", href: "#capabilities", id: "capabilities" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [progress, setProgress] = useState(0);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = ["top", ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      const hero = document.getElementById("top");
      setOverHero(hero ? window.scrollY < hero.offsetHeight - 76 : false);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const section of sections) {
        if (section.offsetTop <= marker) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <header className={`site-header ${overHero ? "is-over-hero" : ""}`}>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span>AC</span>
          <span>Adam Creed</span>
        </a>

        <div id="mobile-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "location" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href="/Adam-Creed-Resume.pdf"
            download
            data-analytics-event="resume_download"
            data-analytics-label="Résumé from navigation"
          >
            Résumé <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="nav-controls">
          <button
            type="button"
            className="theme-toggle"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={dark}
            onClick={() => setTheme(dark ? "light" : "dark")}
          >
            <span aria-hidden="true">{mounted ? (dark ? "☾" : "☀") : "○"}</span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
