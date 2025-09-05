import React from "react";
import trouserImage from "../../../assets/image/menufuture/Production/trousers/trouser5.jpg?url";
import {
  FiAward,
  FiPackage,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiCheckCircle,
  FiTarget,
} from "react-icons/fi";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Trousers Production | Yara Productions UK</title>
        <meta
          name="description"
          content="Yara Productions UK delivers high-quality private label knit trousers with innovative designs, comfort, and style for global brands."
        />
        <meta
          name="keywords"
          content="Knit trousers production, private label trousers, Yara Productions UK, fashion trousers, custom trousers"
        />
        <meta name="author" content="Yara Productions" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Premium Knit Trousers Production | Yara Productions UK"
        />
        <meta
          property="og:description"
          content="High-quality private label knit trousers by Yara Productions UK combining style, comfort, and design innovation."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/trouser5-BWx-t0FD.jpg"
        />
        <meta
          property="og:url"
          content="https://yaraproductions.uk/trousers-production"
        />
        <meta property="og:site_name" content="Yara Productions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium Knit Trousers Production | Yara Productions UK"
        />
        <meta
          name="twitter:description"
          content="High-quality private label knit trousers by Yara Productions UK with style, comfort, and innovation."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/trouser5-BWx-t0FD.jpg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Premium Knit Trousers",
              "image": "${trouserImage}",
              "description": "Yara Productions UK provides high-quality private label knit trousers, combining style, comfort, and innovative design for local and international brands.",
              "brand": {
                "@type": "Brand",
                "name": "Yara Productions"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://yaraproductions.uk/trousers-production",
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
