import React from "react";
import garmant1 from "../../assets/image/menufuture/Homepage/tshirt.jpg?url";
import garmant2 from "../../assets/image/menufuture/Homepage/sweatshirtsweater.jpg?url";
import garmant3 from "../../assets/image/menufuture/Homepage/tracksuit.jpg?url";
import garmant4 from "../../assets/image/menufuture/Homepage/trouser.jpg?url";
import garmant5 from "../../assets/image/menufuture/Homepage/collarshirt.jpg?url";
import garmant6 from "../../assets/image/menufuture/Homepage/jacket.jpg?url";
import garmant7 from "../../assets/image/menufuture/Homepage/coat.jpg?url";
import { FaArrowRight } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const GarmantsHome = () => {
  const garmantProducts = [
    {
      title: "T-Shirt",
      image: garmant1,
      btn: "Details",
      path: "/t-shirt-production",
    },
    {
      title: "Sweatshirt",
      image: garmant2,
      btn: "Details",
      path: "/sweatshirt-production",
    },
    {
      title: "Tracksuit",
      image: garmant3,
      btn: "Details",
      path: "/tracksuit-production",
    },
    {
      title: "Trousers",
      image: garmant4,
      btn: "Details",
      path: "/trousers-production",
    },
    {
      title: "Collar Shirts",
      image: garmant5,
      btn: "Details",
      path: "/collar-shirts-production",
    },
    {
      title: "Jacket",
      image: garmant6,
      btn: "Details",
      path: "/jacket-production",
    },
    {
      title: "Coat",
      image: garmant7,
      btn: "Details",
      path: "/coat-production",
    },
  ];

  return (
    <section className="bg-amber-50" id="discover-out-collection">
      <Helmet>
       
        <meta
          name="description"
          content="Discover the premium garments manufactured by Yara Productions – T-shirts, sweatshirts, tracksuits, trousers, collar shirts, jackets, and coats. High-quality production with 24+ years of experience."
        />
        <meta
          name="keywords"
          content="garment production, t-shirt manufacturer, sweatshirt supplier, tracksuit production, trousers manufacturing, jacket production, coat manufacturer, Yara Productions"
        />

       
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Garments We Specialize In",
            "itemListElement": [
              ${garmantProducts
                .map(
                  (p, i) => `
              {
                "@type": "Product",
                "position": ${i + 1},
                "name": "${p.title}",
                "image": "https://yaraproductions.uk${p.image}",
                "description": "${p.description}",
                "url": "https://yaraproductions.uk${p.path}",
                "brand": {
                  "@type": "Organization",
                  "name": "Yara Productions"
                }
              }`
                )
                .join(",")}
            ]
          }
          `}
        </script>
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="text-left mb-16">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px] mb-4">
            HIGH-END QUALITY
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 leading-tight">
            Garments We Specialize In
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {garmantProducts.map((product, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="relative">
                  <a
                    href={product.path}
                    className="text-2xl font-serif text-white mb-2"
                  >
                    {product.title}
                  </a>

                  <div className="w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full mb-3"></div>

                  <a
                    href={product.path}
                    className="flex items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white font-medium"
                  >
                    {product.btn}
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GarmantsHome;
