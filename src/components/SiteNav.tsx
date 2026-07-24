import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/el-mito", label: "El Mito" },
  { to: "/programas", label: "Programas" },
  { to: "/recursos", label: "Recursos" },
  { to: "/substack", label: "Substack" },
  { to: "/newsletter", label: "Newsletter" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`so-nav ${scrolled ? "so-nav--solid" : ""}`}>
      <Link to="/" className="so-nav__brand" onClick={() => setOpen(false)}>
        <img src="/site/img/eye-logo.png" alt="" />
        <span>
          SAPIENS<em>OPTIMIZADO</em>
        </span>
      </Link>

      <nav className={`so-nav__links ${open ? "is-open" : ""}`}>
        {links.map((l) =>
          l.to === "/el-mito" ? (
            <a key={l.to} href="/el-mito" onClick={() => setOpen(false)} className="so-nav__link">
              {l.label}
            </a>
          ) : (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="so-nav__link"
              activeProps={{ className: "so-nav__link is-active" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ),
        )}
        <Link
          to="/newsletter"
          onClick={() => setOpen(false)}
          className="so-nav__cta"
        >
          Unirme al Newsletter
        </Link>
      </nav>

      <button
        className="so-nav__burger"
        aria-label="Menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
