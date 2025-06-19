import React from "react";
import HeroQulity from "./HeroQulity";
import QualityControl from "./QualityControl";
import OurStrength from "./OurStrength";
import Watch from "../../components/Watch";

const QualityPage = () => {
  return (
    <div className="min-h-screen">
      <HeroQulity />
      <QualityControl />
      <OurStrength />
      <Watch />
    </div>
  );
};

export default QualityPage;
