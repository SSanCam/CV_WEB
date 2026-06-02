import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;