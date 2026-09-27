import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiLayers,
  FiLink,
  FiShield,
} from "react-icons/fi";

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import Button from "../components/common/Button/Button";
import Container from "../components/common/Container/Container";
import WhatsAppFloat from "../components/common/WhatsAppFloat/WhatsAppFloat";
import { detailedModuleIds, moduleDetails } from "../data/moduleDetails";
import "./ModuleDetailPage.css";

function ModuleDetailPage() {
  const { moduleId } = useParams();
  const module = moduleDetails[moduleId];

  useEffect(() => {
    if (!module) return undefined;
    document.title = `${module.name} | Get Code de Softwave`;
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => { document.title = "Get Code | Plataforma empresarial de Softwave"; };
  }, [module]);

  if (!module) return <Navigate to="/404" replace />;

  const Icon = module.icon;
  const contactHref = `/?interes=${encodeURIComponent(module.name)}#contacto`;

  return (
    <div className="page module-detail-page">
      <Header />
      <main>
        <section className="module-hero" id="inicio" aria-labelledby="module-title">
          <Container>
            <nav className="module-breadcrumb" aria-label="Ruta de navegación">
              <Link to="/"><FiArrowLeft /> Inicio</Link><span>/</span><Link to="/soluciones">Soluciones</Link><span>/</span><strong>{module.name}</strong>
            </nav>

            <div className="module-hero__grid">
              <div className="module-hero__copy">
                <span className="module-hero__eyebrow"><Icon /> {module.eyebrow}</span>
                <h1 id="module-title">{module.headline}</h1>
                <p>{module.summary}</p>
                <div className="module-hero__actions">
                  <Button href={contactHref} size="large" icon={<FiArrowRight />}>Solicitar demo de {module.name}</Button>
                  <Button href="#incluye" variant="outline" size="large">Ver qué incluye</Button>
                </div>
                <ul>
                  <li><FiCheck /> Implementación por etapas</li>
                  <li><FiCheck /> Roles y trazabilidad</li>
                  <li><FiCheck /> Indicadores conectados</li>
                </ul>
              </div>

              <div className="module-preview" aria-label={`Vista conceptual del módulo ${module.name}`}>
                <div className="module-preview__bar"><span><i /><i /><i /></span><strong>Get Code · {module.name}</strong></div>
                <div className="module-preview__body">
                  <aside><Icon /><span>Resumen</span><span>Procesos</span><span>Indicadores</span></aside>
                  <div className="module-preview__content">
                    <header><div><small>Centro de control</small><strong>{module.name}</strong></div><span>En tiempo real</span></header>
                    <div className="module-preview__metrics">
                      <article><small>Procesos activos</small><strong>Visibles</strong><span>Con responsables</span></article>
                      <article><small>Seguimiento</small><strong>Centralizado</strong><span>Con trazabilidad</span></article>
                    </div>
                    <div className="module-preview__chart"><small>Actividad del módulo</small><div>{[42, 68, 51, 82, 64, 91, 74].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="module-problem section" aria-labelledby="problem-title">
          <Container>
            <div className="module-section-heading module-section-heading--split">
              <div><span>El reto operativo</span><h2 id="problem-title">{module.promise}</h2></div>
              <p>Get Code organiza el proceso completo para que la información, las decisiones y las evidencias permanezcan conectadas.</p>
            </div>
            <div className="module-problem__grid">
              {module.pains.map((pain, index) => <article key={pain}><small>0{index + 1}</small><strong>{pain}</strong></article>)}
            </div>
          </Container>
        </section>

        <section className="module-includes section" id="incluye" aria-labelledby="includes-title">
          <Container>
            <div className="module-section-heading">
              <span>Capacidades del módulo</span>
              <h2 id="includes-title">Todo lo necesario para gestionar {module.name.toLowerCase()}.</h2>
              <p>El alcance final se configura según el proceso, las responsabilidades y las prioridades de cada organización.</p>
            </div>
            <div className="module-includes__grid">
              {module.submodules.map(([title, description], index) => (
                <article key={title}>
                  <div><span>{String(index + 1).padStart(2, "0")}</span><FiLayers /></div>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="module-flow section" aria-labelledby="flow-title">
          <Container>
            <div className="module-section-heading module-section-heading--light">
              <span>Flujo conectado</span><h2 id="flow-title">Del registro al resultado, sin perder contexto.</h2>
            </div>
            <ol className="module-flow__steps">
              {module.workflow.map((step, index) => <li key={step}><small>0{index + 1}</small><strong>{step}</strong>{index < module.workflow.length - 1 && <FiArrowRight />}</li>)}
            </ol>
          </Container>
        </section>

        <section className="module-value section" aria-labelledby="value-title">
          <Container>
            <div className="module-value__grid">
              <div>
                <div className="module-section-heading"><span>Virtudes y beneficios</span><h2 id="value-title">Más control para operar y mejorar.</h2></div>
                <ul className="module-value__benefits">{module.benefits.map((benefit) => <li key={benefit}><FiCheck />{benefit}</li>)}</ul>
              </div>
              <div className="module-value__indicators">
                <header><FiBarChart2 /><div><span>Indicadores disponibles</span><strong>Actividad convertida en información útil</strong></div></header>
                <div>{module.indicators.map((indicator) => <span key={indicator}>{indicator}</span>)}</div>
              </div>
            </div>
          </Container>
        </section>

        <section className="module-integrations section" aria-labelledby="integrations-title">
          <Container>
            <div className="module-section-heading module-section-heading--split">
              <div><span>Operación conectada</span><h2 id="integrations-title">Integraciones relacionadas.</h2></div>
              <p>La viabilidad y profundidad de cada conexión se valida durante el levantamiento técnico.</p>
            </div>
            <div className="module-integrations__grid">{module.integrations.map((integration) => <article key={integration}><FiLink /><strong>{integration}</strong></article>)}</div>
          </Container>
        </section>

        <section className="module-faq section" aria-labelledby="faq-title">
          <Container size="readable">
            <div className="module-section-heading"><span>Preguntas frecuentes</span><h2 id="faq-title">Antes de implementar {module.name}.</h2></div>
            <div className="module-faq__list">{module.faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </Container>
        </section>

        <section className="module-cta section">
          <Container>
            <div className="module-cta__panel">
              <FiShield />
              <div><span>Demo enfocada en tu operación</span><h2>Descubre cómo {module.name} puede adaptarse a tu proceso.</h2><p>Revisamos necesidad, alcance, responsables e integraciones antes de recomendar una configuración.</p></div>
              <Button href={contactHref} variant="secondary" size="large" icon={<FiArrowRight />}>Solicitar demo</Button>
            </div>
            <nav className="module-related" aria-label="Otras soluciones">
              <span>Explora otras soluciones</span>
              <div>{detailedModuleIds.filter((id) => id !== module.id).map((id) => <Link key={id} to={`/modulos/${id}`}>{moduleDetails[id].name}</Link>)}</div>
            </nav>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default ModuleDetailPage;

