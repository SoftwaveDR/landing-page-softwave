import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiPlayCircle,
  FiTrendingUp,
} from "react-icons/fi";

import heroImage from "../../../assets/images/hero.png";
import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";

import "./Hero.css";

const capabilities = [
  "Automatización de procesos",
  "Sistemas empresariales escalables",
  "Información para decisiones estratégicas",
];

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__background" aria-hidden="true">
        <span className="hero__shape hero__shape--one" />
        <span className="hero__shape hero__shape--two" />
        <span className="hero__grid" />
      </div>

      <Container className="hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow animate-fade-up">
            <span className="hero__eyebrow-icon">
              <FiCode />
            </span>
            Tecnología creada para transformar operaciones
          </div>

          <h1 className="hero__title animate-fade-up">
            Convertimos procesos empresariales en{" "}
            <span>soluciones digitales inteligentes</span>
          </h1>

          <p className="hero__description animate-fade-up">
            Diseñamos plataformas, automatizaciones y sistemas empresariales
            que centralizan la información, fortalecen el control operativo y
            facilitan decisiones basadas en datos.
          </p>

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

          <ul className="hero__capabilities animate-fade-up">
            {capabilities.map((capability) => (
              <li key={capability}>
                <span aria-hidden="true">
                  <FiCheck />
                </span>
                {capability}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual animate-fade-up">
          <div className="hero__visual-glow" aria-hidden="true" />

          <div className="hero__dashboard-card">
            <div className="hero__dashboard-header">
              <div>
                <span className="hero__dashboard-label">
                  Visibilidad operativa
                </span>
                <strong>Softwave Business Suite</strong>
              </div>

              <span className="hero__dashboard-status">
                <i />
                Operación activa
              </span>
            </div>

            <div className="hero__dashboard-image">
              <img
                src={heroImage}
                alt="Vista de una plataforma empresarial desarrollada por Softwave"
              />
            </div>

            <div className="hero__dashboard-footer">
              <div className="hero__metric">
                <span className="hero__metric-icon">
                  <FiTrendingUp />
                </span>
                <div>
                  <small>Procesos</small>
                  <strong>Centralizados</strong>
                </div>
              </div>

              <div className="hero__metric">
                <span className="hero__metric-icon">
                  <FiLayers />
                </span>
                <div>
                  <small>Arquitectura</small>
                  <strong>Modular</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--top animate-float-soft">
            <span className="hero__floating-icon">
              <FiTrendingUp />
            </span>

            <div>
              <small>Gestión</small>
              <strong>Decisiones con datos</strong>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom animate-float-soft">
            <span className="hero__floating-icon hero__floating-icon--blue">
              <FiLayers />
            </span>

            <div>
              <small>Integración</small>
              <strong>Una sola operación</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;