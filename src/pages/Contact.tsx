import { Helmet } from "react-helmet-async";
import "../styles/contact.css";
import logo from "../assets/Ciri_logo_redondo.png";

const contactEmail = "tu-email-real";
const whatsappNumber = "34XXXXXXXXX";

const emailSubject = encodeURIComponent("Consulta desde StrayPup Studio");

const emailBody = encodeURIComponent(
  "Hola Sara,\n\nQuería comentarte una idea para una web.\n\nTipo de proyecto:\n\nIdea principal:\n\nPlazo aproximado:\n\nGracias."
);

const whatsappMessage = encodeURIComponent("Hola Sara, quería comentarte una idea para una web.");

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto | StrayPup Studio</title>
        <meta name="description" content="Contacta con StrayPup Studio para comentar una idea, proyecto o sitio web." />
        <meta property="og:title" content="Contacto | StrayPup Studio" />
        <meta property="og:description" content="Cuéntanos tu idea y hablamos sobre cómo construir tu sitio web." />
      </Helmet>

      <section className="page-container contact-page" aria-labelledby="contact-title">
        <div className="contact-hero">
          <div className="contact-hero-text">
            <h1 id="contact-title" className="page-title">
              Hablemos de tu proyecto
            </h1>

            <p className="page-lead">
              No hace falta tenerlo todo cerrado. Puedes escribirme con una idea inicial, una web que quieras mejorar o una referencia visual
              desde la que empezar.
            </p>

            <div className="action-links contact-actions" aria-label="Opciones de contacto">
              <a className="action-link" href={`mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`}>
                Escribir por email
              </a>

              <a
                className="action-link"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-logo-wrapper">
            <img src={logo} alt="Logo de StrayPup Studio" className="contact-logo" />
          </div>
        </div>

        <section className="contact-info" aria-labelledby="contact-info-title">
          <h2 id="contact-info-title" className="section-heading">
            Qué puedes contarme
          </h2>

          <div className="info-grid">
            <div className="info-block">
              <h3>Tipo de web</h3>
              <p>Portfolio, web profesional, landing page, proyecto personal o rediseño de una web existente.</p>
            </div>

            <div className="info-block">
              <h3>Estado de la idea</h3>
              <p>Puedes escribirme aunque solo tengas una idea inicial, una necesidad concreta o algunas referencias visuales.</p>
            </div>

            <div className="info-block">
              <h3>Siguiente paso</h3>
              <p>Reviso lo que necesitas y te respondo para valorar alcance, estructura y próximos pasos.</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contact;