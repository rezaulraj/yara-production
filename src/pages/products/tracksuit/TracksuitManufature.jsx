import React from "react";
import tracksuitImage from "../../../assets/image/menufuture/Production/tracksuit/ts3.jpg?url";
import {
  FiAward,
  FiPackage,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiClock,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

const TracksuitManufacture = () => {
  const highlights = [
    {
      icon: <FiPackage className="text-3xl text-amber-600" />,
      title: "Minimum Order Quantity (MOQ)",
      value: "500 pieces",
    },
    {
      icon: <FiLayers className="text-3xl text-amber-600" />,
      title: "Maximum colors per order",
      value: "3 colors",
    },
    {
      icon: <FiClock className="text-3xl text-amber-600" />,
      title: "Custom Order Sampling",
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
        {/* Text Content */}
        <div className="space-y-8">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Private Label
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 uppercase leading-tight">
            Knit Tracksuit Production
          </h2>

          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <FiAward className="text-3xl text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-2">
                Innovative Designs, Unparalleled Comfort
              </h3>
              <p className="text-gray-600">
                Yara Production is a trusted partner for worldwide brands,
                delivering high-quality knitted tracksuits with cutting-edge
                designs, exceptional comfort, and specialty fabrics.
                Prioritizing quality over quantity, we produce unique
                collections with an annual capacity of 150,000 units.
              </p>
            </div>
          </div>

          {/* Key Details */}
          <div className="pt-4">
            <h3 className="text-2xl font-serif font-normal text-gray-800 mb-6 flex items-center">
              <FiTrendingUp className="text-amber-600 mr-3" />
              Key Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
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

          {/* Partner Section */}
          <div className="pt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <FiShield className="text-amber-600 mr-3" />
              Partner with Us
            </h3>
            <p className="text-gray-600">
              Experience the YARA Production difference in knit tracksuit
              manufacturing. Let's create exceptional collections that elevate
              your brand's presence in the market.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={tracksuitImage}
            alt="Premium tracksuit production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Premium Tracksuits</h3>
              <p className="text-white/90">
                Innovative designs, exceptional comfort
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksuitManufacture;
