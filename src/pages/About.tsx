import { Helmet } from "react-helmet-async";
import "../styles/about.css";

function About() {
  return (
    <>
      <Helmet>
        <title>Sobre mí | StrayPup Studio</title>
        <meta
          name="description"
          content="Desarrollo web con criterio visual. Perfil de Sara Sánchez Camilleri, desarrolladora web con base técnica, creativa y audiovisual."
        />
        <meta property="og:title" content="Sobre mí | StrayPup Studio" />
        <meta property="og:description" content="Desarrollo web claro, funcional y con criterio visual." />
      </Helmet>

      <div className="page-container">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-text">
            <h1 id="about-title" className="page-title">
              Desarrollo web con criterio visual
            </h1>

            <p className="page-lead">
              Soy Sara Sánchez Camilleri, desarrolladora web con formación en Desarrollo de Aplicaciones Web y una trayectoria previa
              vinculada al diseño gráfico, las artes visuales y el entorno audiovisual.
            </p>
          </div>
        </section>

        <section className="about-summary" aria-labelledby="about-summary-title">
          <h2 id="about-summary-title" className="section-heading">
            Resumen profesional
          </h2>

          <div className="info-grid">
            <div className="info-block">
              <h3>Enfoque</h3>
              <p>
                Trabajo cada web desde su estructura, su contenido y su función. Busco interfaces claras, accesibles y mantenibles, sin
                añadir complejidad innecesaria.
              </p>
            </div>

            <div className="info-block">
              <h3>Base técnica y creativa</h3>
              <p>
                Mi recorrido combina programación, diseño gráfico, composición visual y experiencia audiovisual. Esa mezcla define mi forma
                de construir productos digitales.
              </p>
            </div>

            <div className="info-block">
              <h3>Tecnologías</h3>
              <p>
                HTML5, CSS3, JavaScript, PHP, Java, Python, Kotlin, MySQL, Laravel, Spring Boot, Git, Docker, APIs REST y arquitectura MVC.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;