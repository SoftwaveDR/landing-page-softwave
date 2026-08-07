import {
  FiArrowUpRight,
  FiBarChart2,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGrid,
  FiLayers,
  FiSettings,
} from "react-icons/fi";

import Container from "../../common/Container/Container";

import "./Services.css";


const services = [
  {
    id: "software",
    number: "01",
    icon: <FiCode />,
    title: "Desarrollo de software empresarial",
    description:
      "Diseñamos aplicaciones y plataformas a la medida para digitalizar operaciones críticas, centralizar información y escalar procesos de negocio.",
    features: [
      "Aplicaciones web empresariales",
      "Portales internos y externos",
      "Plataformas SaaS",
    ],
    accent: "primary",
  },
  {
    id: "automation",
    number: "02",
    icon: <FiCpu />,
    title: "Automatización de procesos",
    description:
      "Transformamos tareas manuales y repetitivas en flujos digitales conectados que reducen tiempos, errores y dependencia operativa.",
    features: [
      "Workflows empresariales",
      "Integraciones entre sistemas",
      "Procesos inteligentes",
    ],
    accent: "cyan",
  },
  {
    id: "data",
    number: "03",
    icon: <FiBarChart2 />,
    title: "Datos, BI y analítica",
    description:
      "Convertimos datos dispersos en información útil para comprender la operación, anticipar riesgos y tomar decisiones con mayor precisión.",
    features: [
      "Dashboards ejecutivos",
      "Indicadores operacionales",
      "Modelos de información",
    ],
    accent: "violet",
  },
  {
    id: "architecture",
    number: "04",
    icon: <FiLayers />,
    title: "Arquitectura e integración",
    description:
      "Diseñamos ecosistemas tecnológicos preparados para conectar aplicaciones, servicios y fuentes de información de manera segura y escalable.",
    features: [
      "APIs e integraciones",
      "Arquitectura modular",
      "Modernización tecnológica",
    ],
    accent: "secondary",
  },
];


const capabilities = [
  {
    icon: <FiDatabase />,
    label: "Datos centralizados",
  },
  {
    icon: <FiCloud />,
    label: "Arquitectura escalable",
  },
  {
    icon: <FiGrid />,
    label: "Sistemas conectados",
  },
  {
    icon: <FiSettings />,
    label: "Procesos automatizados",
  },
];


function Services() {
  return (
    <section
      className="services section"
      id="servicios"
      aria-labelledby="services-title"
    >
      {/* ================================================================
          BACKGROUND
          ================================================================ */}

      <div
        className="services__background"
        aria-hidden="true"
      >
        <span className="services__glow services__glow--left" />
        <span className="services__glow services__glow--right" />
        <span className="services__grid" />
      </div>


      <Container
        size="wide"
        className="services__container"
      >
        {/* ================================================================
            HEADER
            ================================================================ */}

        <div className="services__header">
          <div className="services__header-copy">
            <span className="services__eyebrow">
              <span className="services__eyebrow-dot" />
              Capacidades Softwave
            </span>

            <h2
              className="services__title"
              id="services-title"
            >
              Tecnología diseñada para{" "}
              <span>
                resolver desafíos reales
              </span>
            </h2>
          </div>

          <div className="services__header-description">
            <p>
              Construimos soluciones digitales que conectan personas,
              procesos y datos para convertir operaciones complejas en
              sistemas más simples, medibles y escalables.
            </p>

            <a
              href="#soluciones"
              className="services__header-link"
            >
              Explorar soluciones

              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>


        {/* ================================================================
            SERVICE GRID
            ================================================================ */}

        <div className="services__grid-layout">
          {services.map((service) => (
            <article
              key={service.id}
              className={[
                "services__card",
                `services__card--${service.accent}`,
              ].join(" ")}
            >
              <div className="services__card-top">
                <span className="services__card-number">
                  {service.number}
                </span>

                <span
                  className="services__card-icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
              </div>


              <div className="services__card-content">
                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                <ul className="services__card-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span
                        className="services__feature-marker"
                        aria-hidden="true"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>


              <a
                href="#contacto"
                className="services__card-action"
                aria-label={`Conocer más sobre ${service.title}`}
              >
                <span>
                  Conocer más
                </span>

                <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>


        {/* ================================================================
            CAPABILITY STRIP
            ================================================================ */}

        <div className="services__capabilities">
          <div className="services__capabilities-copy">
            <span>
              Una misma visión tecnológica
            </span>

            <strong>
              De la necesidad al sistema operativo real.
            </strong>
          </div>


          <div className="services__capabilities-list">
            {capabilities.map((capability) => (
              <div
                className="services__capability"
                key={capability.label}
              >
                <span
                  className="services__capability-icon"
                  aria-hidden="true"
                >
                  {capability.icon}
                </span>

                <span>
                  {capability.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;