import { Helmet } from "react-helmet-async";
import "../styles/home.css";
import logoImage from "../assets/Ciri_logo_redondo.png";

function Home() {
  return (
    <>
      <Helmet>
        <title>StrayPup Studio | Diseño y desarrollo web</title>

        <meta name="description" content="Creamos sitios web claros, funcionales, accesibles y adaptados a cada proyecto." />

        <meta property="og:site_name" content="StrayPup Studio" />
        <meta property="og:title" content="StrayPup Studio | Diseño y desarrollo web" />
        <meta property="og:description" content="Creamos sitios web claros, funcionales, accesibles y adaptados a cada proyecto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://straypupstudio.com/" />
        <meta property="og:image" content="https://straypupstudio.com/og-image.png" />
      </Helmet>

      <section className="home-page" aria-labelledby="home-title">
        <div className="home-title">
          <img src={logoImage} alt="" aria-hidden="true" className="home-logo" />

          <h1 id="home-title">StrayPup Studio</h1>
          <p>By Sara Sánchez Camilleri</p>
        </div>

        <section className="home-intro" aria-labelledby="home-intro-title">
          <h2 id="home-intro-title" className="section-heading">
            Creamos tu sitio web desde la idea hasta la publicación
          </h2>

          <p className="home-intro-text">
            En StrayPup diseñamos y desarrollamos páginas web claras, funcionales y adaptadas a cada proyecto. Creamos sitios pensados para
            comunicar mejor, cargar rápido, verse bien en cualquier dispositivo y ofrecer una experiencia accesible para todas las personas.
          </p>
        </section>
      </section>
    </>
  );
}

export default Home;
