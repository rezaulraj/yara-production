import React, { useRef } from "react";
import { FaIndustry, FaGlobe, FaShippingFast } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from "/logo1.png?url";
import machine from "../../assets/image/home/about1.png?url";
import image1 from "../../assets/image/home/about3.jpg?url";
import image2 from "../../assets/image/home/about4.jpg?url";
import image3 from "../../assets/image/home/about5.jpg?url";
import image4 from "../../assets/image/home/about6.jpg?url";
import image5 from "../../assets/image/home/about7.jpg?url";
import image6 from "../../assets/image/home/about8.jpg?url";
import image7 from "../../assets/image/home/about9.jpg?url";

const WhyChose = () => {
  const swiperRef = useRef(null);
  const imageTestmonials = [
    {
      image: image1,
      category: "FABRIC",
      title: "In-House Fabric Manufacturing",
    },
    {
      image: image2,
      category: "COLLAR",
      title: "In-House Collar Manufacturing",
    },
    {
      image: image3,
      category: "HIGH TECH",
      title: "Fabric Cutting Technologies",
    },
    {
      image: image4,
      category: "SEWING",
      title: "Sewing Lines",
    },
    {
      image: image5,
      category: "Ironing",
      title: "Finishing",
    },
    {
      image: image6,
      category: "Quality",
      title: "Quality Control",
    },
    {
      image: image7,
      category: "Final",
      title: "Delivery",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-20 relative">
      {/* Logo Watermark Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "300px auto",
          }}
        ></div>
      </div>

      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="Yara Production" className="h-16" />
            <h4 className="text-lg font-serif font-medium text-gray-500 uppercase tracking-widest">
              WHY CHOOSE Yara Production?
            </h4>
          </div>
          <h2 className="text-4xl font-medium font-serif text-gray-700 tracking-widest leading-tight">
            In-House Fabric Manufacturing Excellence
          </h2>
          <p className="text-gray-700 text-sm font-lato leading-relaxed">
            YARA Production carries out all the key stages of production in its
            integrated facility in Istanbul Turkey. Our company, which has
            increased its annual production capacity to 750,000 units by
            continuing its sustainable latest production technologies and
            investments since the day it was founded.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <FaGlobe className="text-xl " />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-amber-600">
                  Manufacturing for Worldwide Brands
                </h3>
                <p className="text-gray-700 text-sm font-lato">
                  The collections we produce adorn the store displays of
                  worldwide brands.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <FaIndustry className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-amber-600">
                  Integrated Production Facility
                </h3>
                <p className="text-gray-700 text-sm font-lato">
                  Complete control over every step of the manufacturing process
                  ensures consistent quality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <FaShippingFast className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-amber-600">
                  Fast Delivery Advantage
                </h3>
                <p className="text-gray-700 text-sm font-lato">
                  Because we produce our fabric onsite, we reduce lead times by
                  50% compared to competitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[500px]">
          <img
            src={machine}
            alt="Manufacturing facility"
            className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-gray-900"
          />
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gray-900 flex-1"></div>
          <h4 className="text-lg font-serif font-medium text-gray-500 uppercase tracking-widest whitespace-nowrap">
            WHY CHOOSE US
          </h4>
          <div className="h-px bg-gray-900 flex-1"></div>
        </div>
        <h2 className="text-4xl font-serif tracking-wider font-medium text-gray-700 mb-12 text-center">
          Immense Integrated Factory
        </h2>

        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="swiper-container"
          >
            {imageTestmonials.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  className="relative group overflow-hidden rounded-xl shadow-lg h-80"
                >
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Bottom Text (Visible by default) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 group-hover:opacity-0">
                    <span className="text-sm font-medium text-white bg-primary/90 font-serif px-3 py-1 rounded-full">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2 font-serif">
                      {card.title}
                    </h3>
                  </div>

                  {/* Full Overlay (Visible on hover) */}
                  <div className="absolute inset-0 bg-gray-900/80 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-medium text-gray-300 mb-2 font-serif">
                      {card.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white text-center mb-4 font-serif">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-next absolute left-0 top-1/2 -translate-y-1/2  p-3 rounded-full shadow-md z-10 transition text-white">
            <FiArrowLeft className="text-xl" />
          </button>
          <button className="swiper-button-prev absolute right-0 top-1/2 -translate-y-1/2  p-3 rounded-full shadow-md z-10 transition text-white">
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
