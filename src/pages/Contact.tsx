import { Helmet } from "react-helmet-async";
import "../styles/global.css";

const contactEmail = "tu-email@ejemplo.com";
const whatsappNumber = "34600000000";

const emailSubject = encodeURIComponent("Consulta desde StrayPup Studio");
const emailBody = encodeURIComponent(
  "Hola Sara,\n\nQuería comentarte una idea para una web:\n\n"
);

const whatsappMessage = encodeURIComponent(
  "Hola Sara, quería comentarte una idea para una web."
);

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto | StrayPup Studio</title>

        <meta
          name="description"
          content="Contacta con StrayPup Studio para comentar una idea, proyecto o sitio web."
        />

        <meta property="og:title" content="Contacto | StrayPup Studio" />
        <meta
          property="og:description"
          content="Cuéntanos tu idea y hablamos sobre cómo construir tu sitio web."
        />
      </Helmet>

      <section className="contact-page" aria-labelledby="contact-title">
        <div className="contact-content">
          <h1 id="contact-title">Hablemos de tu proyecto</h1>

          <p className="contact-lead">
            Cuéntame qué necesitas, en qué punto está tu idea y qué tipo de web
            tienes en mente. Puedes escribirme por email o enviarme un mensaje
            directo por WhatsApp.
          </p>

          <div className="contact-actions" aria-label="Opciones de contacto">
            <a
              className="contact-link"
              href={`mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`}
            >
              Escribir por email
            </a>

            <a
              className="contact-link"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;