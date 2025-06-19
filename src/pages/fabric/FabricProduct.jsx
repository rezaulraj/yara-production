import React, { useState } from "react";
import fabricImage from "../../assets/image/fabric/fabric.jpg?url";
import fabric1 from "../../assets/image/fabric/fab1.jpg?url";
import fabric2 from "../../assets/image/fabric/fab2.jpg?url";
import fabric3 from "../../assets/image/fabric/fab3.jpg?url";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiClock,
  FiDollarSign,
  FiAward,
  FiLayers,
} from "react-icons/fi";

const FabricProduct = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fabricImages = [
    { src: fabric1, alt: "Yara Production Fabric 1" },
    { src: fabric2, alt: "Yara Production Factory 2" },
    { src: fabric3, alt: "Yara Production Factory 3" },
  ];

  const benefits = [
    {
      icon: <FiClock className="text-3xl text-amber-600" />,
      title: "Reduced Lead Times",
      description: "From 8-10 weeks to 4-5 weeks",
    },
    {
      icon: <FiDollarSign className="text-3xl text-amber-600" />,
      title: "Cost Savings",
      description: "Passing efficiency gains to our customers",
    },
    {
      icon: <FiAward className="text-3xl text-amber-600" />,
      title: "Unparalleled Quality",
      description: "Crafting fabrics from the finest yarns",
    },
    {
      icon: <FiLayers className="text-3xl text-amber-600" />,
      title: "Unique Collections",
      description: "Delivering innovative designs with speed and precision",
    },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + fabricImages.length) % fabricImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % fabricImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Dedication to Excellence
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 uppercase leading-tight">
            In-House Fabric Manufacturing
          </h2>

          <p className="text-gray-600 text-md leading-relaxed font-lato">
            At YARA PRODUCTION we craft exceptional fabrics from the finest
            yarns in our state-of-the-art facility. By producing fabric
            in-house, we gain a competitive edge, reducing lead times from 8-10
            weeks to just 4-5 weeks. This efficiency saves our customers time
            and money, allowing us to deliver unique collections with
            unparalleled speed and quality.
          </p>

          {/* Benefits Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-serif font-normal text-gray-700 mb-6">
              Benefits of In-House Manufacturing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[400px]">
          <img
            src={fabricImage}
            alt="Textile production"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 items-center justify-center gap-4 mt-10">
        {fabricImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer h-64"
            onClick={() => openGallery(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Click Me</span>
            </div>
          </div>
        ))}
      </div>
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
          >
            <FiX className="text-3xl" />
          </button>

          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10 transition-all"
            >
              <FiChevronLeft className="text-2xl" />
            </button>

            <div className="w-full h-[80vh] flex items-center justify-center">
              <img
                src={fabricImages[currentImageIndex].src}
                alt={fabricImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <button
              onClick={() => navigate("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10 transition-all"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FabricProduct;
