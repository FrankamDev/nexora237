import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Risks from "../components/Risks";
import Services from "../pages/Services";
import ImageInterventions from "../components/ImageInterventions";
import WhyNexora from "../components/WhyNexora";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <ScrollProgress />

      <main>
        <Hero />

        <Stats />

        <Services />

        <ImageInterventions />

        <Risks />

        <WhyNexora />

        <Process />

        <Testimonials />

        <FAQ />

        <FinalCTA />
      </main>

      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}

export default Home;