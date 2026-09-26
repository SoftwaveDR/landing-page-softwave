import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

import Hero from "../components/sections/Hero/Hero";
import Services from "../components/sections/Services/Services";
import Solutions from "../components/sections/Solutions/Solutions";
import Methodology from "../components/sections/Methodology/Methodology";
import Contact from "../components/sections/Contact/Contact";
import AddOns from "../components/sections/AddOns/AddOns";
import Pricing from "../components/sections/Pricing/Pricing";
import WhatsAppFloat from "../components/common/WhatsAppFloat/WhatsAppFloat";


function HomePage() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />

        <Solutions />

        <AddOns />

        <Pricing />

        <Services />

        <Methodology />

        <Contact />
      </main>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}

export default HomePage;
