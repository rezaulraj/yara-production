import React, { useState } from "react";
import jacketqulity1 from "../../../assets/image/menufuture/Production/jacket/c1.jpg?url";
import jacketqulity2 from "../../../assets/image/menufuture/Production/jacket/c2.jpg?url";
import jacketqulity3 from "../../../assets/image/menufuture/Production/jacket/c3.jpg?url";
import jacketqulity4 from "../../../assets/image/menufuture/Production/jacket/c4.jpg?url";
import jacketqulity5 from "../../../assets/image/menufuture/Production/jacket/c5.jpg?url";
import jacketqulity6 from "../../../assets/image/menufuture/Production/jacket/c6.jpg?url";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
const JacketQuility = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const jacketImages = [
    { src: jacketqulity1, alt: "Yara Production jacketqulity 1" },
    { src: jacketqulity2, alt: "Yara Production jacketqulity 2" },
    { src: jacketqulity3, alt: "Yara Production jacketqulity 3" },
    { src: jacketqulity4, alt: "Yara Production jacketqulity 4" },
    { src: jacketqulity5, alt: "Yara Production jacketqulity 5" },
    { src: jacketqulity6, alt: "Yara Production jacketqulity 6" },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + jacketImages.length) % jacketImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % jacketImages.length;
    }
    setCurrentImageIndex(newIndex);
  };
  return (
    <section id="jacket-products" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        
        <div className="space-y-4 mb-6">
          <h4 className="text-primary font-serif text-lg tracking-widest">
            Premium Quality
          </h4>
          <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight ">
            Knitted Jacket
          </h2>
        </div>

      
        <div className="grid grid-cols-3 gap-4">
          {jacketImages.map((image, index) => (
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
              <div className="absolute inset-0 bg-black/30 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* <span className="text-white text-lg font-medium">Click Me</span> */}
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
                src={jacketImages[currentImageIndex].src}
                alt={jacketImages[currentImageIndex].alt}
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

export default JacketQuility;
