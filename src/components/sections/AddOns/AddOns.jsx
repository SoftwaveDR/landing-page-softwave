import {
  FiBarChart2,
  FiBookOpen,
  FiCloud,
  FiHeadphones,
  FiLink,
  FiZap,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import "./AddOns.css";

const addOns = [
  {
    icon: FiLink,
    title: "Integraciones",
    description: "Conecta Get Code con ERP, facturación, correo, almacenamiento y servicios externos.",
    tag: "Según alcance",
  },
  {
    icon: FiZap,
    title: "Automatizaciones avanzadas",
    description: "Activa reglas, recordatorios y acciones automáticas para reducir tareas repetitivas.",
    tag: "Desde US$ 25/mes",
  },
  {
    icon: FiBarChart2,
    title: "Analítica personalizada",
    description: "Incorpora indicadores, tableros y reportes diseñados para tus decisiones clave.",
    tag: "Desde US$ 35/mes",
  },
  {
    icon: FiCloud,
    title: "Almacenamiento adicional",
    description: "Amplía la capacidad para documentos, evidencias y archivos de tu operación.",
    tag: "Desde US$ 15/mes",
  },
  {
    icon: FiHeadphones,
    title: "Soporte prioritario",
    description: "Obtén atención preferente y acompañamiento continuo para tu equipo.",
    tag: "Desde US$ 49/mes",
  },
  {
    icon: FiBookOpen,
    title: "Capacitación",
    description: "Prepara a usuarios y administradores con sesiones adaptadas a sus responsabilidades.",
    tag: "Por sesión",
  },
];

function AddOns() {
  return (
    <section className="addons section" id="complementos" aria-labelledby="addons-title">
      <Container>
        <header className="addons__header">
          <div>
            <span className="addons__eyebrow">Complementos</span>
            <h2 id="addons-title">Extiende Get Code al ritmo de tu operación.</h2>
          </div>
          <div className="addons__intro">
            <p>
              Empieza con lo esencial y agrega capacidades cuando las necesites,
              sin convertir la plataforma en una solución rígida o sobredimensionada.
            </p>
            <Button href="#precios" variant="outline">Ver planes y precios</Button>
          </div>
        </header>

        <div className="addons__grid">
          {addOns.map(({ icon: Icon, title, description, tag }) => (
            <article className="addon-card" key={title}>
              <span className="addon-card__icon"><Icon aria-hidden="true" /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <small>{tag}</small>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AddOns;

