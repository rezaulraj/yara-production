import React from "react";
import HeroSweatshirt from "./HeroSweatshirt";
import SweatshirtManufacture from "./SweatshitManufature";
import SweatshirtQuality from "./SweatshirtQuality";
import UniquePartnerSw from "./UniquePartnerSw";
import Watch from "../../../components/Watch";

const SweatshirtPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSweatshirt />
      <SweatshirtManufacture />
      <SweatshirtQuality />
      <UniquePartnerSw />
      <Watch />
    </div>
  );
};

export default SweatshirtPage;
