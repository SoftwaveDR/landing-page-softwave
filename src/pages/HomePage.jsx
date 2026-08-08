import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

import Hero from "../components/sections/Hero/Hero";
import Services from "../components/sections/Services/Services";
import Solutions from "../components/sections/Solutions/Solutions";
import Methodology from "../components/sections/Methodology/Methodology";
import Contact from "../components/sections/Contact/Contact";


function HomePage() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />

        <Solutions />

        <Services />

        <Methodology />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
