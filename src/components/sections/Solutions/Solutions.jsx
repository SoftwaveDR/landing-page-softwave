import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiCloud,
  FiDatabase,
  FiLink,
  FiLock,
  FiRefreshCw,
  FiShield,
  FiSliders,
  FiZap,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { getCodeCategories, getCodeModules } from "../../../data/getCodeModules";
import "./Solutions.css";

const platformCapabilities = [
  { icon: FiSliders, title: "Configurable", text: "Reglas, permisos y flujos se adaptan a tu operación." },
  { icon: FiLink, title: "Integrable", text: "Conecta Get Code con las herramientas que ya utilizas." },
  { icon: FiShield, title: "Trazable", text: "Estados, responsables e historial siempre disponibles." },
  { icon: FiCloud, title: "Escalable", text: "Activa módulos y capacidades a medida que creces." },
];

function Solutions() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleModules = useMemo(
    () => activeCategory === "all"
      ? getCodeModules
      : getCodeModules.filter((module) => module.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="get-code section" id="get-code" aria-labelledby="get-code-title">
      <Container className="get-code__container">
        <header className="get-code__header">
          <div>
            <span className="get-code__eyebrow">La plataforma empresarial de Softwave</span>
            <h2 id="get-code-title">
              Get Code convierte procesos dispersos en una
              <span> operación conectada.</span>
            </h2>
          </div>
          <div className="get-code__intro">
            <p>
              Un ecosistema modular donde cada área trabaja con la misma
              información, las reglas están claras y cada decisión deja rastro.
            </p>
            <Button href="#contacto" variant="secondary" icon={<FiArrowRight />}>
              Ver Get Code en acción
            </Button>
          </div>
        </header>

        <div className="get-code__story">
          <div className="get-code__story-copy">
            <span>Del caos operativo al control</span>
            <h3>Menos herramientas aisladas. Más claridad para ejecutar.</h3>
            <p>
              Get Code une solicitudes, aprobaciones, operación, talento y
              analítica dentro de un mismo flujo de información.
            </p>
            <ul>
              <li><FiCheck /> Reduce duplicidad y seguimiento manual</li>
              <li><FiCheck /> Define responsables, tiempos y reglas</li>
              <li><FiCheck /> Convierte la actividad diaria en información útil</li>
            </ul>
          </div>

          <div className="get-code__flow" aria-label="Flujo conectado de Get Code">
            <div className="get-code__flow-node">
              <FiRefreshCw />
              <span><small>Entrada</small><strong>Solicitud</strong></span>
              <i>01</i>
            </div>
            <div className="get-code__flow-line"><span /></div>
            <div className="get-code__flow-node is-active">
              <FiZap />
              <span><small>Reglas</small><strong>Automatización</strong></span>
              <i>02</i>
            </div>
            <div className="get-code__flow-line"><span /></div>
            <div className="get-code__flow-node">
              <FiDatabase />
              <span><small>Resultado</small><strong>Información</strong></span>
              <i>03</i>
            </div>
            <div className="get-code__flow-outcome">
              <span>Resultado</span>
              <strong>Control de punta a punta</strong>
            </div>
          </div>
        </div>

        <div className="modules" id="modulos">
          <div className="modules__heading">
            <div>
              <span className="get-code__eyebrow">Ecosistema modular</span>
              <h2>Todos los módulos de Get Code, una sola experiencia.</h2>
            </div>
            <p>
              Comienza por el proceso más crítico y conecta nuevos módulos sin
              fragmentar la información ni reconstruir tu operación.
            </p>
          </div>

          <div className="modules__toolbar" role="toolbar" aria-label="Filtrar módulos">
            {getCodeCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? "is-active" : ""}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
                {category.id === "all" && <span>{getCodeModules.length}</span>}
              </button>
            ))}
          </div>

          <div className="modules__grid" aria-live="polite">
            {visibleModules.map(({ id, name, icon: Icon, description, category }) => (
              <article className={`module-card module-card--${category}`} key={id}>
                <div className="module-card__top">
                  <span className="module-card__icon"><Icon aria-hidden="true" /></span>
                  <span className="module-card__state"><i /> Conectado</span>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href="#contacto" aria-label={`Solicitar una demo del módulo ${name}`}>
                  Ver en una demo <FiArrowRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="get-code__foundation">
          <header>
            <span className="get-code__eyebrow">Una base preparada para crecer</span>
            <h2>El mismo control en cada módulo.</h2>
          </header>
          <div className="get-code__capabilities">
            {platformCapabilities.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div><strong>{title}</strong><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="get-code__security">
            <FiLock aria-hidden="true" />
            <div>
              <span>Seguridad desde el diseño</span>
              <strong>Roles, permisos, historial y trazabilidad en toda la plataforma.</strong>
            </div>
            <Button href="#contacto" variant="outline" icon={<FiArrowRight />}>Evaluar mi operación</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
