import React from "react";
import about1 from "../../assets/image/menufuture/AboutUs/m1.jpg?url";
import about2 from "../../assets/image/menufuture/AboutUs/factory.jpg?url";
import { Helmet } from "react-helmet";

const AboutUsHome = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6">
      <Helmet>
        <meta
          name="description"
          content="With 24+ years of textile production expertise, Yara Productions manufactures premium high-quality garments for global fashion brands. Located in Castellón, Spain, we specialize in knitwear using cotton, silk, wool, cashmere, linen, and more."
        />
        <meta
          name="keywords"
          content="Yara Productions, garment manufacturer Spain, premium clothing, private label fashion, knitwear production, luxury apparel manufacturer"
        />
        <meta name="author" content="Yara Productions" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yaraproductions.uk/about-yara"
        />
        <meta
          property="og:title"
          content="About Yara Productions | Premium Garments Manufacturer"
        />
        <meta
          property="og:description"
          content="Discover Yara Productions: 24+ years of experience in luxury garment manufacturing for international brands."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />
        <meta property="og:site_name" content="Yara Productions" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yara Productions",
            "url": "https://yaraproductions.uk",
            "logo": "https://yaraproductions.uk/logo3.png",
            "description": "Premium garment manufacturer in Spain with 24+ years of expertise in producing exclusive knitwear and luxury apparel.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Castellón",
              "addressCountry": "Spain"
            },
            "sameAs": [
              "https://www.facebook.com/yaraproductions0/",
              "https://www.instagram.com/yaraproductions0/",
              "https://www.youtube.com/@YaraProductions",
              "https://www.tiktok.com/@yaraproductions0",
              "https://www.linkedin.com/company/107771948/",
              "https://x.com/yaraproduction0",
              "https://www.pinterest.com/yaraproductions/"
            ]
          }
          `}
        </script>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            About us
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 leading-tight">
            Exclusive High-Quality Garments & Knitwear Manufacturer
          </h2>
          <p className="text-gray-600 text-md leading-relaxed font-lato">
            With over 24 years of proven expertise in textile manufacturing,
            YARA Production specializes in delivering premium-quality garments
            for both renowned international fashion houses and innovative
            start-up brands.
            <br />
            <br />
            As a trusted leader in Castellón, Spain, YARA Production perfectly
            fills the gap in exclusive, boutique-level garment production. The
            company stands out for its mastery in high-end knitwear, producing
            fabrics entirely in-house — including cotton, silk, wool, linen,
            cashmere, tencel, viscose, and nylon. This end-to-end approach
            guarantees exceptional quality, precision, and craftsmanship at
            every stage of production.
          </p>

          <button
            onClick={() => {
              const section = document.querySelector("#why-chose");
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
            <span className="relative z-10">More Info</span>
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
