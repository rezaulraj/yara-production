import React from "react";

import HeroSustainability from "./HeroSustainability";
import SustainFeature from "./SustainFeture";
import Watch from "../../components/Watch";
const SustainabilityPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSustainability />
      <SustainFeature />
      <Watch />
    </div>
  );
};

export default SustainabilityPage;
