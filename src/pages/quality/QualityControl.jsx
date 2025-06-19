import React, { useState } from "react";
import qualityControl from "../../assets/image/quality/qualitycontrol.jpg?url";
import qc1 from "../../assets/image/quality/qc1.jpg?url";
import qc2 from "../../assets/image/quality/qc2.jpg?url";
import qc3 from "../../assets/image/quality/qc3.jpg?url";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiCheckSquare,
  FiMonitor,
  FiAward,
  FiCpu,
  FiShield,
} from "react-icons/fi";

const QualityControl = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const qualityControlImages = [
    { src: qc1, alt: "Yara Production Quality Control 1" },
    { src: qc2, alt: "Yara Production Quality Control 2" },
    { src: qc3, alt: "Yara Production Quality Control 3" },
  ];

  const qualityFeatures = [
    {
      icon: <FiCheckSquare className="text-3xl text-amber-600" />,
      title: "Strict quality control processes",
      description: "Rigorous checks at every production stage",
    },
    {
      icon: <FiMonitor className="text-3xl text-amber-600" />,
      title: "Integrated production monitoring",
      description: "Real-time tracking with advanced ERP systems",
    },
    {
      icon: <FiAward className="text-3xl text-amber-600" />,
      title: "Faultless and standardized products",
      description: "Consistent excellence in every garment",
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
        (currentImageIndex - 1 + qualityControlImages.length) %
        qualityControlImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % qualityControlImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <section
      id="our-standard-quality"
      className="max-w-screen-xl mx-auto my-20 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Total Quality Control Philosophy
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 uppercase leading-tight">
            YARA Production
          </h2>

          <p className="text-gray-600 text-md leading-relaxed font-lato">
            At YARA PRODUCTION, we're dedicated to delivering exceptional
            quality through meticulous control at every production stage. From
            sampling to packaging, our advanced ERP systems and AI monitoring
            minimize errors, ensuring:
          </p>

          <div className="grid grid-cols-1 gap-6 mt-6">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg"
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <FiCpu className="text-3xl text-amber-600 mt-1" />
            <p className="text-gray-600">
              Our commitment to investing in cutting-edge technology enables us
              to consistently produce high-quality, niche garments that meet the
              standards of our global customers.
            </p>
          </div>
        </div>

        <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={qualityControl}
            alt="Quality control process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <div className="text-white">
              <FiShield className="text-4xl mb-3" />
              <h3 className="text-xl font-serif">Quality Assurance</h3>
              <p className="text-white/90">
                Every step monitored for perfection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {qualityControlImages.map((image, index) => (
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
                src={qualityControlImages[currentImageIndex].src}
                alt={qualityControlImages[currentImageIndex].alt}
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

export default QualityControl;
