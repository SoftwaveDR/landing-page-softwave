import {
  FiArrowUpRight,
  FiBriefcase,
  FiCpu,
  FiDatabase,
  FiGrid,
  FiLayers,
  FiRefreshCw,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";

import "./Solutions.css";

const solutions = [
  {
    id: "erp",
    eyebrow: "Gestión empresarial",
    title: "ERP y plataformas operativas",
    description:
      "Centralizamos procesos, áreas y datos en plataformas empresariales diseñadas alrededor de la operación real de cada organización.",
    icon: <FiGrid />,
    accent: "primary",
    modules: [
      "Operaciones",
      "Compras",
      "RRHH",
      "Administración",
    ],
  },
  {
    id: "workflow",
    eyebrow: "Automatización",
    title: "Workflows y procesos digitales",
    description:
      "Convertimos procesos manuales en flujos trazables, medibles y automatizados con reglas de negocio, aprobaciones y alertas.",
    icon: <FiRefreshCw />,
    accent: "cyan",
    modules: [
      "Solicitudes",
      "Aprobaciones",
      "Notificaciones",
      "SLA",
    ],
  },
  {
    id: "analytics",
    eyebrow: "Business Intelligence",
    title: "Analítica y control ejecutivo",
    description:
      "Diseñamos modelos de información que permiten monitorear indicadores, anticipar desviaciones y tomar decisiones basadas en datos.",
    icon: <FiTrendingUp />,
    accent: "violet",
    modules: [
      "Dashboards",
      "KPIs",
      "Alertas",
      "Reporting",
    ],
  },
];

const architectureCapabilities = [
  {
    icon: <FiDatabase />,
    title: "Información centralizada",
    description:
      "Una única fuente de información para reducir dispersión y duplicidad.",
  },
  {
    icon: <FiLayers />,
    title: "Arquitectura modular",
    description:
      "Sistemas preparados para crecer por módulos sin comprometer estabilidad.",
  },
  {
    icon: <FiShield />,
    title: "Control y trazabilidad",
    description:
      "Permisos, estados, historial y auditoría integrados en la operación.",
  },
  {
    icon: <FiZap />,
    title: "Automatización",
    description:
      "Menos tareas repetitivas y mayor velocidad de respuesta operativa.",
  },
];

function Solutions() {
  return (
    <section
      className="solutions section"
      id="soluciones"
      aria-labelledby="solutions-title"
    >
      <div
        className="solutions__background"
        aria-hidden="true"
      >
        <span className="solutions__orb solutions__orb--one" />
        <span className="solutions__orb solutions__orb--two" />
        <span className="solutions__grid" />
      </div>

      <Container
        size="wide"
        className="solutions__container"
      >
        <header className="solutions__header">
          <div className="solutions__heading">
            <span className="solutions__eyebrow">
              Soluciones empresariales
            </span>

            <h2 id="solutions-title">
              Sistemas que convierten la operación en una{" "}
              <span>ventaja competitiva</span>
            </h2>
          </div>

          <div className="solutions__intro">
            <p>
              No implementamos tecnología aislada. Diseñamos soluciones que
              conectan procesos, personas y datos dentro de una arquitectura
              capaz de evolucionar con el negocio.
            </p>

            <Button
              href="#contacto"
              variant="outline"
              size="default"
              icon={<FiArrowUpRight />}
            >
              Diseñar una solución
            </Button>
          </div>
        </header>

        <div className="solutions__layout">
          <div className="solutions__cards">
            {solutions.map((solution) => (
              <article
                key={solution.id}
                className={[
                  "solutions__card",
                  `solutions__card--${solution.accent}`,
                ].join(" ")}
              >
                <div className="solutions__card-header">
                  <span
                    className="solutions__card-icon"
                    aria-hidden="true"
                  >
                    {solution.icon}
                  </span>

                  <span className="solutions__card-eyebrow">
                    {solution.eyebrow}
                  </span>
                </div>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>

                <div className="solutions__tags">
                  {solution.modules.map((module) => (
                    <span key={module}>
                      {module}
                    </span>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="solutions__card-link"
                  aria-label={`Hablar sobre ${solution.title}`}
                >
                  Explorar solución
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <aside className="solutions__experience">
            <div className="solutions__experience-header">
              <div>
                <span>Softwave Architecture</span>
                <strong>
                  Un ecosistema conectado
                </strong>
              </div>

              <span className="solutions__experience-status">
                <i />
                Operativo
              </span>
            </div>

            <div
              className="solutions__architecture"
              aria-hidden="true"
            >
              <span className="solutions__connection solutions__connection--one" />
              <span className="solutions__connection solutions__connection--two" />
              <span className="solutions__connection solutions__connection--three" />
              <span className="solutions__connection solutions__connection--four" />

              <div className="solutions__architecture-center">
                <span className="solutions__architecture-logo">
                  <FiCpu />
                </span>

                <small>
                  Softwave Core
                </small>

                <strong>
                  Business Platform
                </strong>
              </div>

              <div className="solutions__architecture-node solutions__architecture-node--operations">
                <FiBriefcase />
                <span>
                  <small>Operación</small>
                  <strong>Procesos</strong>
                </span>
              </div>

              <div className="solutions__architecture-node solutions__architecture-node--people">
                <FiUsers />
                <span>
                  <small>Personas</small>
                  <strong>Gestión</strong>
                </span>
              </div>

              <div className="solutions__architecture-node solutions__architecture-node--data">
                <FiDatabase />
                <span>
                  <small>Datos</small>
                  <strong>Inteligencia</strong>
                </span>
              </div>

              <div className="solutions__architecture-node solutions__architecture-node--systems">
                <FiLayers />
                <span>
                  <small>Sistemas</small>
                  <strong>Integraciones</strong>
                </span>
              </div>
            </div>

            <div className="solutions__experience-footer">
              <div>
                <small>
                  Arquitectura
                </small>
                <strong>
                  Modular
                </strong>
              </div>

              <div>
                <small>
                  Integración
                </small>
                <strong>
                  API First
                </strong>
              </div>

              <div>
                <small>
                  Evolución
                </small>
                <strong>
                  Escalable
                </strong>
              </div>
            </div>
          </aside>
        </div>

        <div className="solutions__capabilities">
          <div className="solutions__capabilities-heading">
            <span>
              Diseñado para operación empresarial
            </span>

            <strong>
              La tecnología debe simplificar la operación, no agregar
              complejidad.
            </strong>
          </div>

          <div className="solutions__capabilities-grid">
            {architectureCapabilities.map((capability) => (
              <article
                className="solutions__capability"
                key={capability.title}
              >
                <span
                  className="solutions__capability-icon"
                  aria-hidden="true"
                >
                  {capability.icon}
                </span>

                <div>
                  <strong>
                    {capability.title}
                  </strong>

                  <p>
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;