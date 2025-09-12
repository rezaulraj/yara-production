import React from "react";
// import herovideo from "../../assets/video/textile-video.mp4";
import herovideo from "../../assets/image/menufuture/Homepage/promovideo.mp4";
import { Helmet } from "react-helmet";
const HeroHome = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Helmet>
        <title>Yara Productions</title>
        <meta
          name="description"
          content="Yara Productions UK – Dedicated to producing premium quality garments with precision, sustainability, and craftsmanship. Explore our exclusive clothing collections."
        />
        <meta
          name="keywords"
          content="Yara Productions, garments manufacturer UK, fashion production, premium clothing, textile production, sustainable garments"
        />
        <meta name="author" content="Yara Productions" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yaraproductions.uk/" />
        <meta property="og:title" content="Yara Productions" />
        <meta
          property="og:description"
          content="Explore Yara Productions – where dedication meets premium quality garment production in the UK."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />
        <meta property="og:site_name" content="Yara Productions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yaraproductions.uk/" />
        <meta
          name="twitter:title"
          content="Yara Productions | Premium Quality Garments Manufacturer UK"
        />
        <meta
          name="twitter:description"
          content="Premium garment manufacturing in the UK. Explore Yara Productions."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />

        <link rel="canonical" href="https://yaraproductions.uk/" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yara Productions",
            "url": "https://yaraproductions.uk/",
            "logo": "https://yaraproductions.uk/logo3.png",
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
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-serif font-light tracking-[5px] text-primary mb-4">
            WELCOME TO YARA PRODUCTION
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-50 leading-tight mb-8 tracking-wider uppercase">
            DEDICATION To Premium QUALITY GARMENTS
          </h1>

          <button
            onClick={() => {
              const section = document.querySelector(
                "#discover-out-collection"
              );
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-8 py-3 bg-transparent border-2 border-white text-white font-serif text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover Our Collection
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

export default HeroHome;
