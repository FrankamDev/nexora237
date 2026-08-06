import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Risks from "./components/Risks";
import Services from "./components/Services";
import WhyNexora from "./components/WhyNexora";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ScrollProgress/>
        <Hero />
        <Stats />
        <Risks />
        <Services />
        <WhyNexora />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <FloatingWhatsApp/>
      </main>
      <Footer />
    </div>
  );
}

export default App;