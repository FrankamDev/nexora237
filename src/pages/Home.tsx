
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ImageInterventions from "../components/ImageInterventions";
import Process from "../components/Process";

import ScrollProgress from "../components/ScrollProgress";
import Services from "../components/Services";
import Stats from "../components/Stats";

import WhyNexora from "../components/WhyNexora";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Risks from "../components/Risks";


function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
        {/* <Hero /> */}
      <main>
        <BrowserRouter>
        <ScrollProgress/>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/interventions" element={<ImageInterventions />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/pourquoi" element={<WhyNexora />} />
          <Route path="/process" element={<Process />} />
          <Route path="/temoignages" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/processus" element={<Process />} />
        </Routes>

        
        <Stats />
        <Risks />
        
        {/* <WhyNexora /> */}
        {/* <Process /> */}
        
      <FAQ />
        <FinalCTA />
        <FloatingWhatsApp/>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default Home; 