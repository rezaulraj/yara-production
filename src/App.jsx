import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import AboutPage from "./pages/about/AboutPage";
import FactoryPage from "./pages/factory/FactoryPage";
import FabricPage from "./pages/fabric/FabricPage";
import QualityPage from "./pages/quality/QualityPage";
import SustainabilityPage from "./pages/sustainability/SustainabilityPage";
import ContactPage from "./pages/contact/ContactPage";
import TShirtPage from "./pages/products/t-shirt/TShirtPage";
import SweatshirtPage from "./pages/products/sweatshirt/SweatshirtPage";
import TracksuitPage from "./pages/products/tracksuit/TracksuitPage";
import TrousersPage from "./pages/products/trousers/TrousersPage";
import ColorShirtPage from "./pages/products/collar-shirts/ColorShirtPage";
import JacketPage from "./pages/products/jacket/JacketPage";
import CoatPage from "./pages/products/coat/CoatPage";
import logo from "/logo1.png";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <img
        src={logo}
        alt="Loading..."
        style={{
          width: "100px",
          height: "100px",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-yara" element={<AboutPage />} />
          <Route path="/factory" element={<FactoryPage />} />
          <Route path="/fabric-production" element={<FabricPage />} />
          <Route path="/our-qualitys" element={<QualityPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/t-shirt-production" element={<TShirtPage />} />
          <Route path="/sweatshirt-production" element={<SweatshirtPage />} />
          <Route path="/tracksuit-production" element={<TracksuitPage />} />
          <Route path="/trousers-production" element={<TrousersPage />} />
          <Route
            path="/collar-shirts-production"
            element={<ColorShirtPage />}
          />
          <Route path="/jacket-production" element={<JacketPage />} />
          <Route path="/coat-production" element={<CoatPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
