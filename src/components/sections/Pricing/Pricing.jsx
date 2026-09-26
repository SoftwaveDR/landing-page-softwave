import { FiArrowRight, FiCheck } from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import "./Pricing.css";

const plans = [
  {
    name: "Esencial",
    description: "Para equipos que quieren digitalizar su primer proceso.",
    price: "99",
    suffix: "/mes",
    features: ["Hasta 5 usuarios", "1 módulo operativo", "Flujos y aprobaciones", "Soporte por correo"],
    cta: "Solicitar plan Esencial",
  },
  {
    name: "Profesional",
    description: "Para operaciones que necesitan conectar áreas y ganar visibilidad.",
    price: "249",
    suffix: "/mes",
    featured: true,
    features: ["Hasta 20 usuarios", "Hasta 4 módulos", "Dashboards y KPIs", "Automatizaciones base", "Soporte prioritario"],
    cta: "Solicitar plan Profesional",
  },
  {
    name: "Empresarial",
    description: "Para organizaciones con procesos, integraciones y gobierno a medida.",
    price: "A medida",
    suffix: "",
    features: ["Usuarios y módulos según alcance", "Integraciones empresariales", "Analítica personalizada", "Acompañamiento dedicado"],
    cta: "Cotizar solución",
  },
];

function Pricing() {
  return (
    <section className="pricing section" id="precios" aria-labelledby="pricing-title">
      <Container>
        <header className="pricing__header">
          <span>Planes y precios</span>
          <h2 id="pricing-title">Una inversión clara para empezar y crecer.</h2>
          <p>Precios referenciales en dólares. La propuesta final depende de módulos, usuarios, implementación y complementos seleccionados.</p>
        </header>

        <div className="pricing__grid">
          {plans.map(({ name, description, price, suffix, featured, features, cta }) => (
            <article className={`pricing-card${featured ? " pricing-card--featured" : ""}`} key={name}>
              {featured && <span className="pricing-card__badge">Más elegido</span>}
              <div className="pricing-card__heading">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <div className="pricing-card__price">
                {price !== "A medida" && <small>Desde US$</small>}
                <strong>{price}</strong>
                {suffix && <span>{suffix}</span>}
              </div>
              <ul>
                {features.map((feature) => <li key={feature}><FiCheck aria-hidden="true" />{feature}</li>)}
              </ul>
              <Button href="#contacto" variant={featured ? "primary" : "outline"} icon={<FiArrowRight />}>{cta}</Button>
            </article>
          ))}
        </div>

        <p className="pricing__note">La implementación inicial y desarrollos especiales se cotizan por separado después de revisar tu operación.</p>
      </Container>
    </section>
  );
}

export default Pricing;

