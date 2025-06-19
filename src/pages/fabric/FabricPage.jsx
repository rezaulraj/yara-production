import React from "react";
import HeroFabric from "./HeroFabric";
import FabricProduct from "./FabricProduct";
import Strength from "./Strength";
import Watch from "../../components/Watch";
const FabricPage = () => {
  return (
    <div className="min-h-screen">
      <HeroFabric />
      <FabricProduct />
      <Strength />
      <Watch />
    </div>
  );
};

export default FabricPage;
