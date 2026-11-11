import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ImageInterventions from "./components/ImageInterventions";
import Stats from "./components/Stats";
import WhyNexora from "./components/WhyNexora";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
  <>
  <Header/>
    <BrowserRouter>
      <Routes>
        {/* Accueil */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/interventions" element={<ImageInterventions />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/pourquoi" element={<WhyNexora />} />
        <Route path="/process" element={<Process />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
  );
}

export default App;