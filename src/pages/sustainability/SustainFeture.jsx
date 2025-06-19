import React from "react";
import susteinable from "../../assets/image/sustainable/sustain.jpg?url";
import {
  FiCpu,
  FiRepeat,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiDroplet,
  FiSun,
} from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const SustainFeature = () => {
  const sustainabilityFeatures = [
    {
      icon: <FiCpu className="text-3xl text-green-600" />,
      title: "Efficient Technology Systems",
      description:
        "Implementing advanced systems to support sustainable production",
    },
    {
      icon: <FiRepeat className="text-3xl text-green-600" />,
      title: "Recycled Materials",
      description: "Utilizing recycled materials whenever possible",
    },
    {
      icon: <FiUsers className="text-3xl text-green-600" />,
      title: "Ethical Partnerships",
      description: "Collaborating with certified sustainable suppliers",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-green-600" />,
      title: "Continuous Improvement",
      description: "Investing in responsible production methods",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <FaLeaf className="text-green-500 text-2xl" />
            <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
              Responsible Manufacturing
            </h4>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 leading-tight">
            For a Brighter Future
          </h2>

          <h3 className="text-2xl font-serif font-normal text-gray-700 mt-6 flex items-center">
            <FiAward className="text-green-500 mr-3" />
            Our Sustainability Commitment
          </h3>

          <p className="text-gray-600 text-md leading-relaxed font-lato">
            At YARA Production we're dedicated to responsible business
            practices, leveraging sustainable production techniques and
            materials to minimize our environmental footprint.
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
              <FiSun className="text-green-500 mr-2" />
              Key aspects of our approach:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sustainabilityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg"
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h5 className="font-medium text-gray-800">
                      {feature.title}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-100 rounded-lg border border-green-200 flex items-start space-x-4">
            <FiDroplet className="text-3xl text-green-600 mt-1" />
            <p className="text-gray-700">
              By upholding our sustainability principles, we ensure a greener
              future for our business and the environment.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={susteinable}
            alt="Sustainable manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent flex items-start p-6">
            <span className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">
              <FaLeaf className="mr-2" />
              Sustainable Practices
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainFeature;
