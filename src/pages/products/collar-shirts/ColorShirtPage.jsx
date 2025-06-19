import React from "react";
import HeroColorShirt from "./HeroColorShirt";
import CollarShirtManufacture from "./ColorShirtManufacture";
import ColorShirtQuility from "./ColorShirtQuility";
import UniqurePartnerColors from "./UniqurePartnerColors";
import Watch from "../../../components/Watch";

const ColorShirtPage = () => {
  return (
    <div className="min-h-screen">
      <HeroColorShirt />
      <CollarShirtManufacture />
      <ColorShirtQuility />
      <UniqurePartnerColors />
      <Watch />
    </div>
  );
};

export default ColorShirtPage;
