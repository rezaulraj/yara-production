import React from "react";
import HeroTrouser from "./HeroTrouser";
import TrouserManufacture from "./TrouserManufature";
import TrouserQulity from "./TrouserQulity";
import UniquePartnerTro from "./UniquePartnerTro";
import Watch from "../../../components/Watch";

const TrousersPage = () => {
  return (
    <div className="min-h-screen">
      <HeroTrouser />
      <TrouserManufacture />
      <TrouserQulity />
      <UniquePartnerTro />
      <Watch />
    </div>
  );
};

export default TrousersPage;
