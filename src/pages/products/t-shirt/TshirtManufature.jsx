import React from "react";
import tshirtmanu from "../../../assets/image/menufuture/Production/tshirt.jpg?url";
import {
  FiAward,
  FiPackage,
  FiLayers,
  FiClock,
  FiTruck,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import { Helmet } from "react-helmet";

const TshirtManufacture = () => {
  const highlights = [
    {
      icon: <FiPackage className="text-3xl text-amber-600" />,
      title: "Annual production capacity",
      value: "750,000 knitted T-shirts",
    },
    {
      icon: <FiLayers className="text-3xl text-amber-600" />,
      title: "Minimum Order Quantity (MOQ)",
      value: "750 pieces",
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
        <title>T-Shirt Production</title>
        <meta
          name="description"
          content="Yara Productions UK delivers premium private label T-shirt production, from yarn to finished knitwear, ensuring exceptional quality and speed for global brands."
        />
        <meta
          name="keywords"
          content="T-shirt production, knitwear manufacturer, private label T-shirts, Yara Productions, UK garments, custom T-shirts"
        />
        <meta name="author" content="Yara Productions" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="T-Shirt Production"
        />
        <meta
          property="og:description"
          content="High-quality private label T-shirt production by Yara Productions UK, delivering exceptional knitwear with speed, quality, and flexibility."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/ts3-5VFSujSV.jpg"
        />
        <meta
          property="og:url"
          content="https://yaraproductions.uk/t-shirt-production"
        />
        <meta property="og:site_name" content="Yara Productions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium T-Shirt Production | Yara Productions UK"
        />
        <meta
          name="twitter:description"
          content="High-quality private label T-shirt production by Yara Productions UK, from yarn to finished knitwear."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/ts3-5VFSujSV.jpg"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Premium Knit T-Shirts",
              "image": "${tshirtmanu}",
              "description": "Yara Productions UK provides premium private label T-shirt production, delivering high-quality knitwear from yarn to finished products for local and international brands.",
              "brand": {
                "@type": "Brand",
                "name": "Yara Productions"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://yaraproductions.uk/t-shirt-production",
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
            T-Shirt Production (Knitwear)
          </h2>

          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <FiAward className="text-3xl text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-2">
                Unparalleled Quality and Precision
              </h3>
              <p className="text-gray-600">
                We produce our own fabrics from yarn to ensure exceptional
                quality in our private label T-shirts. Leveraging advanced
                printing and embroidery technologies, we deliver high-end
                products with unmatched speed and flexibility.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-serif font-normal text-gray-800 mb-6 flex items-center">
              <FiTrendingUp className="text-amber-600 mr-3" />
              Key Highlights
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

          <div className="pt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 flex items-center">
              <FiShield className="text-amber-600 mr-3" />
              Experience the Yara Production Difference
            </h3>
            <p className="text-gray-600">
              High-quality, unique design collections for local and
              international brands. Prioritizing quality over quantity, we
              partner with brands to deliver exceptional knitwear products.
            </p>
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={tshirtmanu}
            alt="T-Shirt production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-xl font-serif mb-2">Premium Knitwear</h3>
              <p className="text-white/90">From yarn to finished product</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TshirtManufacture;
