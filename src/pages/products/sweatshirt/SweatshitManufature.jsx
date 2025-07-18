import React from "react";
import sweatshirt from "../../../assets/image/menufuture/Production/sweatshirt-sweater.jpg";
import {
  FiAward,
  FiPackage,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

const SweatshirtManufacture = () => {
  const highlights = [
    {
      icon: <FiPackage className="text-3xl text-amber-600" />,
      title: "Annual production capacity",
      value: "100,000 knitted sweatshirts",
    },
    {
      icon: <FiStar className="text-3xl text-amber-600" />,
      title: "Unique design collections",
      value: "Tailored to your brand's vision",
    },
    {
      icon: <FiCheckCircle className="text-3xl text-amber-600" />,
      title: "Quality focus",
      value: "Prioritizing excellence over quantity",
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
            Premium Sweatshirt Production for World Brands
          </h2>

          <div className="text-gray-600 text-md leading-relaxed font-lato space-y-4">
            <p>
              Yara Production crafts high-quality sweatshirts that embody the
              essence of your brand. Leveraging in-house fabric production, we
              deliver unmatched speed, quality, and flexibility in production
              and delivery.
            </p>
            <p>
              Our design team combines your brand's vision with global fashion
              trends to create unique collections that showcase your brand's
              originality and excellence.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="pt-4">
            <h3 className="text-2xl font-serif font-normal text-gray-800 mb-6 flex items-center">
              <FiTrendingUp className="text-amber-600 mr-3" />
              Key Highlights
            </h3>

            <div className="grid grid-cols-1 gap-6">
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
              <FiTarget className="text-amber-600 mr-3" />
              Partner with Yara Production
            </h3>
            <p className="text-gray-600">
              Experience the perfect blend of quality, speed, and flexibility in
              sweatshirt production. Let's create exceptional collections that
              elevate your brand's presence in the market.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={sweatshirt}
            alt="Premium sweatshirt production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Premium Sweatshirts</h3>
              <p className="text-white/90">Crafted with excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SweatshirtManufacture;
