import Header from "../components/layout/Header/Header";
import Hero from "../components/sections/Hero/Hero";

function HomePage() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />

        <section className="section" id="servicios">
          <div className="container">
            <h2>Servicios Softwave</h2>
          </div>
        </section>

        <section className="section section--soft" id="soluciones">
          <div className="container">
            <h2>Soluciones empresariales</h2>
          </div>
        </section>

        <section className="section" id="metodologia">
          <div className="container">
            <h2>Cómo trabajamos</h2>
          </div>
        </section>

        <section className="section section--soft" id="nosotros">
          <div className="container">
            <h2>Sobre Softwave</h2>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container">
            <h2>Contacto</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;