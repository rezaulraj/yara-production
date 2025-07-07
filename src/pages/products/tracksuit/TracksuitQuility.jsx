import React, { useState } from "react";
import tracksuit1 from "../../../assets/image/menufuture/Production/tracksuit/ts1.jpg?url";
import tracksuit2 from "../../../assets/image/menufuture/Production/tracksuit/ts2.jpg?url";
import tracksuit3 from "../../../assets/image/menufuture/Production/tracksuit/ts3.jpg?url";
import tracksuit4 from "../../../assets/image/menufuture/Production/tracksuit/ts4.jpg?url";
import tracksuit5 from "../../../assets/image/menufuture/Production/tracksuit/ts5.jpg?url";
import tracksuit6 from "../../../assets/image/menufuture/Production/tracksuit/ts6.jpg?url";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
const TracksuitQuility = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tracksuitImages = [
    { src: tracksuit1, alt: "Yara Production tracksuit 1" },
    { src: tracksuit2, alt: "Yara Production tracksuit 2" },
    { src: tracksuit3, alt: "Yara Production tracksuit 3" },
    { src: tracksuit4, alt: "Yara Production tracksuit 4" },
    { src: tracksuit5, alt: "Yara Production tracksuit 5" },
    { src: tracksuit6, alt: "Yara Production tracksuit 6" },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + tracksuitImages.length) %
        tracksuitImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % tracksuitImages.length;
    }
    setCurrentImageIndex(newIndex);
  };
  return (
    <section id="tracksuit-products" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-6">
          <h4 className="text-primary font-serif text-lg tracking-widest">
            Premium Quality
          </h4>
          <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight ">
            Knitted Tracksuits
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {tracksuitImages.map((image, index) => (
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
                src={tracksuitImages[currentImageIndex].src}
                alt={tracksuitImages[currentImageIndex].alt}
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

export default TracksuitQuility;
