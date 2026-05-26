import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">
        © 2026 Sara Sánchez Camilleri. Todos los derechos reservados.
      </p>

      <nav className="footer-nav" aria-label="Navegación legal">
        <Link to="/legal" className="footer-link">
          Aviso legal
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;