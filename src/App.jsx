import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FleetPage from "./pages/FleetPage";
import ProjectsPage from "./pages/ProjectsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
