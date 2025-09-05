import React from "react";
import heroImage from "../../assets/image/menufuture/ContactUs/factory.jpg?url";
import { Helmet } from "react-helmet";

const HeroAbout = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Helmet>
        <title>
          About Yara Productions | Our Journey in Textile Manufacturing
        </title>
        <meta
          name="description"
          content="Learn about Yara Productions’ journey in textile manufacturing. From Spain to global markets, we deliver premium quality garments with sustainability and precision."
        />
        <meta
          name="keywords"
          content="Yara Productions, About Yara, garment manufacturing Spain, textile production, sustainable garments, clothing manufacturer"
        />
        <meta name="author" content="Yara Productions" />
        <meta name="contact" content="chairman@yaraproductions.uk" />
        <meta name="geo.position" content="40.6233; -0.0986" />
        <meta name="geo.placename" content="Morella, Castellón, Spain" />
        <meta name="geo.region" content="ES" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yaraproductions.uk/about-yara"
        />
        <meta
          property="og:title"
          content="About Yara Productions | Our Journey in Textile Manufacturing"
        />
        <meta
          property="og:description"
          content="Explore the story of Yara Productions – delivering excellence in textile and garment production worldwide."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />
        <meta property="og:site_name" content="Yara Productions" />
        <meta property="og:email" content="chairman@yaraproductions.uk" />
        <meta
          property="og:location"
          content="Trav. Borrás, 9, 12300 Morella, Castellón, Spain"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://yaraproductions.uk/about-yara"
        />
        <meta
          name="twitter:title"
          content="About Yara Productions | Our Journey in Textile Manufacturing"
        />
        <meta
          name="twitter:description"
          content="Yara Productions – excellence in garment and textile manufacturing with global reach."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />

        <link rel="canonical" href="https://yaraproductions.uk//about-yara" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yara Productions",
            "url": "https://yaraproductions.uk/",
            "logo": "https://yaraproductions.uk/logo3.png",
            "email": "chairman@yaraproductions.uk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Trav. Borrás, 9",
              "addressLocality": "Morella",
              "addressRegion": "Castellón",
              "postalCode": "12300",
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
