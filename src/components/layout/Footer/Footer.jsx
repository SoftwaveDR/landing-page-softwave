import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import Container from "../../common/Container/Container";

import softwaveLogo from "../../../assets/logos/Logo.png";

import "./Footer.css";


const footerLinks = [
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Soluciones",
    href: "#soluciones",
  },
  {
    label: "Cómo trabajamos",
    href: "#metodologia",
  },
  {
    label: "Nosotros",
    href: "#nosotros",
  },
];


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container
        size="wide"
        className="footer__container"
      >
        <div className="footer__top">
          {/* ============================================================
              BRAND
              ============================================================ */}

          <div className="footer__brand">
            <a
              href="#inicio"
              className="footer__logo-link"
              aria-label="Softwave - Ir al inicio"
            >
              <img
                src={softwaveLogo}
                alt="Softwave"
                className="footer__logo"
              />
            </a>

            <p className="footer__brand-description">
              Diseñamos soluciones digitales que conectan procesos,
              personas y datos para transformar necesidades empresariales
              en sistemas capaces de operar, crecer y generar valor.
            </p>

            <a
              href="#contacto"
              className="footer__primary-link"
            >
              <span>
                Hablemos de tu necesidad
              </span>

              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>


          {/* ============================================================
              NAVIGATION
              ============================================================ */}

          <div className="footer__column">
            <span className="footer__column-title">
              Navegación
            </span>

            <nav
              className="footer__navigation"
              aria-label="Navegación del pie de página"
            >
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>


          {/* ============================================================
              CONTACT
              ============================================================ */}

          <div className="footer__column">
            <span className="footer__column-title">
              Contacto
            </span>

            <div className="footer__contact">
              <a
                href="mailto:contacto@softwave.com"
                className="footer__contact-item"
              >
                <span
                  className="footer__contact-icon"
                  aria-hidden="true"
                >
                  <FiMail />
                </span>

                <span>
                  <small>
                    Correo
                  </small>

                  <strong>
                    contacto@softwave.com
                  </strong>
                </span>
              </a>

              <div className="footer__contact-item">
                <span
                  className="footer__contact-icon"
                  aria-hidden="true"
                >
                  <FiMapPin />
                </span>

                <span>
                  <small>
                    Operación
                  </small>

                  <strong>
                    República Dominicana
                  </strong>
                </span>
              </div>
            </div>
          </div>


          {/* ============================================================
              PHILOSOPHY
              ============================================================ */}

          <div className="footer__column footer__column--philosophy">
            <span className="footer__column-title">
              Nuestra forma de trabajar
            </span>

            <p className="footer__philosophy">
              Comprender antes de construir, actuar con integridad y
              entregar soluciones que respondan a la necesidad completa.
            </p>

            <div className="footer__principles">
              <span>
                Integridad
              </span>

              <i aria-hidden="true" />

              <span>
                Servicio
              </span>

              <i aria-hidden="true" />

              <span>
                Excelencia
              </span>
            </div>
          </div>
        </div>


        {/* ==============================================================
            DIVIDER
            ============================================================== */}

        <div className="footer__divider" />


        {/* ==============================================================
            BOTTOM
            ============================================================== */}

        <div className="footer__bottom">
          <p>
            © {currentYear} Softwave. Todos los derechos reservados.
          </p>

          <div className="footer__bottom-links">
            <a href="#inicio">
              Inicio
            </a>

            <span aria-hidden="true">
              •
            </span>

            <a href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;