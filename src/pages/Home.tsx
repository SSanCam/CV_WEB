import "../styles/home.css";
import logoImage from "../assets/Ciri_logo_redondo.png";

function Home() {
  return (
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
          Diseño y desarrollo web con intención
        </h2>

        <p className="section-text">
          
        </p>
      </section>
    </section>
  );
}

export default Home;