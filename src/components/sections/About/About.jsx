import {
  FiArrowUpRight,
  FiCheck,
  FiCompass,
  FiHeart,
  FiLayers,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";

import "./About.css";


const commitments = [
  {
    id: "understanding",
    icon: <FiUsers />,
    number: "01",
    title: "Entender antes de construir",
    description:
      "No comenzamos por la tecnología. Primero comprendemos cómo funciona la operación, qué necesita el cliente y qué resultado debe producir la solución.",
    accent: "cyan",
  },

  {
    id: "coverage",
    icon: <FiTarget />,
    number: "02",
    title: "Cubrir la necesidad completa",
    description:
      "Buscamos que cada solución responda al problema de principio a fin, evitando entregar funcionalidades aisladas que no resuelvan la operación real.",
    accent: "primary",
  },

  {
    id: "ownership",
    icon: <FiShield />,
    number: "03",
    title: "Asumir responsabilidad por la entrega",
    description:
      "Trabajamos con sentido de propiedad sobre lo que construimos. La responsabilidad no termina cuando el código funciona, sino cuando la solución puede cumplir su propósito.",
    accent: "violet",
  },

  {
    id: "evolution",
    icon: <FiLayers />,
    number: "04",
    title: "Construir para permanecer y evolucionar",
    description:
      "Diseñamos tecnología mantenible, escalable y preparada para acompañar nuevas necesidades sin convertir cada cambio en una reconstrucción.",
    accent: "secondary",
  },
];


const trustPrinciples = [
  {
    icon: <FiCompass />,
    title: "Integridad",
    text: "Transparencia en decisiones, alcance, riesgos y compromisos.",
  },

  {
    icon: <FiHeart />,
    title: "Vocación de servicio",
    text: "La tecnología existe para servir a las personas y a la operación.",
  },

  {
    icon: <FiShield />,
    title: "Responsabilidad",
    text: "Nos hacemos responsables de la calidad de aquello que entregamos.",
  },

  {
    icon: <FiTarget />,
    title: "Excelencia",
    text: "Buscamos hacer correctamente incluso aquello que el cliente no ve.",
  },
];


const deliveryPromises = [
  "Comprender el problema antes de recomendar una solución",
  "Diseñar alrededor de la operación real del cliente",
  "Mantener trazabilidad de decisiones y requerimientos",
  "Construir pensando en seguridad, crecimiento y mantenimiento",
  "Acompañar la transición entre desarrollo y operación",
  "Evaluar el resultado por el valor que genera, no solo por funcionalidades entregadas",
];


function About() {
  return (
    <section
      className="about section"
      id="nosotros"
      aria-labelledby="about-title"
    >
      {/* ================================================================
          BACKGROUND
          ================================================================ */}

      <div
        className="about__background"
        aria-hidden="true"
      >
        <span className="about__glow about__glow--one" />
        <span className="about__glow about__glow--two" />
        <span className="about__grid" />
      </div>


      <Container
        size="wide"
        className="about__container"
      >
        {/* ================================================================
            INTRODUCTION
            ================================================================ */}

        <header className="about__header">
          <div className="about__heading">
            <span className="about__eyebrow">
              Nuestra filosofía
            </span>

            <h2 id="about-title">
              Tecnología con propósito,{" "}
              <span>
                compromiso con la necesidad completa
              </span>
            </h2>
          </div>


          <div className="about__intro">
            <p>
              En Softwave entendemos que desarrollar software implica asumir
              responsabilidad sobre una necesidad empresarial. Nuestro trabajo
              no consiste únicamente en programar funcionalidades, sino en
              comprender qué necesita la organización y construir una solución
              capaz de responder a esa realidad.
            </p>
          </div>
        </header>


        {/* ================================================================
            MANIFESTO
            ================================================================ */}

        <div className="about__manifesto">
          <div className="about__manifesto-copy">
            <span className="about__manifesto-label">
              Nuestra forma de servir
            </span>

            <blockquote>
              <p>
                No buscamos entregar una parte de la solución cuando la
                necesidad exige una visión completa.
              </p>
            </blockquote>

            <p className="about__manifesto-description">
              Escuchamos, analizamos, diseñamos, construimos y acompañamos con
              una misma intención: que la tecnología entregada pueda servir de
              manera efectiva al propósito para el cual fue creada.
            </p>

            <div className="about__manifesto-line">
              <span />

              <p>
                El éxito no es terminar un proyecto. Es que la solución
                responda a la necesidad que originó el proyecto.
              </p>
            </div>
          </div>


          {/* ==============================================================
              TRUST PANEL
              ============================================================== */}

          <div className="about__trust-panel">
            <div className="about__trust-panel-header">
              <div>
                <span>
                  Principios de confianza
                </span>

                <strong>
                  Cómo convertimos nuestros valores en acciones
                </strong>
              </div>

              <span className="about__trust-badge">
                Compromiso Softwave
              </span>
            </div>


            <div className="about__trust-principles">
              {trustPrinciples.map((principle) => (
                <article
                  className="about__trust-principle"
                  key={principle.title}
                >
                  <span
                    className="about__trust-icon"
                    aria-hidden="true"
                  >
                    {principle.icon}
                  </span>

                  <div>
                    <strong>
                      {principle.title}
                    </strong>

                    <p>
                      {principle.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>


            <div className="about__trust-footer">
              <span>
                Principios
              </span>

              <i aria-hidden="true" />

              <span>
                Decisiones
              </span>

              <i aria-hidden="true" />

              <span>
                Entrega
              </span>

              <i aria-hidden="true" />

              <strong>
                Confianza
              </strong>
            </div>
          </div>
        </div>


        {/* ================================================================
            COMMITMENTS
            ================================================================ */}

        <div className="about__commitments-header">
          <div>
            <span>
              Qué significa trabajar con Softwave
            </span>

            <h3>
              Nuestro compromiso se refleja en la forma de ejecutar.
            </h3>
          </div>

          <p>
            Convertimos nuestros principios en comportamientos concretos
            durante todo el ciclo de una solución.
          </p>
        </div>


        <div className="about__commitments">
          {commitments.map((commitment) => (
            <article
              key={commitment.id}
              className={[
                "about__commitment",
                `about__commitment--${commitment.accent}`,
              ].join(" ")}
            >
              <div className="about__commitment-top">
                <span className="about__commitment-number">
                  {commitment.number}
                </span>

                <span
                  className="about__commitment-icon"
                  aria-hidden="true"
                >
                  {commitment.icon}
                </span>
              </div>

              <h3>
                {commitment.title}
              </h3>

              <p>
                {commitment.description}
              </p>
            </article>
          ))}
        </div>


        {/* ================================================================
            DELIVERY PROMISE
            ================================================================ */}

        <div className="about__delivery">
          <div className="about__delivery-copy">
            <span className="about__delivery-eyebrow">
              Nuestra promesa de entrega
            </span>

            <h3>
              Una solución debe llegar hasta donde llega la necesidad.
            </h3>

            <p>
              Por eso nuestro enfoque conecta estrategia, operación,
              experiencia, ingeniería y acompañamiento. Cada decisión debe
              contribuir a que la solución pueda utilizarse, mantenerse y
              evolucionar dentro de la organización.
            </p>

            <Button
              href="#contacto"
              variant="primary"
              size="large"
              icon={<FiArrowUpRight />}
            >
              Conversemos sobre tu necesidad
            </Button>
          </div>


          <div className="about__delivery-list">
            {deliveryPromises.map((promise) => (
              <div
                className="about__delivery-item"
                key={promise}
              >
                <span
                  aria-hidden="true"
                  className="about__delivery-check"
                >
                  <FiCheck />
                </span>

                <p>
                  {promise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;