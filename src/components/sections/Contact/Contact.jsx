import { useState } from "react";

import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiLayers,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiShield,
  FiTarget,
  FiUser,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";

import "./Contact.css";


const projectTypes = [
  "Desarrollo de software empresarial",
  "Automatización de procesos",
  "ERP o plataforma operativa",
  "Business Intelligence y analítica",
  "Integración entre sistemas",
  "Modernización de una solución existente",
  "Consultoría tecnológica",
  "Otro",
];


const businessAreas = [
  "Dirección / Gerencia",
  "Operaciones",
  "Recursos Humanos",
  "Finanzas",
  "Compras",
  "Comercial / Ventas",
  "Servicio al cliente",
  "Tecnología",
  "Calidad",
  "Otra",
];


const startingPoints = [
  {
    icon: <FiTarget />,
    title: "Partimos de la necesidad",
    description:
      "No necesitas llegar con una solución definida. Podemos comenzar entendiendo el problema.",
  },
  {
    icon: <FiLayers />,
    title: "Evaluamos el contexto completo",
    description:
      "Procesos, usuarios, datos, sistemas actuales, restricciones y objetivos forman parte del análisis.",
  },
  {
    icon: <FiShield />,
    title: "Conversación con propósito",
    description:
      "La primera conversación busca determinar si Softwave realmente puede agregar valor a tu necesidad.",
  },
];


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    businessArea: "",
    objective: "",
  });

  const [formStatus, setFormStatus] = useState("idle");


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      formData.name,
      formData.email,
      formData.projectType,
      formData.objective,
    ];

    const hasEmptyRequiredField =
      requiredFields.some(
        (value) => !value.trim(),
      );

    if (hasEmptyRequiredField) {
      setFormStatus("error");
      return;
    }

    /*
     * Próxima integración:
     *
     * Aquí conectaremos el formulario con:
     * - API Softwave
     * - CRM
     * - servicio de correo
     * - automatización comercial
     *
     * No simulamos un envío hasta tener
     * el canal real conectado.
     */

    setFormStatus("ready");
  };


  return (
    <section
      className="contact section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      {/* ================================================================
          BACKGROUND
          ================================================================ */}

      <div
        className="contact__background"
        aria-hidden="true"
      >
        <span className="contact__orb contact__orb--cyan" />
        <span className="contact__orb contact__orb--violet" />
        <span className="contact__grid" />
      </div>


      <Container
        size="wide"
        className="contact__container"
      >
        {/* ================================================================
            HEADER
            ================================================================ */}

        <header className="contact__header">
          <div className="contact__heading">
            <span className="contact__eyebrow">
              Hablemos de tu necesidad
            </span>

            <h2 id="contact-title">
              Toda buena solución comienza por{" "}
              <span>
                entender correctamente el problema
              </span>
            </h2>
          </div>

          <div className="contact__header-copy">
            <p>
              Cuéntanos qué necesita tu organización. No tienes que definir
              previamente la tecnología, la arquitectura ni todas las
              funcionalidades. Nuestro primer trabajo es comprender el contexto.
            </p>

            <div className="contact__availability">
              <span aria-hidden="true">
                <FiClock />
              </span>

              <p>
                Iniciaremos evaluando tu necesidad y el contexto en el que debe
                funcionar la solución.
              </p>
            </div>
          </div>
        </header>


        {/* ================================================================
            MAIN EXPERIENCE
            ================================================================ */}

        <div className="contact__layout">
          {/* ==============================================================
              LEFT — CONSULTATIVE MESSAGE
              ============================================================== */}

          <aside className="contact__consultation">
            <div className="contact__consultation-top">
              <span className="contact__consultation-label">
                Antes de hablar de tecnología
              </span>

              <h3>
                Queremos comprender qué necesitas resolver.
              </h3>

              <p>
                Podemos trabajar desde una idea inicial, un proceso manual, un
                sistema que necesita evolucionar o una necesidad empresarial
                que todavía no tiene una solución tecnológica definida.
              </p>
            </div>


            <div className="contact__starting-points">
              {startingPoints.map((item) => (
                <article
                  className="contact__starting-point"
                  key={item.title}
                >
                  <span
                    className="contact__starting-icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <div>
                    <strong>
                      {item.title}
                    </strong>

                    <p>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>


            <div className="contact__consultation-footer">
              <div className="contact__consultation-quote">
                <FiMessageSquare aria-hidden="true" />

                <p>
                  Una solución debe llegar hasta donde llega la necesidad.
                </p>
              </div>

              <div className="contact__consultation-flow">
                <span>
                  Escuchar
                </span>

                <i />

                <span>
                  Comprender
                </span>

                <i />

                <span>
                  Diseñar
                </span>

                <i />

                <strong>
                  Resolver
                </strong>
              </div>
            </div>
          </aside>


          {/* ==============================================================
              RIGHT — FORM
              ============================================================== */}

          <div className="contact__form-panel">
            <div className="contact__form-header">
              <div>
                <span>
                  Solicitud inicial
                </span>

                <h3>
                  Cuéntanos sobre tu proyecto
                </h3>

                <p>
                  Comparte la información esencial. El detalle lo
                  profundizaremos durante la conversación.
                </p>
              </div>

              <span
                className="contact__form-icon"
                aria-hidden="true"
              >
                <FiSend />
              </span>
            </div>


            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* ----------------------------------------------------------
                  NAME / COMPANY
                  ---------------------------------------------------------- */}

              <div className="contact__form-grid">
                <div className="contact__field">
                  <label htmlFor="contact-name">
                    Nombre
                    <span>*</span>
                  </label>

                  <div className="contact__control">
                    <FiUser aria-hidden="true" />

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>


                <div className="contact__field">
                  <label htmlFor="contact-company">
                    Empresa
                  </label>

                  <div className="contact__control">
                    <FiBriefcase aria-hidden="true" />

                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa"
                      autoComplete="organization"
                    />
                  </div>
                </div>
              </div>


              {/* ----------------------------------------------------------
                  EMAIL / PHONE
                  ---------------------------------------------------------- */}

              <div className="contact__form-grid">
                <div className="contact__field">
                  <label htmlFor="contact-email">
                    Correo electrónico
                    <span>*</span>
                  </label>

                  <div className="contact__control">
                    <FiMail aria-hidden="true" />

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nombre@empresa.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>


                <div className="contact__field">
                  <label htmlFor="contact-phone">
                    Teléfono
                  </label>

                  <div className="contact__control">
                    <FiMessageSquare aria-hidden="true" />

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 809 000 0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>
              </div>


              {/* ----------------------------------------------------------
                  PROJECT TYPE / BUSINESS AREA
                  ---------------------------------------------------------- */}

              <div className="contact__form-grid">
                <div className="contact__field">
                  <label htmlFor="contact-project-type">
                    Tipo de necesidad
                    <span>*</span>
                  </label>

                  <div className="contact__control contact__control--select">
                    <FiLayers aria-hidden="true" />

                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Seleccionar
                      </option>

                      {projectTypes.map((type) => (
                        <option
                          value={type}
                          key={type}
                        >
                          {type}
                        </option>
                      ))}
                    </select>

                    <FiChevronDown
                      className="contact__select-arrow"
                      aria-hidden="true"
                    />
                  </div>
                </div>


                <div className="contact__field">
                  <label htmlFor="contact-business-area">
                    Área principal
                  </label>

                  <div className="contact__control contact__control--select">
                    <FiTarget aria-hidden="true" />

                    <select
                      id="contact-business-area"
                      name="businessArea"
                      value={formData.businessArea}
                      onChange={handleChange}
                    >
                      <option value="">
                        Seleccionar
                      </option>

                      {businessAreas.map((area) => (
                        <option
                          value={area}
                          key={area}
                        >
                          {area}
                        </option>
                      ))}
                    </select>

                    <FiChevronDown
                      className="contact__select-arrow"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>


              {/* ----------------------------------------------------------
                  OBJECTIVE
                  ---------------------------------------------------------- */}

              <div className="contact__field">
                <label htmlFor="contact-objective">
                  ¿Qué necesitas resolver?
                  <span>*</span>
                </label>

                <div className="contact__control contact__control--textarea">
                  <textarea
                    id="contact-objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    placeholder="Describe brevemente el proceso, problema, oportunidad o necesidad que quieres resolver..."
                    rows="6"
                    required
                  />
                </div>

                <small className="contact__field-help">
                  No necesitas especificar tecnologías. Concéntrate en la
                  necesidad y el resultado esperado.
                </small>
              </div>


              {/* ----------------------------------------------------------
                  STATUS
                  ---------------------------------------------------------- */}

              {formStatus === "error" && (
                <div
                  className="contact__form-message contact__form-message--error"
                  role="alert"
                >
                  Completa los campos obligatorios antes de continuar.
                </div>
              )}


              {formStatus === "ready" && (
                <div
                  className="contact__form-message contact__form-message--ready"
                  role="status"
                >
                  <FiCheck aria-hidden="true" />

                  <span>
                    La información está completa. El canal de envío se
                    conectará en la integración del formulario.
                  </span>
                </div>
              )}


              {/* ----------------------------------------------------------
                  SUBMIT
                  ---------------------------------------------------------- */}

              <div className="contact__form-footer">
                <div className="contact__privacy">
                  <FiShield aria-hidden="true" />

                  <p>
                    Utilizaremos esta información únicamente para comprender y
                    responder a tu solicitud.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  icon={<FiArrowUpRight />}
                >
                  Enviar solicitud
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;