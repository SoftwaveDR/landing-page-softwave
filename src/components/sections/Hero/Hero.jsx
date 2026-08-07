import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiPlayCircle,
  FiShield,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";

import "./Hero.css";


const capabilities = [
  "Automatización de procesos",
  "Sistemas empresariales escalables",
  "Información para decisiones estratégicas",
];


const operationalModules = [
  {
    icon: <FiDatabase />,
    label: "Datos",
    value: "Centralizados",
  },
  {
    icon: <FiCpu />,
    label: "Procesos",
    value: "Automatizados",
  },
  {
    icon: <FiShield />,
    label: "Control",
    value: "Trazabilidad",
  },
];


function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      aria-labelledby="hero-title"
    >
      {/* ================================================================
          BACKGROUND
          ================================================================ */}

      <div
        className="hero__background"
        aria-hidden="true"
      >
        <span className="hero__orb hero__orb--cyan" />
        <span className="hero__orb hero__orb--blue" />
        <span className="hero__orb hero__orb--violet" />

        <span className="hero__grid" />

        <span className="hero__beam hero__beam--one" />
        <span className="hero__beam hero__beam--two" />
      </div>


      {/* ================================================================
          CONTENT
          ================================================================ */}

      <Container
        size="wide"
        className="hero__container"
      >
        {/* ==============================================================
            LEFT
            ============================================================== */}

        <div className="hero__content">
          <div className="hero__eyebrow animate-fade-up">
            <span
              className="hero__eyebrow-icon"
              aria-hidden="true"
            >
              <FiCode />
            </span>

            <span>
              Tecnología creada para transformar operaciones
            </span>
          </div>


          <h1
            className="hero__title animate-fade-up"
            id="hero-title"
          >
            Convertimos procesos empresariales en{" "}
            <span className="hero__title-highlight">
              soluciones digitales inteligentes
            </span>
          </h1>


          <p className="hero__description animate-fade-up">
            Diseñamos plataformas, automatizaciones y sistemas empresariales
            que centralizan la información, fortalecen el control operativo y
            convierten los datos en decisiones estratégicas.
          </p>


          {/* CTA */}

          <div className="hero__actions animate-fade-up">
            <Button
              href="#soluciones"
              variant="primary"
              size="large"
              icon={<FiArrowRight />}
            >
              Conocer soluciones
            </Button>

            <Button
              href="#contacto"
              variant="outline"
              size="large"
              icon={<FiPlayCircle />}
              iconPosition="left"
            >
              Presentar mi proyecto
            </Button>
          </div>


          {/* CAPABILITIES */}

          <ul className="hero__capabilities animate-fade-up">
            {capabilities.map((capability) => (
              <li key={capability}>
                <span
                  className="hero__capability-icon"
                  aria-hidden="true"
                >
                  <FiCheck />
                </span>

                <span>{capability}</span>
              </li>
            ))}
          </ul>


          {/* MICRO TRUST */}

          <div className="hero__trust animate-fade-up">
            <div className="hero__trust-line" />

            <p>
              Tecnología empresarial diseñada para crecer junto a tu operación.
            </p>
          </div>
        </div>


        {/* ==============================================================
            RIGHT — LIVE PRODUCT EXPERIENCE
            ============================================================== */}

        <div className="hero__visual animate-fade-up">
          <div
            className="hero__visual-glow"
            aria-hidden="true"
          />


          {/* MAIN DASHBOARD */}

          <div className="hero-dashboard">
            {/* HEADER */}

            <div className="hero-dashboard__header">
              <div>
                <span className="hero-dashboard__eyebrow">
                  Visibilidad operativa
                </span>

                <strong>
                  Softwave Business Suite
                </strong>
              </div>

              <span className="hero-dashboard__status">
                <i aria-hidden="true" />
                Operación activa
              </span>
            </div>


            {/* APPLICATION WINDOW */}

            <div className="hero-dashboard__window">
              {/* MINI SIDEBAR */}

              <aside
                className="hero-dashboard__sidebar"
                aria-hidden="true"
              >
                <span className="hero-dashboard__sidebar-logo">
                  S
                </span>

                <div className="hero-dashboard__sidebar-items">
                  <span className="is-active">
                    <FiActivity />
                  </span>

                  <span>
                    <FiBarChart2 />
                  </span>

                  <span>
                    <FiDatabase />
                  </span>

                  <span>
                    <FiLayers />
                  </span>
                </div>

                <span className="hero-dashboard__sidebar-bottom">
                  <FiShield />
                </span>
              </aside>


              {/* DASHBOARD CONTENT */}

              <div className="hero-dashboard__content">
                {/* TOP */}

                <div className="hero-dashboard__topbar">
                  <div>
                    <small>
                      Control operativo
                    </small>

                    <strong>
                      Vista general
                    </strong>
                  </div>

                  <span className="hero-dashboard__live">
                    Tiempo real
                  </span>
                </div>


                {/* KPI */}

                <div className="hero-dashboard__kpis">
                  <article className="hero-dashboard__kpi">
                    <span>
                      Eficiencia
                    </span>

                    <strong>
                      94%
                    </strong>

                    <small className="is-positive">
                      +12.4%
                    </small>
                  </article>


                  <article className="hero-dashboard__kpi">
                    <span>
                      Automatización
                    </span>

                    <strong>
                      78%
                    </strong>

                    <small className="is-positive">
                      +18.2%
                    </small>
                  </article>


                  <article className="hero-dashboard__kpi">
                    <span>
                      Integraciones
                    </span>

                    <strong>
                      24
                    </strong>

                    <small>
                      Activas
                    </small>
                  </article>
                </div>


                {/* GRAPH */}

                <div className="hero-dashboard__analytics">
                  <div className="hero-dashboard__analytics-header">
                    <div>
                      <span>
                        Rendimiento operacional
                      </span>

                      <strong>
                        Evolución de procesos
                      </strong>
                    </div>

                    <span className="hero-dashboard__period">
                      Últimos 30 días
                    </span>
                  </div>


                  <div
                    className="hero-dashboard__chart"
                    aria-hidden="true"
                  >
                    <span className="hero-dashboard__chart-line hero-dashboard__chart-line--1" />
                    <span className="hero-dashboard__chart-line hero-dashboard__chart-line--2" />
                    <span className="hero-dashboard__chart-line hero-dashboard__chart-line--3" />
                    <span className="hero-dashboard__chart-line hero-dashboard__chart-line--4" />

                    <svg
                      viewBox="0 0 600 170"
                      preserveAspectRatio="none"
                      role="presentation"
                    >
                      <defs>
                        <linearGradient
                          id="softwaveChartFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#4f6df5"
                            stopOpacity="0.34"
                          />

                          <stop
                            offset="100%"
                            stopColor="#4f6df5"
                            stopOpacity="0"
                          />
                        </linearGradient>

                        <linearGradient
                          id="softwaveChartLine"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop
                            offset="0%"
                            stopColor="#31bfd6"
                          />

                          <stop
                            offset="48%"
                            stopColor="#4f8bf5"
                          />

                          <stop
                            offset="100%"
                            stopColor="#7166f5"
                          />
                        </linearGradient>
                      </defs>


                      <path
                        className="hero-dashboard__chart-area"
                        d="
                          M0 142
                          C55 140 70 116 115 120
                          C160 124 175 88 220 96
                          C265 104 275 58 320 72
                          C365 86 390 42 430 54
                          C475 68 505 24 550 36
                          C572 42 588 27 600 20
                          L600 170
                          L0 170
                          Z
                        "
                        fill="url(#softwaveChartFill)"
                      />

                      <path
                        className="hero-dashboard__chart-path"
                        d="
                          M0 142
                          C55 140 70 116 115 120
                          C160 124 175 88 220 96
                          C265 104 275 58 320 72
                          C365 86 390 42 430 54
                          C475 68 505 24 550 36
                          C572 42 588 27 600 20
                        "
                        fill="none"
                        stroke="url(#softwaveChartLine)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>


                {/* MODULES */}

                <div className="hero-dashboard__modules">
                  {operationalModules.map((module) => (
                    <article
                      className="hero-dashboard__module"
                      key={module.label}
                    >
                      <span className="hero-dashboard__module-icon">
                        {module.icon}
                      </span>

                      <div>
                        <small>
                          {module.label}
                        </small>

                        <strong>
                          {module.value}
                        </strong>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>


            {/* FOOTER */}

            <div className="hero-dashboard__footer">
              <div className="hero-dashboard__footer-item">
                <FiZap />

                <span>
                  <small>
                    Automatización
                  </small>

                  <strong>
                    Flujo inteligente
                  </strong>
                </span>
              </div>

              <div className="hero-dashboard__footer-item">
                <FiTrendingUp />

                <span>
                  <small>
                    Gestión
                  </small>

                  <strong>
                    Datos accionables
                  </strong>
                </span>
              </div>
            </div>
          </div>


          {/* ============================================================
              FLOATING CARD — INTEGRATION
              ============================================================ */}

          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__floating-icon hero__floating-icon--cyan">
              <FiLayers />
            </span>

            <div>
              <small>
                Integración
              </small>

              <strong>
                Ecosistema conectado
              </strong>
            </div>
          </div>


          {/* ============================================================
              FLOATING CARD — DATA
              ============================================================ */}

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-icon hero__floating-icon--violet">
              <FiTrendingUp />
            </span>

            <div>
              <small>
                Inteligencia
              </small>

              <strong>
                Decisiones con datos
              </strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;