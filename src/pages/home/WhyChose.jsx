import React, { useRef } from "react";
import { FaIndustry, FaGlobe, FaShippingFast } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from "/logo1.png?url";
import machine from "../../assets/image/menufuture/AboutUs/m1.jpg?url";
import image1 from "../../assets/image/menufuture/Homepage/inhousematien.jpg?url";
import image2 from "../../assets/image/menufuture/Homepage/inhousecollarmanuacture.jpg?url";
import image3 from "../../assets/image/menufuture/Homepage/fabriccuttingtechnologies.jpg?url";
import image4 from "../../assets/image/menufuture/Homepage/sewingllines.jpg?url";
import image5 from "../../assets/image/menufuture/Homepage/finishing.jpg?url";
import image6 from "../../assets/image/menufuture/Homepage/qualitycheck.jpg?url";
import image7 from "../../assets/image/menufuture/Homepage/delivery.jpg?url";
import { Helmet } from "react-helmet";

const WhyChose = () => {
  const swiperRef = useRef(null);
  const imageTestmonials = [
    {
      image: image1,
      category: "PREMIUM FABRICS",
      title: "In-House Fabric Manufacturing",
      description:
        "We create luxury textiles with complete quality control from fiber to finished fabric.",
    },
    {
      image: image2,
      category: "EXPERT CRAFTSMANSHIP",
      title: "In-House Collar Manufacturing",
      description:
        "Precision engineering for perfect collars that maintain their shape wear after wear.",
    },
    {
      image: image3,
      category: "PRECISION CUTTING",
      title: "Advanced Cutting Technologies",
      description:
        "State-of-the-art equipment ensures perfect pattern matching and minimal waste.",
    },
    {
      image: image4,
      category: "EXPERT SEWING",
      title: "Specialized Sewing Lines",
      description:
        "Skilled artisans and advanced machinery create flawless stitching every time.",
    },
    {
      image: image5,
      category: "PERFECT FINISHING",
      title: "Quality Finishing Process",
      description:
        "Every garment receives meticulous attention for a impeccable final appearance.",
    },
    {
      image: image6,
      category: "QUALITY ASSURANCE",
      title: "Rigorous Quality Control",
      description:
        "Multiple checkpoints ensure only perfect products reach our clients.",
    },
    {
      image: image7,
      category: "TIMELY DELIVERY",
      title: "Efficient Logistics",
      description:
        "Our integrated process means your products arrive on time, every time.",
    },
  ];

  return (
    <div id="why-chose" className="max-w-screen-xl mx-auto px-6 py-20 relative">
      <Helmet>
        <meta
          name="description"
          content="Discover why global brands choose Yara Production: premium in-house manufacturing, sustainable practices, rapid delivery, and exceptional quality for luxury textiles."
        />
        <meta
          name="keywords"
          content="Yara Production, premium manufacturing, sustainable production, fast delivery, quality control, textile innovation Spain"
        />
        <meta
          property="og:title"
          content="Why Leading Brands Choose Yara Production"
        />
        <meta
          property="og:description"
          content="Experience excellence in textile manufacturing with Yara Production's integrated facility, innovative technology, and commitment to quality."
        />
        <meta property="og:image" content={machine} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "300px auto",
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="Yara Production" className="h-16" />
            <h4 className="text-lg font-serif font-medium text-gray-500 uppercase tracking-widest">
              WHY CHOOSE YARA PRODUCTION?
            </h4>
          </div>
          <h2 className="text-4xl font-medium font-serif text-gray-700 tracking-widest leading-tight">
            Excellence in Every Thread: Premium Manufacturing Solutions
          </h2>
          <p className="text-gray-700 text-sm font-lato leading-relaxed">
            At YARA Production, we bring passion and precision to every stage of
            manufacturing. Our state-of-the-art integrated facility in
            Castellón, Spain combines traditional craftsmanship with
            cutting-edge technology to deliver exceptional quality for
            discerning brands worldwide. Our commitment to innovation and
            sustainable practices has enabled us to grow our capacity to 750,000
            units annually while maintaining the highest standards of
            excellence.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <FaGlobe className="text-xl " />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-amber-600">
                  Trusted by Global Brands
                </h3>
                <p className="text-gray-700 text-sm font-lato">
                  We proudly manufacture collections that grace the world's most
                  prestigious stores, building lasting partnerships through
                  consistent quality and reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <FaIndustry className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-amber-600">
                  Complete Vertical Integration
                </h3>
                <p className="text-gray-700 text-sm font-lato">
                  With full control over every production step, we guarantee
                  unmatched quality consistency, rapid prototyping, and flexible
                  customization options.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <FaShippingFast className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-amber-600">
                  Accelerated Production Timeline
                </h3>
                <p className="text-gray-700 text-sm font-lato">
                  Our integrated manufacturing process reduces lead times by
                  50%, getting your products to market faster without
                  compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[500px]">
          <img
            src={machine}
            alt="State-of-the-art manufacturing facility"
            className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-secondary"
          />
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        </div>
      </div>

      <div className="mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gray-900 flex-1"></div>
          <h4 className="text-lg font-serif font-medium text-gray-500 uppercase tracking-widest whitespace-nowrap">
            OUR MANUFACTURING EXCELLENCE
          </h4>
          <div className="h-px bg-gray-900 flex-1"></div>
        </div>
        <h2 className="text-4xl font-serif tracking-wider font-medium text-gray-700 mb-12 text-center">
          The Complete Production Journey Under One Roof
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
                    <p className="text-gray-200 text-center text-sm px-4">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

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
