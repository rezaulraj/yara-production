import React from "react";
import about1 from "../../assets/image/home/about1.png?url";
import about2 from "../../assets/image/home/about2.png?url";
const Expreience = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Dedication To High-Quality
          </h4>
          <h2 className="font-serif text-2xl md:text-3xl tracking-widest font-normal uppercase text-gray-700 leading-tight">
            Yara Production
          </h2>
          <p className="text-gray-600 text-md leading-relaxed font-lato">
            Yara Production was founded in 2017 by Mr. Goksel TURHAL, leveraging
            Yara production expertise gained over 24 years. Our company excels
            in producing exclusive, high-quality knitted products as a leading
            niche clothing manufacturer. We prioritize strict quality control
            through in-house fabric production.
            <br />
            <br />
            Our integrated facility in Başakşehir, Istanbul, enables us to
            oversee all production stages, from selecting Premium materials like
            cotton, silk, wool, and cashmere to deliver finished products. This
            approach ensures exceptional quality and efficiency, supported by
            advanced technologies.
            <br />
            <br />
            With a strong commitment to innovation and excellence, Yara Textile
            has grown its annual production capacity to 750,000 units. We've
            invested in Yara Production technology and expanded our team of
            skilled professionals to meet increasing demand.
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative h-full min-h-[400px]">
          {/* Top Right Image */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:z-10 z-[1]">
            <img
              src={about1}
              alt="Textile production"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left Image */}
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

export default Expreience;
