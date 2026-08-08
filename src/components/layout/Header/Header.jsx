import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX,} from "react-icons/fi";
import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { navigationItems } from "../../../data/navigation";
import softwaveLogo from "../../../assets/logos/Logo.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("#inicio");

  /* =========================================================================
     SCROLL STATE
     ========================================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 18,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);


  /* =========================================================================
     MOBILE BODY LOCK
     ========================================================================= */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow =
        "hidden";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isMenuOpen]);


  /* =========================================================================
     CLOSE MOBILE MENU ON RESIZE
     ========================================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth > 980 &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, [isMenuOpen]);


  /* =========================================================================
     ESC KEY
     ========================================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isMenuOpen]);


  /* =========================================================================
     ACTIVE SECTION
     ========================================================================= */

  useEffect(() => {
    const sectionIds =
      navigationItems
        .map((item) =>
          item.href?.startsWith("#")
            ? item.href.slice(1)
            : null,
        )
        .filter(Boolean);

    const sections =
      sectionIds
        .map((id) =>
          document.getElementById(id),
        )
        .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio,
              );

          if (
            visibleEntries.length > 0
          ) {
            setActiveSection(
              `#${visibleEntries[0].target.id}`,
            );
          }
        },
        {
          rootMargin:
            "-25% 0px -55% 0px",

          threshold: [
            0.1,
            0.25,
            0.5,
          ],
        },
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  /* =========================================================================
     HELPERS
     ========================================================================= */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(
      (current) => !current,
    );
  };

  const headerClasses = [
    "header",

    isScrolled
      ? "header--scrolled"
      : "",

    isMenuOpen
      ? "header--menu-open"
      : "",
  ]
    .filter(Boolean)
    .join(" ");


  /* =========================================================================
     RENDER
     ========================================================================= */

  return (
    <header
      className={headerClasses}
      id="site-header"
    >
      <Container
        size="wide"
        className="header__container"
      >
        {/* BRAND */}

        <a
          href="#inicio"
          className="header__brand"
          onClick={closeMenu}
          aria-label="Softwave - Ir al inicio"
        >
          <img
            src={softwaveLogo}
            alt="Softwave"
            className="header__logo"
          />
        </a>


        {/* NAVIGATION */}

        <nav
          id="primary-navigation"
          className={[
            "header__navigation",

            isMenuOpen
              ? "header__navigation--open"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-label="Navegación principal"
        >
          <div className="header__navigation-inner">
            <ul className="header__navigation-list">
              {navigationItems.map(
                (item) => {
                  const isActive =
                    activeSection ===
                    item.href;

                  return (
                    <li
                      key={item.id}
                      className="header__navigation-item"
                    >
                      <a
                        href={item.href}
                        className={[
                          "header__navigation-link",

                          isActive
                            ? "header__navigation-link--active"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={
                          closeMenu
                        }
                        aria-current={
                          isActive
                            ? "page"
                            : undefined
                        }
                      >
                        <span>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  );
                },
              )}
            </ul>


            {/* MOBILE CTA */}

            <div className="header__mobile-action">
              <span className="header__mobile-action-label">
                ¿Quieres conocer Get Code?
              </span>

              <Button
                href="#contacto"
                variant="primary"
                size="large"
                icon={
                  <FiArrowUpRight />
                }
                onClick={closeMenu}
              >
                Solicitar demo
              </Button>
            </div>
          </div>
        </nav>


        {/* DESKTOP CTA */}

        <div className="header__desktop-action">
          <Button
            href="#contacto"
            variant="primary"
            size="small"
            icon={
              <FiArrowUpRight />
            }
          >
            Solicitar demo
          </Button>
        </div>


        {/* MOBILE TOGGLE */}

        <button
          type="button"
          className={[
            "header__menu-button",

            isMenuOpen
              ? "header__menu-button--open"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={toggleMenu}
          aria-label={
            isMenuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={
            isMenuOpen
          }
          aria-controls="primary-navigation"
        >
          <span className="header__menu-button-icon">
            {isMenuOpen
              ? <FiX />
              : <FiMenu />
            }
          </span>
        </button>
      </Container>
    </header>
  );
}

export default Header;
