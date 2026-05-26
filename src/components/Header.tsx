import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;