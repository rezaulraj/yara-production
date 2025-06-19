import React from "react";
import HeroTShirt from "./HeroTShirt";
import TshirtManufacture from "./TshirtManufature";
import TshirtQuality from "./TshirtQuality";
import UniquePartner from "./UniquePartner";
import Watch from "../../../components/Watch";

const TShirtPage = () => {
  return (
    <div className="min-h-screen">
      <HeroTShirt />
      <TshirtManufacture />
      <TshirtQuality />
      <UniquePartner />
      <Watch />
    </div>
  );
};

export default TShirtPage;
