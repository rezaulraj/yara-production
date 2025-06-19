import React, { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from "/logo1.png?url";
import image1 from "../../assets/image/home/about3.jpg?url";
import image2 from "../../assets/image/home/about4.jpg?url";
import image3 from "../../assets/image/home/about5.jpg?url";
import image4 from "../../assets/image/home/about6.jpg?url";
import image5 from "../../assets/image/home/about7.jpg?url";
import image6 from "../../assets/image/home/about8.jpg?url";
import image7 from "../../assets/image/home/about9.jpg?url";

const WhyChoseUs = () => {
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
    <section className="max-w-screen-xl mx-auto px-6 py-20 relative bg-gray-50">
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "300px auto",
          }}
        ></div>
      </div>

      <div className="mb-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <h3 className="text-3xl font-serif text-primary mb-8 tracking-wide">
            Immense Integrated Manufacturing
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Yara Production, we control all key production stages in our
              state-of-the-art facility in Istanbul Başakşehir. With ongoing
              investments in sustainable technologies, we've:
            </p>
            <div className="flex justify-center gap-12 mb-10">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary mb-2">
                  750K+
                </span>
                <span className="text-gray-600">
                  Annual production capacity
                </span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary mb-2">
                  10X
                </span>
                <span className="text-gray-600">
                  Team growth since inception
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
                <h4 className="font-serif text-xl font-medium text-gray-800 mb-3">
                  In-House Fabric Manufacturing
                </h4>
                <p className="text-gray-600">
                  Quality control from yarn to fabric
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
                <h4 className="font-serif text-xl font-medium text-gray-800 mb-3">
                  In-House Collar Manufacturing
                </h4>
                <p className="text-gray-600">
                  Precision craftsmanship in every detail
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gray-900 flex-1"></div>
          <div className="flex items-center gap-4">
            <img src={logo} alt="Yara Production" className="h-16" />
            <h4 className="text-lg font-serif font-medium text-gray-500 uppercase tracking-widest">
              OUR PRODUCTION PROCESS
            </h4>
          </div>
          <div className="h-px bg-gray-900 flex-1"></div>
        </div>

        <div className="relative px-12">
          <Swiper
            ref={swiperRef}
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
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 group-hover:opacity-0">
                    <span className="text-sm font-medium text-white bg-primary/90 font-serif px-3 py-1 rounded-full">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2 font-serif">
                      {card.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 bg-gray-900/80 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-medium text-gray-300 mb-2 font-serif">
                      {card.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white text-center mb-4 font-serif">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-center">
                      Yara Production excellence
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-next absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md z-10 transition text-white">
            <FiArrowLeft className="text-xl" />
          </button>
          <button className="swiper-button-prev absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md z-10 transition text-white">
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
