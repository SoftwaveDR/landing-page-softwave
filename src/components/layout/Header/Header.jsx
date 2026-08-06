import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { navigationItems } from "../../../data/navigation";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClasses = [
    "header",
    isScrolled ? "header--scrolled" : "",
    isMenuOpen ? "header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <Container className="header__container">
        <a
          href="#inicio"
          className="header__brand"
          onClick={closeMenu}
          aria-label="Softwave - Ir al inicio"
        >
          <span className="header__brand-symbol" aria-hidden="true">
            S
          </span>

          <span className="header__brand-content">
            <strong>Softwave</strong>
            <small>Business Technology</small>
          </span>
        </a>

        <nav
          className={`header__navigation ${
            isMenuOpen ? "header__navigation--open" : ""
          }`}
          aria-label="Navegación principal"
        >
          <ul className="header__navigation-list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="header__navigation-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__mobile-action">
            <Button
              href="#contacto"
              variant="primary"
              size="large"
              icon={<FiArrowUpRight />}
              onClick={closeMenu}
            >
              Solicitar asesoría
            </Button>
          </div>
        </nav>

        <div className="header__desktop-action">
          <Button
            href="#contacto"
            variant="primary"
            size="small"
            icon={<FiArrowUpRight />}
          >
            Solicitar asesoría
          </Button>
        </div>

        <button
          type="button"
          className="header__menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>
    </header>
  );
}

export default Header;