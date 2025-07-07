import React from "react";
import about1 from "../../assets/image/menufuture/AboutUs/m1.jpg?url";
import about2 from "../../assets/image/menufuture/AboutUs/factory.jpg?url";

const AboutUsHome = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            About us
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 leading-tight">
            Private Label Exclusive High-End Quality Garments Manufacturer
          </h2>
          <p className="text-gray-600 text-md leading-relaxed font-lato">
            YARA Production with 24 years of textile production knowledge and
            experience, producing high-quality garments for worldwide brands and
            start-up brands.
            <br />
            <br />
            Perfectly filling the gap in the production of high quality and
            exclusive boutique garments in the sector, Yara Production is the
            leader in Castellón, Spain in the production of niche and high
            quality knitwear products by producing in-house cotton, silk, wool,
            linen, cashmere, tencel, viscose and nylon knitted fabrics, starting
            from selecting the yarn for the garment.
          </p>

          <button
            onClick={() => {
              const section = document.querySelector(
                "#why-chose"
              );
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-primary border-2 border-primary hover:text-white group"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>

        <div className="relative h-full min-h-[400px]">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:z-10 z-[1]">
            <img
              src={about1}
              alt="Textile production"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:z-10 z-[2]">
            <img
              src={about2}
              alt="High quality garments"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
