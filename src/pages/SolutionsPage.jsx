import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiGrid,
  FiLayers,
  FiLink,
  FiShield,
  FiZap,
} from "react-icons/fi";

import Button from "../components/common/Button/Button";
import Container from "../components/common/Container/Container";
import WhatsAppFloat from "../components/common/WhatsAppFloat/WhatsAppFloat";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import {
  fullERPPlan,
  individualModulePlan,
  solutionPackages,
} from "../data/solutionPackages";
import "./SolutionsPage.css";

const operatingFlow = [
  { icon: FiGrid, label: "Registrar", text: "La necesidad entra con contexto y datos completos." },
  { icon: FiZap, label: "Automatizar", text: "Reglas, aprobaciones y alertas mueven el proceso." },
  { icon: FiLink, label: "Conectar", text: "Cada área trabaja sobre la misma información." },
  { icon: FiBarChart2, label: "Decidir", text: "Indicadores y reportes muestran qué mejorar." },
];

function SolutionsPage() {
  const [activeId, setActiveId] = useState(solutionPackages[0].id);
  const tabRefs = useRef([]);
  const activePackage = solutionPackages.find(({ id }) => id === activeId) ?? solutionPackages[0];
  const ActiveIcon = activePackage.icon;

  const handleTabKeyDown = (event, index) => {
    const lastIndex = solutionPackages.length - 1;
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % solutionPackages.length
      : event.key === "ArrowLeft"
        ? (index - 1 + solutionPackages.length) % solutionPackages.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? lastIndex
            : null;

    if (nextIndex === null) return;
    event.preventDefault();
    setActiveId(solutionPackages[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  useEffect(() => {
    document.title = "Soluciones empresariales | Get Code de Softwave";
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => { document.title = "Get Code | Plataforma empresarial de Softwave"; };
  }, []);

  return (
    <div className="page solutions-page">
      <Header />
      <main>
        <section className="solutions-hero" id="inicio" aria-labelledby="solutions-title">
          <Container>
            <nav className="solutions-breadcrumb" aria-label="Ruta de navegación">
              <Link to="/"><FiArrowLeft /> Inicio</Link><span>/</span><strong>Soluciones empresariales</strong>
            </nav>

            <div className="solutions-hero__grid">
              <div className="solutions-hero__copy">
                <span className="solutions-kicker">Get Code · ERP modular</span>
                <h1 id="solutions-title">Un ERP. Seis soluciones. <span>Toda tu operación conectada.</span></h1>
                <p>
                  Empieza por el área que más lo necesita y crece sin volver a
                  fragmentar tus datos. Get Code une personas, procesos y
                  decisiones en una sola experiencia empresarial.
                </p>
                <div className="solutions-hero__actions">
                  <Button href="#catalogo" size="large" icon={<FiArrowRight />}>Explorar soluciones</Button>
                  <Button href="#erp-completo" variant="outline" size="large">Ver ERP completo</Button>
                </div>
                <ul>
                  <li><FiCheck /> Implementación por etapas</li>
                  <li><FiCheck /> Datos compartidos entre áreas</li>
                  <li><FiCheck /> Control por roles y trazabilidad</li>
                </ul>
              </div>

              <div className="solutions-console" aria-label="Vista conceptual del ERP Get Code">
                <header><span><i /><i /><i /></span><strong>Get Code · Centro empresarial</strong><small>Operación en línea</small></header>
                <div className="solutions-console__body">
                  <aside>
                    <strong>GC</strong>
                    {solutionPackages.map(({ id, icon: Icon }) => <span className={id === activeId ? "is-active" : ""} key={id}><Icon /></span>)}
                  </aside>
                  <div className="solutions-console__main">
                    <div className="solutions-console__heading"><div><small>Vista ejecutiva</small><strong>Tu empresa, en una sola pantalla</strong></div><span><i /> Actualizado</span></div>
                    <div className="solutions-console__metrics">
                      <article><small>Áreas conectadas</small><strong>6</strong><span>Una fuente de información</span></article>
                      <article><small>Procesos</small><strong>Visibles</strong><span>De inicio a cierre</span></article>
                    </div>
                    <div className="solutions-console__network">
                      <div className="solutions-console__core"><FiLayers /><strong>GET CODE</strong><small>ERP</small></div>
                      {solutionPackages.map(({ id, shortName, icon: Icon }) => <span key={id}><Icon /><small>{shortName}</small></span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <nav className="solutions-index" aria-label="Contenido de soluciones">
          <Container>
            <span>Explora Get Code</span>
            <a href="#catalogo">Soluciones por área</a>
            <a href="#erp-completo">ERP completo</a>
            <a href="#como-funciona">Cómo se conecta</a>
            <a href="#contacto">Solicitar demo</a>
          </Container>
        </nav>

        <section className="solution-explorer section" id="catalogo" aria-labelledby="catalog-title">
          <Container>
            <header className="solutions-section-heading">
              <div><span>Soluciones por área</span><h2 id="catalog-title">Elige tu punto de entrada.</h2></div>
              <p>Cada solución resuelve un frente completo del negocio. Al combinarlas, la información fluye sin duplicidad entre equipos.</p>
            </header>

            <div className="solution-selector" role="tablist" aria-label="Seleccionar una solución empresarial">
              {solutionPackages.map(({ id, shortName, icon: Icon }, index) => (
                <button
                  className={id === activeId ? "is-active" : ""}
                  key={id}
                  id={`solution-tab-${id}`}
                  type="button"
                  role="tab"
                  aria-selected={id === activeId}
                  aria-controls="solution-panel"
                  tabIndex={id === activeId ? 0 : -1}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  onClick={() => setActiveId(id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <Icon /><span>{shortName}</span><FiChevronRight />
                </button>
              ))}
            </div>

            <article className="solution-focus" id="solution-panel" role="tabpanel" aria-labelledby={`solution-tab-${activeId}`}>
              <div className="solution-focus__content">
                {activePackage.highlight && <span className="solution-focus__highlight">{activePackage.highlight}</span>}
                <div className="solution-focus__title"><span><ActiveIcon /></span><div><small>{activePackage.shortName}</small><h3>{activePackage.name}</h3></div></div>
                <p>{activePackage.description}</p>
                <strong className="solution-focus__audience">Pensado para: {activePackage.audience}</strong>
                <div className="solution-focus__benefits">
                  {activePackage.benefits.map((benefit) => <span key={benefit}><FiCheckCircle />{benefit}</span>)}
                </div>
                <div className="solution-focus__actions">
                  <div><small>Desde US$</small><strong>{activePackage.price}</strong><span>/mes</span></div>
                  <Button href={`/?interes=${encodeURIComponent(activePackage.name)}#contacto`} icon={<FiArrowRight />}>Solicitar esta solución</Button>
                </div>
                {activePackage.moduleLinks.length > 0 && (
                  <nav aria-label={`Detalles de ${activePackage.name}`}>
                    <span>Conoce cada módulo</span>
                    <div>{activePackage.moduleLinks.map(({ href, label }) => <Link key={href} to={href}>{label}<FiArrowRight /></Link>)}</div>
                  </nav>
                )}
              </div>

              <div className="solution-focus__visual">
                <header><div><ActiveIcon /><span><small>Espacio de trabajo</small><strong>{activePackage.shortName}</strong></span></div><em>En línea</em></header>
                <div className="solution-focus__workflow">
                  {activePackage.modules.slice(0, 4).map((module, index) => (
                    <div key={module}><span>{String(index + 1).padStart(2, "0")}</span><strong>{module}</strong>{index < 3 && <i />}</div>
                  ))}
                </div>
                <div className="solution-focus__result"><span>Resultado operativo</span><strong>{activePackage.benefits[0]}</strong><FiBarChart2 /></div>
                <div className="solution-focus__modules"><small>También incluye</small><div>{activePackage.modules.slice(4).map((module) => <span key={module}>{module}</span>)}</div></div>
              </div>
            </article>
          </Container>
        </section>

        <section className="erp-suite section" id="erp-completo" aria-labelledby="erp-title">
          <Container>
            <div className="erp-suite__panel">
              <div className="erp-suite__intro">
                <span>La experiencia completa</span>
                <h2 id="erp-title">{fullERPPlan.name}</h2>
                <p>{fullERPPlan.description}</p>
                <div className="erp-suite__price"><small>Desde US$</small><strong>{fullERPPlan.price}</strong><span>{fullERPPlan.suffix}</span></div>
                <Button href={`/?interes=${encodeURIComponent(fullERPPlan.name)}#contacto`} variant="secondary" size="large" icon={<FiArrowRight />}>Cotizar ERP completo</Button>
              </div>
              <div className="erp-suite__coverage">
                <header><span>Cobertura empresarial</span><strong>Todo comparte la misma base</strong></header>
                <div>{fullERPPlan.includes.map((item) => <span key={item}><FiCheck />{item}</span>)}</div>
              </div>
            </div>

            <div className="adoption-path" aria-label="Formas de comenzar con Get Code">
              <article><span>01</span><FiGrid /><small>Necesidad puntual</small><h3>{individualModulePlan.name}</h3><p>Activa una capacidad específica y valida su impacto.</p><strong>US${individualModulePlan.price}<small>/mes</small></strong></article>
              <article><span>02</span><FiLayers /><small>Proceso de un área</small><h3>Paquete empresarial</h3><p>Conecta los módulos que resuelven un flujo completo.</p><strong>Desde US$119<small>/mes</small></strong></article>
              <article className="is-featured"><span>03</span><FiShield /><small>Operación integral</small><h3>ERP completo</h3><p>Unifica todas las áreas, indicadores y automatizaciones.</p><strong>US${fullERPPlan.price}<small>/mes</small></strong></article>
            </div>
          </Container>
        </section>

        <section className="solutions-operation section" id="como-funciona" aria-labelledby="operation-title">
          <Container>
            <header className="solutions-section-heading">
              <div><span>Una sola forma de operar</span><h2 id="operation-title">De la solicitud a la decisión.</h2></div>
              <p>No son aplicaciones aisladas. Es un flujo continuo donde cada acción alimenta la siguiente y deja evidencia.</p>
            </header>
            <ol>
              {operatingFlow.map(({ icon: Icon, label, text }, index) => <li key={label}><span>0{index + 1}</span><Icon /><h3>{label}</h3><p>{text}</p>{index < operatingFlow.length - 1 && <FiArrowRight />}</li>)}
            </ol>
          </Container>
        </section>

        <section className="solutions-final-cta section">
          <Container>
            <div>
              <span>Una recomendación basada en tu realidad</span>
              <h2>No tienes que elegir el ERP a ciegas.</h2>
              <p>Revisamos tus procesos, usuarios y prioridades para recomendar el punto de entrada correcto.</p>
              <Button href="#contacto" variant="secondary" size="large" icon={<FiArrowRight />}>Diseñar mi solución</Button>
            </div>
          </Container>
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default SolutionsPage;
