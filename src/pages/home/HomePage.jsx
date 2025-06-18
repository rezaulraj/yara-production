import React from "react";
import HeroHome from "./HeroHome";
import AboutUsHome from "./AboutUsHome";
import GarmantsHome from "./GarmantsHome";
import WhyChose from "./WhyChose";
import Watch from "./Watch";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <AboutUsHome />
      <GarmantsHome />
      <WhyChose />
      <Watch />
    </div>
  );
};

export default HomePage;
