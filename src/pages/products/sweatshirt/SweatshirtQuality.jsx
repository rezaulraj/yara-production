import React, { useState } from "react";
import swwatshirt1 from "../../../assets/image/menufuture/Production/sweatshirt/ss2.jpg?url";
import swwatshirt2 from "../../../assets/image/menufuture/Production/sweatshirt/ss2.jpg?url";
import swwatshirt3 from "../../../assets/image/menufuture/Production/sweatshirt/ss3.jpg?url";
import swwatshirt4 from "../../../assets/image/menufuture/Production/sweatshirt/ss4.jpg?url";
import swwatshirt5 from "../../../assets/image/menufuture/Production/sweatshirt/ss5.jpg?url";
import swwatshirt6 from "../../../assets/image/menufuture/Production/sweatshirt/ss6.jpg?url";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
const SweatshirtQuality = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const swwatshirtImages = [
    { src: swwatshirt1, alt: "Yara Production swwatshirt 1" },
    { src: swwatshirt2, alt: "Yara Production swwatshirt 2" },
    { src: swwatshirt3, alt: "Yara Production swwatshirt 3" },
    { src: swwatshirt4, alt: "Yara Production swwatshirt 4" },
    { src: swwatshirt5, alt: "Yara Production swwatshirt 5" },
    { src: swwatshirt6, alt: "Yara Production swwatshirt 6" },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + swwatshirtImages.length) %
        swwatshirtImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % swwatshirtImages.length;
    }
    setCurrentImageIndex(newIndex);
  };
  return (
    <section id="sweatshit-products" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        {/* Text Content */}
        <div className="space-y-4 mb-6">
          <h4 className="text-primary font-serif text-lg tracking-widest">
            Premium Quality
          </h4>
          <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight ">
            Knitted Sweatshirts
          </h2>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-4">
          {swwatshirtImages.map((image, index) => (
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
                src={swwatshirtImages[currentImageIndex].src}
                alt={swwatshirtImages[currentImageIndex].alt}
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

export default SweatshirtQuality;
