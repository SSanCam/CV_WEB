import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <p>© 2026 Sara Sánchez. Todos los derechos reservados.</p>

            <nav className="footer-nav" aria-label="Navegación legal">
                <Link to="/legal">Aviso legal</Link>
            </nav>
        </footer>
    );
}

export default Footer;