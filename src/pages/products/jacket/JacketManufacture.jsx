import React from "react";
import jacketImage from "../../../assets/image/menufuture/Production/jacket.jpg?url";
import {
  FiAward,
  FiPackage,
  FiTrendingUp,
  FiLayers,
  FiClock,
  FiTruck,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";
import { Helmet } from "react-helmet";

const JacketManufacture = () => {
  const productionDetails = [
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
      <Helmet>
        <title>Jacket Production</title>
        <meta
          name="description"
          content="Yara Productions UK offers premium private label men's knitted jacket production. High-quality fabrics and trendsetting designs for global fashion brands."
        />
        <meta
          name="keywords"
          content="men's knitted jackets, jacket manufacturing, private label jackets, Yara Productions, UK garment manufacturer, custom jackets"
        />
        <meta name="author" content="Yara Productions" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Jacket Production"
        />
        <meta
          property="og:description"
          content="Premium private label men's knitted jackets with superior fabrics and trendsetting designs from Yara Productions UK."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/jacket-Dk21JZ1Q.jpg"
        />
        <meta
          property="og:url"
          content="https://yaraproductions.uk/jacket-production"
        />
        <meta property="og:site_name" content="Yara Productions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Men's Knitted Jacket Production | Yara Productions UK"
        />
        <meta
          name="twitter:description"
          content="Premium private label men's knitted jackets with superior fabrics and trendsetting designs from Yara Productions UK."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/jacket-Dk21JZ1Q.jpg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Men's Knitted Jackets",
              "image": "${jacketImage}",
              "description": "Yara Productions UK offers premium private label men's knitted jacket production. High-quality fabrics and trendsetting designs for global fashion brands.",
              "brand": {
                "@type": "Brand",
                "name": "Yara Productions"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://yaraproductions.uk/jacket-production",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Private Label
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 uppercase leading-tight">
            Men's Knitted Jackets Expertise
          </h2>

          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <FiZap className="text-3xl text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-600">
                Yara Production offers comprehensive design, development, and
                manufacturing services for men's knitted jackets. Our
                high-quality fabrics and innovative design team enable us to
                craft jackets that shape fashion trends for global brands.
              </p>
            </div>
          </div>

          <div className="pt-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <FiCheckCircle className="text-amber-600 mr-3" />
              Quality-Focused Production
            </h3>
            <p className="text-gray-600">
              We prioritize quality over quantity, ensuring every jacket meets
              exceptional standards. With an annual production capacity of
              100,000 units, we deliver unique design collections for local and
              international brands.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-serif font-normal text-gray-800 mb-6 flex items-center">
              <FiTrendingUp className="text-amber-600 mr-3" />
              Production Details
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
            src={jacketImage}
            alt="Premium men's knitted jackets production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Premium Knit Jackets</h3>
              <p className="text-white/90">
                Trendsetting designs, exceptional quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JacketManufacture;
