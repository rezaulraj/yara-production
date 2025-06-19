import React from "react";
import coatImage from "../../../assets/image/coat/jacket.jpg?url";
import {
  FiPackage,
  FiTrendingUp,
  FiLayers,
  FiClock,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";
import { FaBlackTie } from "react-icons/fa";

const CoatManufacture = () => {
  const productionDetails = [
    {
      icon: <FiPackage className="text-3xl text-amber-600" />,
      title: "MOQ",
      value: "600 pieces",
    },
    {
      icon: <FiLayers className="text-3xl text-amber-600" />,
      title: "Max colors per order",
      value: "3 colors",
    },
    {
      icon: <FiClock className="text-3xl text-amber-600" />,
      title: "Sampling",
      value: "45 days (90 days for custom yarn)",
    },
    {
      icon: <FiTruck className="text-3xl text-amber-600" />,
      title: "Manufacturing & Delivery",
      value: "100 days (120 days for custom yarn)",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Private Label
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 uppercase leading-tight">
            Private Label Coat Manufacturing
          </h2>

          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <FaBlackTie className="text-3xl text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-2">
                Expert Coat Production
              </h3>
              <p className="text-gray-600">
                Yara Production brings designer men's coats to life with
                superior production standards, expertise, and technology. Our
                team crafts high-quality, custom-made coats that meet the
                demands of local and international brands.
              </p>
            </div>
          </div>

          <div className="pt-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <FiCheckCircle className="text-amber-600 mr-3" />
              Quality-Focused Approach
            </h3>
            <p className="text-gray-600">
              We prioritize quality over quantity, delivering unique design
              collections with an annual production capacity of 100,000 units.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-serif font-normal text-gray-800 mb-6 flex items-center">
              <FiTrendingUp className="text-amber-600 mr-3" />
              Key Production Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {productionDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={coatImage}
            alt="Premium coat manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Designer Men's Coats</h3>
              <p className="text-white/90">
                Superior craftsmanship, premium quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoatManufacture;
