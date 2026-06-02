import { Helmet } from "react-helmet-async";
import "../styles/legal.css";

function Legal() {
  return (
    <>
      <Helmet>
        <title>Aviso legal | StrayPup Studio</title>
        <meta
          name="description"
          content="Aviso legal de StrayPup Studio, sitio web de diseño y desarrollo web de Sara Sánchez Camilleri."
        />
        <meta property="og:title" content="Aviso legal | StrayPup Studio" />
        <meta property="og:description" content="Información legal sobre el uso, titularidad y contenidos de StrayPup Studio." />
      </Helmet>

      <section className="page-container" aria-labelledby="legal-title">
        <h1 id="legal-title" className="page-title">
          Aviso legal
        </h1>

        <p className="page-lead legal-lead">
          {" "}
          Este sitio web pertenece a StrayPup Studio, espacio profesional de Sara Sánchez Camilleri dedicado al diseño y desarrollo web.
        </p>

        <div className="info-grid">
          <div className="info-block">
            <h3>Finalidad del sitio</h3>
            <p>
              Esta web tiene como finalidad presentar servicios, proyectos, información profesional y vías de contacto relacionadas con
              StrayPup Studio.
            </p>
          </div>

          <div className="info-block">
            <h3>Propiedad intelectual</h3>
            <p>
              Los textos, imágenes, diseño, código y contenidos propios de este sitio pertenecen a Sara Sánchez Camilleri, salvo que se
              indique lo contrario.
            </p>
          </div>

          <div className="info-block">
            <h3>Uso del contenido</h3>
            <p>
              No se permite la reproducción, distribución, modificación o uso comercial de los contenidos propios de esta web sin
              autorización previa.
            </p>
          </div>

          <div className="info-block">
            <h3>Responsabilidad</h3>
            <p>
              StrayPup Studio procura mantener la información actualizada, pero no garantiza la ausencia total de errores ni la
              disponibilidad permanente del sitio.
            </p>
          </div>

          <div className="info-block">
            <h3>Enlaces externos</h3>
            <p>
              Esta web puede incluir enlaces a sitios de terceros. StrayPup Studio no se responsabiliza del contenido, funcionamiento o
              políticas de esos sitios externos.
            </p>
          </div>

          <div className="info-block">
            <h3>Contacto legal</h3>
            <p>
              Para cualquier consulta relacionada con este aviso legal, puede utilizarse la vía de contacto indicada en la página de
              contacto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Legal;
