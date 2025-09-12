import React from "react";
import collarImage from "../../../assets/image/menufuture/Production/collar-shirt.jpg?url";
import {
  FiAward,
  FiPackage,
  FiTrendingUp,
  FiLayers,
  FiClock,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { Helmet } from "react-helmet";

const CollarShirtManufacture = () => {
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
        <title>Collar Shirt Production</title>
        <meta
          name="description"
          content="Yara Productions specializes in private label knit collar shirt production for men's fashion. High-quality, custom-made shirts for local and international brands."
        />
        <meta
          name="keywords"
          content="knit collar shirt production, private label shirts, Yara Productions, custom men's shirts, UK garment manufacturer"
        />
        <meta name="author" content="Yara Productions" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Collar Shirt Production"
        />
        <meta
          property="og:description"
          content="High-quality, private label knit collar shirts for local and international brands. Yara Productions UK."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/collarshirt-D5Le7gzl.jpg"
        />
        <meta
          property="og:url"
          content="https://yaraproductions.uk/collar-shirts-production"
        />
        <meta property="og:site_name" content="Yara Productions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Private Label Knit Collar Shirt Production | Yara Productions UK"
        />
        <meta
          name="twitter:description"
          content="High-quality, private label knit collar shirts for local and international brands. Yara Productions UK."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/collarshirt-D5Le7gzl.jpg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Private Label Knit Collar Shirt",
              "image": "${collarImage}",
              "description": "Yara Productions specializes in private label knit collar shirt production for men's fashion. High-quality, custom-made shirts for local and international brands.",
              "brand": {
                "@type": "Brand",
                "name": "Yara Productions"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://yaraproductions.uk/collar-shirts-production",
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
            Knit Collar Shirt Production
          </h2>

          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <FiAward className="text-3xl text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-2">
                Exceptional Service, Perfect Shirts
              </h3>
              <p className="text-gray-600">
                At Yara Production, we're committed to delivering high-quality,
                private label knit shirts that meet the demands of world-class
                brands. Our "Perfect Shirt" production policy ensures that every
                garment meets or exceeds expectations.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <PiShirtFoldedFill className="text-amber-600 mr-3" />
              Private Label Knit Shirts
            </h3>
            <p className="text-gray-600">
              We specialize in producing custom knit shirts with in-house fabric
              production. Our collections are designed to be comfortable,
              stylish, and adaptable to all fashion trends.
            </p>
          </div>

          <div className="pt-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <FiCheckCircle className="text-amber-600 mr-3" />
              Quality Focus
            </h3>
            <p className="text-gray-600 mb-4">
              At Yara Production, we prioritize quality over quantity. Our
              annual production capacity is 100,000 knitted shirts, and we focus
              on creating unique design collections for local and international
              brands.
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
            src={collarImage}
            alt="Premium knit collar shirt production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Premium Knit Shirts</h3>
              <p className="text-white/90">Exceptional quality, perfect fit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollarShirtManufacture;
