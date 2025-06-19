import React from "react";
import heroImage from "../../assets/image/about/hero.jpg?url";

const HeroAbout = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
     
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Yara Production Facility"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-serif font-light tracking-[5px] text-primary mb-4">
            YARA PRODUCTION
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-50 leading-tight mb-8 tracking-wider uppercase">
            OUR JOURNEY
          </h1>

         
          <button
            onClick={() => {
              const section = document.querySelector("#our-story");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-8 py-3 bg-transparent border-2 border-white text-white font-serif text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Our Story
          </button>
        </div>
      </div>

     
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
