import React from "react";
import HeroJacket from "./HeroJacket";
import JacketManufacture from "./JacketManufacture";
import JacketQuility from "./JacketQuility";
import UniquePartnerJacket from "./UniquePartnerJacket";
import Watch from "../../../components/Watch";

const JacketPage = () => {
  return (
    <div className="min-h-screen">
      <HeroJacket />
      <JacketManufacture />
      <JacketQuility />
      <UniquePartnerJacket />
      <Watch />
    </div>
  );
};

export default JacketPage;
