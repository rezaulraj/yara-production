import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import partner1 from "../../../assets/image/about/partner1.jpg?url";
import partner2 from "../../../assets/image/about/partner2.jpg?url";
const UniquePartner = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const partnerImages = [
    { src: partner1, alt: "Yara Production Partner 1" },
    { src: partner2, alt: "Yara Production Partner 2" },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + partnerImages.length) % partnerImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % partnerImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className="bg-amber-50">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h4 className="text-primary font-serif text-lg tracking-widest uppercase leading-tight">
              Distinctive
            </h4>
            <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight">
              Trusted by Leading Brands Worldwide
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Yara Production leverages its Yara production expertise and design
              capabilities to empower local and international brands. Our
              in-house design center, staffed by fashion trend experts, creates
              original collections featuring:
            </p>
            <ul className="text-gray-600 space-y-2 pl-5">
              <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:bg-amber-600 before:rounded-full">
                Latest innovations in knitted products, including diverse
                fabrics and prints
              </li>
              <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:bg-amber-600 before:rounded-full">
                High-quality materials and sustainable production methods
              </li>
            </ul>

            <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight mt-12">
              Committed to Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our premium knitted collections adorn the showcases of esteemed
              global brands, reflecting our commitment to quality and attention
              to detail. With a focus on innovation and customer satisfaction,
              we establish long-term partnerships with valued brands worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {partnerImages.map((image, index) => (
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
                  <span className="text-white text-lg font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
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
                  src={partnerImages[currentImageIndex].src}
                  alt={partnerImages[currentImageIndex].alt}
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

export default UniquePartner;
