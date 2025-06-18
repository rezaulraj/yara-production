import React from "react";
import garmant1 from "../../assets/image/home/gr1.png?url";
import garmant2 from "../../assets/image/home/gr2.png?url";
import garmant3 from "../../assets/image/home/gr3.png?url";
import garmant4 from "../../assets/image/home/gr4.png?url";
import garmant5 from "../../assets/image/home/gr5.png?url";
import garmant6 from "../../assets/image/home/gr6.png?url";
import garmant7 from "../../assets/image/home/gr7.png?url";
import { FaArrowRight } from "react-icons/fa6";

const GarmantsHome = () => {
  const garmantProducts = [
    {
      title: "T-Shirt",
      image: garmant1,
      btn: "Details",
    },
    {
      title: "Sweatshirt",
      image: garmant2,
      btn: "Details",
    },
    {
      title: "Tracksuit",
      image: garmant3,
      btn: "Details",
    },
    {
      title: "Trousers",
      image: garmant4,
      btn: "Details",
    },
    {
      title: "Collar Shirts",
      image: garmant5,
      btn: "Details",
    },
    {
      title: "Jacket",
      image: garmant6,
      btn: "Details",
    },
    {
      title: "Coat",
      image: garmant7,
      btn: "Details",
    },
  ];

  return (
    <section className="bg-amber-50">
      {/* Text Content - Left Aligned */}
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="text-left mb-16">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px] mb-4">
            HIGH-END QUALITY
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 leading-tight">
            Garments We Specialize In
          </h2>
        </div>

        {/* Image Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {garmantProducts.map((product, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="relative">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {product.title}
                  </h3>

                  {/* Animated Border */}
                  <div className="w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full mb-3"></div>

                  {/* Hidden Details Link */}
                  <a
                    href="#"
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
