import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="so-footer">
      <div className="so-footer__inner">
        <img src="/site/img/eye-logo.png" alt="Sapiens Optimizado" />
        <p>SAPIENS OPTIMIZADO — Mentoría de Estilo de Vida Holística</p>
        <nav className="so-footer__nav">
          <Link to="/">Inicio</Link>
          <a href="/el-mito">El Mito</a>
          <Link to="/programas">Programas</Link>
          <Link to="/recursos">Recursos</Link>
          <Link to="/substack">Substack</Link>
          <Link to="/newsletter">Newsletter</Link>
        </nav>
        <p className="so-footer__muted">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
