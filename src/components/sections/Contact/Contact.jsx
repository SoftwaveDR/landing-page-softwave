import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiShield,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { getCodeModules } from "../../../data/getCodeModules";
import { CONTACT_EMAIL, WHATSAPP_URL } from "../../../data/contact";
import {
  fullERPPlan,
  individualModulePlan,
  solutionPackages,
} from "../../../data/solutionPackages";
import "./Contact.css";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "Demo general de Get Code",
  message: "",
};

function Contact() {
  const [searchParams] = useSearchParams();
  const requestedModule = searchParams.get("interes");
  const packageInterests = [
    fullERPPlan.name,
    ...solutionPackages.map((solutionPackage) => solutionPackage.name),
    individualModulePlan.name,
  ];
  const moduleInterest = getCodeModules.find((module) => module.name === requestedModule);
  const initialInterest = packageInterests.includes(requestedModule)
    ? requestedModule
    : moduleInterest
      ? `Módulo de ${moduleInterest.name}`
      : initialForm.interest;
  const [formData, setFormData] = useState(() => ({ ...initialForm, interest: initialInterest }));
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setFormStatus("idle");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      return;
    }

    const subject = `Solicitud Get Code — ${formData.company || formData.name}`;
    const body = [
      `Nombre: ${formData.name}`,
      `Empresa: ${formData.company || "No indicada"}`,
      `Correo: ${formData.email}`,
      `Teléfono: ${formData.phone || "No indicado"}`,
      `Interés: ${formData.interest}`,
      "",
      "Necesidad:",
      formData.message,
    ].join("\n");

    setFormStatus("ready");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact section" id="contacto" aria-labelledby="contact-title">
      <Container className="contact__container">
        <div className="contact__panel">
          <div className="contact__copy">
            <span className="contact__eyebrow">Solicita una demostración</span>
            <h2 id="contact-title">Ve cómo Get Code encaja en tu operación.</h2>
            <p>
              Cuéntanos qué proceso quieres mejorar. Prepararemos una
              conversación enfocada en tu contexto, tus módulos prioritarios y
              el resultado que necesitas.
            </p>

            <div className="contact__expectations">
              <article><FiClock /><span><strong>Conversación enfocada</strong><small>Revisamos necesidad, alcance y prioridad.</small></span></article>
              <article><FiMessageSquare /><span><strong>Demo con contexto</strong><small>Mostramos los módulos relevantes para tu caso.</small></span></article>
              <article><FiShield /><span><strong>Sin compromiso</strong><small>Primero validamos si Get Code puede aportar valor.</small></span></article>
            </div>

            <div className="contact__channels" aria-label="Canales de contacto directo">
              <a className="contact__channel" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                <span><small>Respuesta directa</small><strong>Conversar por WhatsApp</strong></span>
              </a>
              <a className="contact__channel" href={`mailto:${CONTACT_EMAIL}`}>
                <FiMail />
                <span><small>Escríbenos por correo</small><strong>{CONTACT_EMAIL}</strong></span>
              </a>
            </div>
          </div>

          <div className="contact__form-panel">
            <div className="contact__form-heading">
              <div><span>Solicitud de demo</span><h3>Hablemos de tu operación</h3></div>
              <FiSend aria-hidden="true" />
            </div>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-grid">
                <label>
                  <span>Nombre *</span>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" autoComplete="name" required />
                </label>
                <label>
                  <span>Empresa</span>
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="Nombre de la empresa" autoComplete="organization" />
                </label>
              </div>

              <div className="contact__form-grid">
                <label>
                  <span>Correo empresarial *</span>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="nombre@empresa.com" autoComplete="email" required />
                </label>
                <label>
                  <span>Teléfono</span>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Tu número" autoComplete="tel" />
                </label>
              </div>

              <label>
                <span>¿Qué quieres explorar?</span>
                <select name="interest" value={formData.interest} onChange={handleChange}>
                  <option>Demo general de Get Code</option>
                  <optgroup label="ERP y soluciones por área">
                    <option>{fullERPPlan.name}</option>
                    {solutionPackages.map((solutionPackage) => (
                      <option key={solutionPackage.id}>{solutionPackage.name}</option>
                    ))}
                    <option>{individualModulePlan.name}</option>
                  </optgroup>
                  <optgroup label="Módulos individuales">
                    {getCodeModules.map((module) => <option key={module.id}>Módulo de {module.name}</option>)}
                  </optgroup>
                  <option>Integración o personalización</option>
                </select>
              </label>

              <label>
                <span>¿Qué necesitas mejorar? *</span>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe el proceso, la dificultad actual y el resultado que buscas..." rows="4" required />
              </label>

              {formStatus === "error" && <p className="contact__message is-error" role="alert">Completa nombre, correo y necesidad antes de continuar.</p>}
              {formStatus === "ready" && <p className="contact__message is-ready" role="status"><FiCheck /> Abrimos tu aplicación de correo con la solicitud preparada.</p>}

              <div className="contact__form-footer">
                <small><FiShield /> Tus datos se usarán únicamente para responder a esta solicitud.</small>
                <Button type="submit" size="large" icon={<FiArrowRight />}>Preparar solicitud</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
