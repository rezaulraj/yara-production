import React, { useState } from "react";
import fabricdetali1 from "../../assets/image/fabric/fabd1.jpg?url";
import fabricdetali2 from "../../assets/image/fabric/fabd2.jpg?url";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiTrendingUp,
  FiCpu,
  FiEye,
  FiCheckCircle,
  FiGlobe,
  FiPackage,
} from "react-icons/fi";

const Strength = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fabricImages = [
    { src: fabricdetali1, alt: "Yara Production Fabric Details 1" },
    { src: fabricdetali2, alt: "Yara Production Partner Details 2" },
  ];

  const productionFeatures = [
    {
      icon: <FiCpu className="text-3xl text-amber-600" />,
      text: "Eight state-of-the-art fabric production machines",
    },
    {
      icon: <FiPackage className="text-3xl text-amber-600" />,
      text: "Five collar machines",
    },
  ];

  const expertiseFeatures = [
    {
      icon: <FiEye className="text-3xl text-amber-600" />,
      text: "Attention to detail",
    },
    {
      icon: <FiCheckCircle className="text-3xl text-amber-600" />,
      text: "Commitment to quality",
    },
    {
      icon: <FiGlobe className="text-3xl text-amber-600" />,
      text: "Innovative designs",
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
    <section className="bg-amber-50">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h4 className="text-primary font-serif text-lg tracking-widest">
              OUR STRENGTH
            </h4>
            <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight">
              Transforming High-Quality Yarns to Fabric
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At YARA PRODUCTION, our fabric production facility has evolved
              significantly over the years. From humble beginnings with two
              machines, we've grown to feature:
            </p>

            {/* Production Features */}
            <div className="space-y-4">
              {productionFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <p className="text-gray-700">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Crafting Exceptional Fabrics Section */}
            <div className="pt-6">
              <h3 className="text-2xl font-serif font-medium text-gray-800 mb-4">
                Crafting Exceptional Fabrics
              </h3>
              <p className="text-gray-600 mb-4">
                We transform premium yarns like cotton, wool, cashmere, linen,
                and silk into exquisite fabrics that reflect the latest fashion
                trends from around the world. Our expertise ensures that every
                fabric is a masterpiece, showcasing:
              </p>

              <div className="space-y-4">
                {expertiseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <p className="text-gray-700">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {fabricImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer h-96"
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
        </div>

        {/* Image Popup Gallery */}
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
      </div>
    </section>
  );
};

export default Strength;
