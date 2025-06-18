import React from "react";
import HeroAbout from "./HeroAbout";
import Expreience from "./Expreience";
import Partner from "./Partner";
import Watch from "../../components/Watch";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <Expreience />
      <Partner />
      <Watch />
    </div>
  );
};

export default AboutPage;
