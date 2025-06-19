import React from "react";
import HeroTracksuit from "./HeroTracksuit";
import TracksuitManufacture from "./TracksuitManufature";
import TracksuitQuility from "./TracksuitQuility";
import UniquePartnerTr from "./UniquePartnerTr";
import Watch from "../../../components/Watch";

const TracksuitPage = () => {
  return (
    <div className="min-h-screen">
      <HeroTracksuit />
      <TracksuitManufacture />
      <TracksuitQuility />
      <UniquePartnerTr />
      <Watch />
    </div>
  );
};

export default TracksuitPage;
