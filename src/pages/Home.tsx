import { Helmet } from "react-helmet-async";
import "../styles/home.css";
import logoImage from "../assets/Ciri_logo_redondo.png";

function Home() {
  return (
    <>
      <Helmet>
        <title>StrayPup Studio | Diseño y desarrollo web</title>
        <meta
          name="description"
          content="Creamos sitios web claros, funcionales, accesibles y adaptados a cada proyecto."
        />
      </Helmet>

      <section className="home-page" aria-labelledby="home-title">
        <div className="home-title">
          <img
            src={logoImage}
            alt="Logotipo de StrayPup Studio"
            className="home-logo"
          />

          <h1 id="home-title">StrayPup Studio</h1>
          <p>By Sara Sánchez Camilleri</p>
        </div>

        <section className="section" aria-labelledby="home-intro-title">
          <h2 id="home-intro-title" className="section-title">
            Creamos tu sitio web desde la idea hasta la publicación
          </h2>

          <p className="section-text">
            En StrayPup diseñamos y desarrollamos páginas web claras, funcionales y
            adaptadas a cada proyecto. Creamos sitios pensados para comunicar
            mejor, cargar rápido, verse bien en cualquier dispositivo y ofrecer
            una experiencia accesible para todas las personas.
          </p>
        </section>
      </section>
    </>
  );
}

export default Home;
