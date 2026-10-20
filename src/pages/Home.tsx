import { BrowserRouter, Route, Router } from "react-router-dom";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageInterventions from "../components/ImageInterventions";
import Process from "../components/Process";
import Risks from "../components/Risks";
import ScrollProgress from "../components/ScrollProgress";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhyNexora from "../components/WhyNexora";


function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BrowserRouter>
        <Router>
            <Route path="/services" element={<Services/>}/>
        <ScrollProgress/>
        <Hero />
        <ImageInterventions />
        <Stats />
        <Risks />
        <Services />
        <WhyNexora />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <FloatingWhatsApp/>
        </Router>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default Home; 