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
import { fullERPPlan, solutionPackages } from "../../../data/solutionPackages";
import "./Solutions.css";

const platformCapabilities = [
  { icon: FiSliders, title: "Configurable", text: "Reglas, permisos y flujos se adaptan a tu operación." },
  { icon: FiLink, title: "Integrable", text: "Conecta Get Code con las herramientas que ya utilizas." },
  { icon: FiShield, title: "Trazable", text: "Estados, responsables e historial siempre disponibles." },
  { icon: FiCloud, title: "Escalable", text: "Activa módulos y capacidades a medida que creces." },
];

function Solutions() {
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
              <span className="get-code__eyebrow">Soluciones empresariales</span>
              <h2>Un ERP completo, organizado según cómo trabaja tu empresa.</h2>
            </div>
            <p>
              Contrata una solución por área o activa el ERP completo. Todos los
              paquetes comparten usuarios, flujos, trazabilidad e información.
            </p>
          </div>

          <article className="erp-overview">
            <div className="erp-overview__copy">
              <span>La mirada completa</span>
              <h3>{fullERPPlan.name}</h3>
              <p>{fullERPPlan.description}</p>
              <div className="erp-overview__price"><small>Desde US$</small><strong>{fullERPPlan.price}</strong><span>{fullERPPlan.suffix}</span></div>
              <Button href="#precios" variant="secondary" icon={<FiArrowRight />}>Comparar planes</Button>
            </div>
            <div className="erp-overview__map" aria-label="Áreas conectadas por Get Code ERP">
              <strong>GET CODE ERP</strong>
              <div>{fullERPPlan.includes.map((item) => <span key={item}><FiCheck />{item}</span>)}</div>
            </div>
          </article>

          <div className="solution-packages" aria-label="Paquetes de soluciones Get Code">
            {solutionPackages.map(({ id, name, shortName, icon: Icon, price, description, audience, highlight, modules, moduleLinks, benefits }) => (
              <article className={`solution-package${highlight ? " solution-package--highlight" : ""}`} key={id}>
                {highlight && <span className="solution-package__badge">{highlight}</span>}
                <header>
                  <span className="solution-package__icon"><Icon aria-hidden="true" /></span>
                  <div><small>{shortName}</small><h3>{name}</h3></div>
                </header>
                <p>{description}</p>
                <span className="solution-package__audience">{audience}</span>
                <div className="solution-package__modules">
                  <small>Incluye</small>
                  <div>{modules.map((module) => <span key={module}>{module}</span>)}</div>
                </div>
                <ul>{benefits.map((benefit) => <li key={benefit}><FiCheck />{benefit}</li>)}</ul>
                <div className="solution-package__footer">
                  <div><small>Desde US$</small><strong>{price}</strong><span>/mes</span></div>
                  <Button href={`/?interes=${encodeURIComponent(name)}#contacto`} size="small" icon={<FiArrowRight />}>Solicitar paquete</Button>
                </div>
                {moduleLinks.length > 0 && <nav aria-label={`Detalles de ${name}`}>{moduleLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>}
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
