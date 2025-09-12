import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import factimage from "../../assets/image/menufuture/Factory/factory.jpg?url";
import facti1 from "../../assets/image/menufuture/Factory/m1.jpg?url";
import facti2 from "../../assets/image/menufuture/Factory/m2.jpg?url";
import facti3 from "../../assets/image/menufuture/Factory/m3.jpg?url";
import { Helmet } from "react-helmet";
const AboutFactory = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const factImages = [
    { src: facti1, alt: "Yara Production Factory Process 1" },
    { src: facti2, alt: "Yara Production Factory Process 2" },
    { src: facti3, alt: "Yara Production Factory Process 2" },
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + factImages.length) % factImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % factImages.length;
    }
    setCurrentImageIndex(newIndex);
  };
  return (
    <section id="view-our-work" className="max-w-screen-xl mx-auto my-20 px-6">
      <Helmet>
        <title>Our Factory | YARA Production</title>
        <meta
          name="description"
          content="Discover YARA Production's state-of-the-art textile factory, leveraging 24 years of expertise to deliver high-quality garments for global brands."
        />
        <meta
          name="keywords"
          content="YARA Production factory, textile production, garment manufacturing, quality control, sustainable textile production"
        />
        <meta name="author" content="YARA Production" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Factory | YARA Production"
        />
        <meta
          property="og:description"
          content="Explore YARA Production's factory and learn about our controlled production process, quality assurance, and innovation in textile manufacturing."
        />
        <meta
          property="og:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />
        <meta property="og:url" content="https://yaraproductions.uk/factory" />
        <meta property="og:site_name" content="YARA Production" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Factory | YARA Production"
        />
        <meta
          name="twitter:description"
          content="Learn how YARA Production leverages advanced textile manufacturing techniques, quality control, and sustainable practices."
        />
        <meta
          name="twitter:image"
          content="https://yaraproductions.uk/assets/factory-C7xFOlcj.jpg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YARA Production",
              "url": "https://yaraproductions.uk",
              "logo": "https://yaraproductions.uk/logo3.png",
              "sameAs": [
                "https://www.facebook.com/yaraproductions0/",
                "https://www.linkedin.com/company/107771948/admin/dashboard/",
              ],
              "department": {
                "@type": "Organization",
                "name": "Textile Factory",
                "description": "State-of-the-art factory producing high-quality garments for local and international brands, focusing on quality, innovation, and sustainable practices.",
                "image": "${factimage}"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-500 font-merriweather uppercase tracking-[5px]">
            Commitment to Excellence
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-700 uppercase leading-tight">
            YARA Production
          </h2>

          <p className="text-gray-600 text-md leading-relaxed font-lato">
            <span className="font-semibold font-serif pr-2">
              Dedication to Unparalleled Quality :
            </span>{" "}
            YARA Production with 24 years of textile production knowledge and
            experience, producing high-quality garments for worldwide brands and
            start-up brands.
          </p>
          <p className="text-gray-600 text-md leading-relaxed font-lato">
            <span className="font-semibold font-serif pr-2">
              A Controlled Process :
            </span>{" "}
            Our garments undergo a rigorous process, starting with careful yarn
            selection and progressing through multiple production and quality
            control stages. This attention to detail results in products that
            meet the discerning demands of world-class brands, both locally and
            internationally.
          </p>
          <p className="text-gray-600 text-md leading-relaxed font-lato">
            <span className="font-semibold font-serif pr-2">
              Innovation and R&D :
            </span>{" "}
            Since our inception, we've prioritized research and development,
            investing in innovative fabric production techniques, sustainable
            practices, and technological advancements. We continuously develop
            new fabric types that align with current fashion trends, staying
            ahead of the curve in the ever-evolving world of fashion
          </p>
        </div>

        <div className="relative h-full min-h-[400px]">
          <img
            src={factimage}
            alt="Textile production"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <div className="absolute inset-0 bg-black/20 rounded-md"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {factImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer h-64"
            onClick={() => openGallery(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">View</span>
            </div>
          </div>
        ))}
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
                src={factImages[currentImageIndex].src}
                alt={factImages[currentImageIndex].alt}
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

export default AboutFactory;
