import {
  FiArrowRight,
  FiBarChart2,
  FiCode,
  FiLink,
  FiSettings,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: FiSettings,
    title: "Configuración y personalización",
    description: "Adaptamos Get Code a tus reglas, roles, nomenclaturas y procesos sin perder la lógica de una plataforma mantenible.",
    tags: ["Flujos", "Reglas", "Permisos"],
  },
  {
    number: "02",
    icon: FiLink,
    title: "Integraciones empresariales",
    description: "Conectamos servicios, fuentes de datos y sistemas existentes para que la información avance sin reprocesos.",
    tags: ["APIs", "Sistemas", "Datos"],
  },
  {
    number: "03",
    icon: FiBarChart2,
    title: "Analítica y evolución",
    description: "Transformamos la actividad de la plataforma en indicadores y mejoras continuas para la operación.",
    tags: ["Dashboards", "KPIs", "Roadmap"],
  },
];

function Services() {
  return (
    <section className="services section" id="servicios" aria-labelledby="services-title">
      <Container className="services__container">
        <header className="services__header">
          <div>
            <span className="services__eyebrow"><FiCode /> Softwave detrás de Get Code</span>
            <h2 id="services-title">Una plataforma sólida. Un equipo que la adapta a tu realidad.</h2>
          </div>
          <div className="services__header-copy">
            <p>
              Get Code es el núcleo. Softwave aporta el análisis, la ingeniería
              y el acompañamiento para convertirlo en una solución alineada con
              tu operación.
            </p>
            <Button href="#contacto" variant="outline" icon={<FiArrowRight />}>
              Conversar con Softwave
            </Button>
          </div>
        </header>

        <div className="services__grid">
          {services.map(({ number, icon: Icon, title, description, tags }) => (
            <article className="service-card" key={number}>
              <div className="service-card__top">
                <span><Icon aria-hidden="true" /></span>
                <small>{number}</small>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>

        <div className="services__promise">
          <span>Producto + acompañamiento</span>
          <strong>No entregamos una herramienta aislada: conectamos Get Code con el resultado que tu operación necesita.</strong>
        </div>
      </Container>
    </section>
  );
}

export default Services;
