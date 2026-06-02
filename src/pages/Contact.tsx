import { Helmet } from "react-helmet-async";

const contactEmail = "sarasanchezcamilleri@gmail.com";
const whatsappNumber = "34670676745";

const emailSubject = encodeURIComponent("Consulta desde StrayPup Studio");

const emailBody = encodeURIComponent(
  "Hola Sara,\n\nQuería comentarte una idea para una web.\n\nTipo de proyecto:\n\nIdea principal:\n\nPlazo aproximado:\n\nGracias."
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

      <section className="page-container" aria-labelledby="contact-title">
        <h1 id="contact-title" className="page-title">
          Hablemos de tu proyecto
        </h1>

        <p className="page-lead">
          Cuéntame qué necesitas, en qué punto está tu idea y qué tipo de web tienes en mente. Puedes escribirme por email o enviarme un
          mensaje directo por WhatsApp.
        </p>

        <div className="action-links" aria-label="Opciones de contacto">
          <a className="action-link" href={`mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`}>
            Escribir por email
          </a>

          <a
            className="action-link"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;