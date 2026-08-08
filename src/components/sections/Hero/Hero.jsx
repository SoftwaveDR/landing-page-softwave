import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiGrid,
  FiLayers,
  FiPlayCircle,
  FiShield,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import "./Hero.css";

const productPillars = [
  "12 módulos conectados",
  "Una sola fuente de información",
  "Control por roles y trazabilidad",
];

const sidebarItems = [
  { icon: FiGrid, label: "Inicio", active: true },
  { icon: FiShoppingCart, label: "Compras" },
  { icon: FiUsers, label: "Talento" },
  { icon: FiBarChart2, label: "Analítica" },
];

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true">
        <span className="hero__orb hero__orb--cyan" />
        <span className="hero__orb hero__orb--violet" />
        <span className="hero__grid" />
      </div>

      <Container className="hero__container">
        <div className="hero__content">
          <div className="hero__product-badge">
            <span>Producto core de Softwave</span>
            <strong>GET CODE</strong>
          </div>

          <h1 id="hero-title">
            Toda tu operación.
            <span>Un solo sistema.</span>
          </h1>

          <p className="hero__description">
            Get Code conecta procesos, personas y datos en una plataforma
            empresarial modular para operar con más control, velocidad y
            claridad.
          </p>

          <div className="hero__actions">
            <Button href="#contacto" size="large" icon={<PlayCircleIcon />}>
              Solicitar una demo
            </Button>
            <Button href="#modulos" variant="outline" size="large" icon={<FiArrowRight />}>
              Explorar módulos
            </Button>
          </div>

          <ul className="hero__pillars" aria-label="Ventajas principales">
            {productPillars.map((pillar) => (
              <li key={pillar}>
                <FiCheck aria-hidden="true" />
                {pillar}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__product" aria-label="Vista previa de Get Code">
          <div className="product-window">
            <div className="product-window__topbar">
              <div className="product-window__brand">
                <span>GC</span>
                <div>
                  <strong>Get Code</strong>
                  <small>Business OS</small>
                </div>
              </div>
              <div className="product-window__status">
                <i /> Operación conectada
              </div>
            </div>

            <div className="product-window__body">
              <aside className="product-window__sidebar">
                {sidebarItems.map(({ icon: Icon, label, active }) => (
                  <div className={active ? "is-active" : ""} key={label}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </aside>

              <div className="product-window__main">
                <div className="product-window__heading">
                  <div>
                    <small>Buenos días</small>
                    <strong>Centro de operaciones</strong>
                  </div>
                  <span><FiClock /> En tiempo real</span>
                </div>

                <div className="product-window__metrics">
                  <article>
                    <span>Procesos activos</span>
                    <strong>Conectados</strong>
                    <small><FiCheckCircle /> Estado saludable</small>
                  </article>
                  <article>
                    <span>Información</span>
                    <strong>Centralizada</strong>
                    <small><FiLayers /> Una fuente de verdad</small>
                  </article>
                </div>

                <div className="product-window__activity">
                  <div className="product-window__activity-head">
                    <div>
                      <small>Actividad operativa</small>
                      <strong>Procesos por módulo</strong>
                    </div>
                    <span>Hoy</span>
                  </div>
                  <div className="product-window__bars" aria-hidden="true">
                    {[42, 68, 51, 84, 72, 92, 78].map((height, index) => (
                      <i key={height + index} style={{ "--bar-height": `${height}%` }} />
                    ))}
                  </div>
                  <div className="product-window__legend">
                    <span><i className="is-cyan" /> Operaciones</span>
                    <span><i className="is-violet" /> Gestión</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--top">
            <FiShield />
            <span><small>Gobernanza</small><strong>Control por roles</strong></span>
          </div>
          <div className="hero__float-card hero__float-card--bottom">
            <FiCheckCircle />
            <span><small>Trazabilidad</small><strong>Cada acción registrada</strong></span>
          </div>
        </div>
      </Container>

      <Container className="hero__module-strip">
        <span>Una plataforma para</span>
        <strong>Operaciones</strong><i />
        <strong>Compras</strong><i />
        <strong>RRHH</strong><i />
        <strong>Administración</strong><i />
        <strong>Analítica</strong>
      </Container>
    </section>
  );
}

function PlayCircleIcon() {
  return <FiPlayCircle />;
}

export default Hero;
