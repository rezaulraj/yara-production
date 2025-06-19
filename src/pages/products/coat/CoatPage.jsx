import React from "react";
import HeroCoat from "./HeroCoat";
import CoatManufacture from "./CoatManufacture";
import CoatQualtity from "./CoatQualtity";
import UniquePartnerCoat from "./UniquePartnerCoat";
import Watch from "../../../components/Watch";
const CoatPage = () => {
  return (
    <div className="min-h-screen">
      <HeroCoat />
      <CoatManufacture />
      <CoatQualtity />
      <UniquePartnerCoat />
      <Watch />
    </div>
  );
};

export default CoatPage;
