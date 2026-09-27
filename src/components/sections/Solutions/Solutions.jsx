import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCloud,
  FiLink,
  FiShield,
  FiSliders,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { solutionPackages } from "../../../data/solutionPackages";
import "./Solutions.css";

const platformCapabilities = [
  { icon: FiSliders, title: "Configurable", text: "Reglas y permisos adaptados a tu operación." },
  { icon: FiLink, title: "Conectado", text: "La información fluye entre todas las áreas." },
  { icon: FiShield, title: "Trazable", text: "Cada acción conserva responsable e historial." },
  { icon: FiCloud, title: "Escalable", text: "Activa nuevas soluciones cuando las necesites." },
];

function Solutions() {
  return (
    <section className="get-code section" id="get-code" aria-labelledby="get-code-title">
      <Container>
        <header className="get-code__header">
          <div>
            <span>La plataforma empresarial de Softwave</span>
            <h2 id="get-code-title">Todo tu negocio puede trabajar como <em>un solo sistema.</em></h2>
          </div>
          <div>
            <p>Get Code organiza las áreas críticas de tu empresa en soluciones completas que comparten usuarios, datos, reglas e indicadores.</p>
            <Button href="/soluciones" variant="secondary" icon={<FiArrowRight />}>Conocer todas las soluciones</Button>
          </div>
        </header>

        <div className="get-code__overview">
          <div className="get-code__map">
            <div className="get-code__core"><span>GC</span><strong>GET CODE</strong><small>ERP conectado</small></div>
            {solutionPackages.map(({ id, shortName, icon: Icon }, index) => (
              <a href="/soluciones#catalogo" className={`get-code__node get-code__node--${index + 1}`} key={id}>
                <Icon /><span>{shortName}</span>
              </a>
            ))}
          </div>

          <div className="get-code__value">
            <span>Una mirada completa del ERP</span>
            <h3>Empieza por un área. Crece sin crear otra isla.</h3>
            <p>Cada solución funciona por sí misma y gana más valor cuando se conecta con las demás.</p>
            <ul>
              <li><FiCheck /> 6 soluciones empresariales</li>
              <li><FiCheck /> Más de 40 capacidades funcionales</li>
              <li><FiCheck /> Un solo gobierno de datos y accesos</li>
            </ul>
            <Button href="/soluciones" icon={<FiArrowRight />}>Explorar el ERP</Button>
          </div>
        </div>

        <div className="get-code__capabilities">
          {platformCapabilities.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><div><strong>{title}</strong><p>{text}</p></div></article>
          ))}
        </div>

        <div className="get-code__insight">
          <FiBarChart2 />
          <div><span>Inteligencia transversal</span><strong>La actividad de cada módulo alimenta indicadores y decisiones en tiempo real.</strong></div>
          <Button href="/soluciones#erp-completo" variant="outline" icon={<FiArrowRight />}>Ver ERP completo</Button>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
