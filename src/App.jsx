// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import AboutPage from "./pages/about/AboutPage";
import FactoryPage from "./pages/factory/FactoryPage";
import FabricPage from "./pages/fabric/FabricPage";
import QualityPage from "./pages/quality/QualityPage";
import SustainabilityPage from "./pages/sustainability/SustainabilityPage";
import ContactPage from "./pages/contact/ContactPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-yara" element={<AboutPage />} />
          <Route path="/factory" element={<FactoryPage />} />
          <Route path="/fabric-production" element={<FabricPage />} />
          <Route path="/our-qualitys" element={<QualityPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
