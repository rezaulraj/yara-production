import React from "react";
import HeroFactory from "./HeroFactory";
import AboutFactory from "./AboutFactory";
import WhyChoseUs from "./WhyChoseUs";
import Watch from "../../components/Watch";

const FactoryPage = () => {
  return (
    <div className="min-h-screen">
      <HeroFactory />
      <AboutFactory />
      <WhyChoseUs />
      <Watch />
    </div>
  );
};

export default FactoryPage;
