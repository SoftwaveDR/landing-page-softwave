import {
  FiArrowRight,
  FiCheckCircle,
  FiCompass,
  FiRefreshCw,
  FiSearch,
  FiSliders,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import "./Methodology.css";

const steps = [
  { number: "01", icon: FiSearch, label: "Descubrir", title: "Entendemos tu operación", text: "Procesos, responsables, datos, fricciones y resultado esperado." },
  { number: "02", icon: FiCompass, label: "Diseñar", title: "Configuramos el camino", text: "Módulos, reglas, permisos, integraciones y prioridades." },
  { number: "03", icon: FiSliders, label: "Implementar", title: "Activamos por etapas", text: "Entregas verificables, adopción guiada y control del alcance." },
  { number: "04", icon: FiRefreshCw, label: "Evolucionar", title: "Medimos y mejoramos", text: "Indicadores, optimización y nuevos módulos cuando aportan valor." },
];

function Methodology() {
  return (
    <section className="methodology section" id="metodologia" aria-labelledby="methodology-title">
      <Container className="methodology__container">
        <header className="methodology__header">
          <div>
            <span className="methodology__eyebrow">Implementación con control</span>
            <h2 id="methodology-title">De tu proceso actual a Get Code, sin una caja negra.</h2>
          </div>
          <div>
            <p>Cada etapa produce decisiones claras, entregables verificables y una siguiente acción.</p>
            <Button href="#contacto" variant="outline" icon={<FiArrowRight />}>Planificar implementación</Button>
          </div>
        </header>

        <ol className="methodology__steps">
          {steps.map(({ number, icon: Icon, label, title, text }) => (
            <li key={number}>
              <div className="methodology__step-top">
                <span><Icon aria-hidden="true" /></span>
                <small>{number}</small>
              </div>
              <em>{label}</em>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <div className="methodology__assurance">
          <FiCheckCircle aria-hidden="true" />
          <span><small>Principio Softwave</small><strong>Configurar solo lo necesario, validar temprano y crecer con evidencia.</strong></span>
        </div>
      </Container>
    </section>
  );
}

export default Methodology;
