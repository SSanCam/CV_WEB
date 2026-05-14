function Header() {
    return (
        <header className="site-header">
            <a href="#inicio" className="site-logo">
                Sara Sánchez
            </a>

            <nav className="site-nav" aria-label="Navegación principal">
                <a href="#inicio">Inicio</a>
                <a href="#about">Sobre mi</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;