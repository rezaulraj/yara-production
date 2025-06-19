import React from "react";
import trouserImage from "../../../assets/image/trousers/trousers.jpg?url";
import {
  FiAward,
  FiPackage,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiCheckCircle,
  FiTarget,
} from "react-icons/fi";

const TrouserManufacture = () => {
  const highlights = [
    {
      icon: <FiPackage className="text-3xl text-amber-600" />,
      title: "Annual production capacity",
      value: "250,000 knitted trousers",
    },
    {
      icon: <FiStar className="text-3xl text-amber-600" />,
      title: "Unique design collections",
      value: "Tailored to fashion trends",
    },
    {
      icon: <FiCheckCircle className="text-3xl text-amber-600" />,
      title: "Quality focus",
      value: "Prioritizing high quality over quantity",
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
            Innovative Knit Trousers
          </h2>

          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <FiAward className="text-3xl text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-2">
                Style Meets Comfort
              </h3>
              <p className="text-gray-600">
                YARA PRODUCTION crafts high-quality, specially designed trousers
                that blend style and comfort. Our collections feature sports and
                classic models, reflecting the latest fashion trends. With a
                focus on innovation and design excellence, our knit trousers are
                sought after by consumers and esteemed brand partners alike.
              </p>
            </div>
          </div>

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

          <div className="pt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <FiTarget className="text-amber-600 mr-3" />
              Partner with Yara Production
            </h3>
            <p className="text-gray-600">
              Experience the perfect blend of style, comfort, and quality in
              knit trouser production. Let's create exceptional collections that
              elevate your brand's presence in the market.
            </p>
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={trouserImage}
            alt="Premium knit trousers production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Premium Knit Trousers</h3>
              <p className="text-white/90">Where style meets comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrouserManufacture;
