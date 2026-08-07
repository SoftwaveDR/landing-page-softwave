import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiCompass,
  FiLayers,
  FiPlay,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";

import "./Methodology.css";


const methodologySteps = [
  {
    id: "discover",
    number: "01",
    icon: <FiSearch />,
    eyebrow: "Descubrimiento",
    title: "Entendemos la operación",
    description:
      "Analizamos procesos, actores, información, riesgos y objetivos para identificar qué debe resolverse antes de definir tecnología.",
    deliverables: [
      "Levantamiento funcional",
      "Mapa de procesos",
      "Prioridades y alcance",
    ],
    accent: "cyan",
  },
  {
    id: "design",
    number: "02",
    icon: <FiCompass />,
    eyebrow: "Diseño",
    title: "Diseñamos la solución",
    description:
      "Convertimos el diagnóstico en una arquitectura funcional y técnica con experiencias claras, reglas de negocio y trazabilidad.",
    deliverables: [
      "Arquitectura",
      "UX/UI",
      "Modelo funcional",
    ],
    accent: "primary",
  },
  {
    id: "build",
    number: "03",
    icon: <FiCode />,
    eyebrow: "Construcción",
    title: "Desarrollamos por incrementos",
    description:
      "Construimos la solución de manera modular, validando avances continuamente y reduciendo riesgos antes de llegar a producción.",
    deliverables: [
      "Desarrollo modular",
      "Integraciones",
      "Validación continua",
    ],
    accent: "violet",
  },
  {
    id: "evolve",
    number: "04",
    icon: <FiTrendingUp />,
    eyebrow: "Evolución",
    title: "Medimos, optimizamos y escalamos",
    description:
      "Después de implementar, analizamos comportamiento, oportunidades y nuevas necesidades para que la plataforma evolucione con el negocio.",
    deliverables: [
      "Monitoreo",
      "Optimización",
      "Roadmap evolutivo",
    ],
    accent: "secondary",
  },
];


const principles = [
  {
    icon: <FiLayers />,
    title: "Modularidad",
    description:
      "Construimos componentes que puedan evolucionar sin rehacer la plataforma completa.",
  },
  {
    icon: <FiShield />,
    title: "Control",
    description:
      "Seguridad, permisos, trazabilidad y reglas forman parte del diseño desde el inicio.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Iteración",
    description:
      "Validamos temprano para corregir antes, reducir incertidumbre y acelerar decisiones.",
  },
];


function Methodology() {
  return (
    <section
      className="methodology section"
      id="metodologia"
      aria-labelledby="methodology-title"
    >
      {/* ================================================================
          BACKGROUND
          ================================================================ */}

      <div
        className="methodology__background"
        aria-hidden="true"
      >
        <span className="methodology__glow methodology__glow--one" />
        <span className="methodology__glow methodology__glow--two" />
        <span className="methodology__grid" />
      </div>


      <Container
        size="wide"
        className="methodology__container"
      >
        {/* ================================================================
            HEADER
            ================================================================ */}

        <header className="methodology__header">
          <div className="methodology__heading">
            <span className="methodology__eyebrow">
              Cómo trabajamos
            </span>

            <h2 id="methodology-title">
              De una necesidad empresarial a una{" "}
              <span>
                solución que realmente opera
              </span>
            </h2>
          </div>

          <div className="methodology__intro">
            <p>
              Combinamos análisis de procesos, diseño de producto, ingeniería
              de software y mejora continua dentro de un ciclo de desarrollo
              estructurado y medible.
            </p>

            <Button
              href="#contacto"
              variant="outline"
              size="default"
              icon={<FiArrowUpRight />}
            >
              Iniciar un proyecto
            </Button>
          </div>
        </header>


        {/* ================================================================
            PROCESS
            ================================================================ */}

        <div className="methodology__process">
          <div
            className="methodology__process-line"
            aria-hidden="true"
          />

          {methodologySteps.map((step) => (
            <article
              key={step.id}
              className={[
                "methodology__step",
                `methodology__step--${step.accent}`,
              ].join(" ")}
            >
              <div className="methodology__step-top">
                <span className="methodology__step-number">
                  {step.number}
                </span>

                <span
                  className="methodology__step-icon"
                  aria-hidden="true"
                >
                  {step.icon}
                </span>
              </div>

              <span className="methodology__step-eyebrow">
                {step.eyebrow}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

              <ul className="methodology__deliverables">
                {step.deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <span aria-hidden="true">
                      <FiCheck />
                    </span>

                    {deliverable}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>


        {/* ================================================================
            OPERATIONAL EXPERIENCE
            ================================================================ */}

        <div className="methodology__experience">
          {/* LEFT */}

          <div className="methodology__experience-copy">
            <span className="methodology__experience-eyebrow">
              Softwave Delivery Framework
            </span>

            <h3>
              Cada etapa debe producir evidencia, avance y valor.
            </h3>

            <p>
              El desarrollo no se gestiona como una caja negra. Cada ciclo
              genera entregables verificables que permiten mantener control
              sobre alcance, decisiones y evolución del producto.
            </p>

            <div className="methodology__principles">
              {principles.map((principle) => (
                <article
                  className="methodology__principle"
                  key={principle.title}
                >
                  <span
                    className="methodology__principle-icon"
                    aria-hidden="true"
                  >
                    {principle.icon}
                  </span>

                  <div>
                    <strong>
                      {principle.title}
                    </strong>

                    <p>
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>


          {/* RIGHT */}

          <div className="methodology__delivery">
            <div className="methodology__delivery-header">
              <div>
                <span>
                  Proyecto digital
                </span>

                <strong>
                  Ciclo de implementación
                </strong>
              </div>

              <span className="methodology__delivery-status">
                <i />
                En progreso
              </span>
            </div>


            <div className="methodology__delivery-progress">
              <div className="methodology__delivery-progress-top">
                <span>
                  Avance general
                </span>

                <strong>
                  72%
                </strong>
              </div>

              <div className="methodology__delivery-progress-track">
                <span />
              </div>
            </div>


            <div className="methodology__delivery-phases">
              <div className="methodology__delivery-phase methodology__delivery-phase--done">
                <span className="methodology__delivery-phase-indicator">
                  <FiCheck />
                </span>

                <div>
                  <small>
                    Fase 01
                  </small>

                  <strong>
                    Descubrimiento
                  </strong>
                </div>

                <span className="methodology__delivery-phase-state">
                  Completada
                </span>
              </div>


              <div className="methodology__delivery-phase methodology__delivery-phase--done">
                <span className="methodology__delivery-phase-indicator">
                  <FiCheck />
                </span>

                <div>
                  <small>
                    Fase 02
                  </small>

                  <strong>
                    Diseño de solución
                  </strong>
                </div>

                <span className="methodology__delivery-phase-state">
                  Completada
                </span>
              </div>


              <div className="methodology__delivery-phase methodology__delivery-phase--active">
                <span className="methodology__delivery-phase-indicator">
                  <FiPlay />
                </span>

                <div>
                  <small>
                    Fase 03
                  </small>

                  <strong>
                    Desarrollo
                  </strong>
                </div>

                <span className="methodology__delivery-phase-state">
                  En curso
                </span>
              </div>


              <div className="methodology__delivery-phase">
                <span className="methodology__delivery-phase-indicator">
                  4
                </span>

                <div>
                  <small>
                    Fase 04
                  </small>

                  <strong>
                    Evolución
                  </strong>
                </div>

                <span className="methodology__delivery-phase-state">
                  Próxima
                </span>
              </div>
            </div>


            <div className="methodology__delivery-footer">
              <div>
                <span>
                  Iteraciones
                </span>

                <strong>
                  06
                </strong>
              </div>

              <div>
                <span>
                  Hitos validados
                </span>

                <strong>
                  12
                </strong>
              </div>

              <div>
                <span>
                  Trazabilidad
                </span>

                <strong>
                  Activa
                </strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Methodology;