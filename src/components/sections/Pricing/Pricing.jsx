import { FiArrowRight, FiCheck, FiGrid } from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { fullERPPlan, individualModulePlan, solutionPackages } from "../../../data/solutionPackages";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing section" id="precios" aria-labelledby="pricing-title">
      <Container>
        <header className="pricing__header">
          <span>Precios por solución</span>
          <h2 id="pricing-title">Comienza por un módulo, combina paquetes o activa el ERP completo.</h2>
          <p>Precios mensuales referenciales en dólares. La propuesta final depende de usuarios, implementación, integraciones y alcance funcional.</p>
        </header>

        <article className="pricing-erp">
          <div className="pricing-erp__heading">
            <span>Mayor cobertura</span>
            <h3>{fullERPPlan.name}</h3>
            <p>{fullERPPlan.description}</p>
          </div>
          <div className="pricing-erp__features">
            {fullERPPlan.features.map((feature) => <span key={feature}><FiCheck />{feature}</span>)}
          </div>
          <div className="pricing-erp__action">
            <small>Desde US$</small><strong>{fullERPPlan.price}</strong><span>{fullERPPlan.suffix}</span>
            <Button href={`/?interes=${encodeURIComponent(fullERPPlan.name)}#contacto`} variant="secondary" icon={<FiArrowRight />}>Cotizar ERP completo</Button>
          </div>
        </article>

        <div className="pricing__subheading">
          <div><span>Paquetes por área</span><h3>Precios claros para cada solución.</h3></div>
          <p>Todos los paquetes comparten la misma base tecnológica y pueden conectarse sin duplicar información.</p>
        </div>

        <div className="pricing-packages">
          {solutionPackages.map(({ id, name, icon: Icon, price, description, modules, highlight }) => (
            <article className={`pricing-package${highlight ? " pricing-package--featured" : ""}`} key={id}>
              {highlight && <span className="pricing-package__badge">Ideal para agencias de viajes</span>}
              <header><Icon /><div><h3>{name}</h3><p>{description}</p></div></header>
              <div className="pricing-package__price"><small>Desde US$</small><strong>{price}</strong><span>/mes</span></div>
              <ul>{modules.slice(0, 5).map((module) => <li key={module}><FiCheck />{module}</li>)}</ul>
              <Button href={`/?interes=${encodeURIComponent(name)}#contacto`} variant={highlight ? "primary" : "outline"} icon={<FiArrowRight />}>Solicitar este paquete</Button>
            </article>
          ))}
        </div>

        <article className="pricing-individual">
          <FiGrid />
          <div><span>También puedes comenzar con uno</span><h3>{individualModulePlan.name}</h3><p>{individualModulePlan.description}</p></div>
          <ul>{individualModulePlan.features.map((feature) => <li key={feature}><FiCheck />{feature}</li>)}</ul>
          <div><small>Desde US$</small><strong>{individualModulePlan.price}</strong><span>{individualModulePlan.suffix}</span></div>
          <Button href="/?interes=Módulo%20individual#contacto" variant="outline" icon={<FiArrowRight />}>Elegir módulo</Button>
        </article>

        <p className="pricing__note">La implementación inicial, impuestos, almacenamiento extraordinario y desarrollos especiales se cotizan por separado.</p>
      </Container>
    </section>
  );
}

export default Pricing;

