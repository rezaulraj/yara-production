import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logo from "/logo2.png?url";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <img src={logo} alt="GYT Textile" className="h-12 mr-3" />
              {/* <h2 className="text-2xl font-serif font-semibold text-white">
                YARA PRODUCTION
              </h2> */}
            </div>
            <p className="text-gray-400 leading-relaxed">
              GYT Textile is the leading company in Turkey in the production of
              niche and high quality knitted clothing products by producing
              cotton, silk, wool, linen, cashmere, tencel, viscose and nylon
              knitted fabrics starting from yarn.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Turkish Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-white border-b border-amber-600 pb-2 inline-block">
              Türkçe
            </h3>
            <p className="text-gray-400 leading-relaxed">
              GYT Tekstil, iplikten başlayarak pamuk, ipek, yün, keten, kaşmir,
              tencel, viskon ve naylon örme kumaşlar üreterek niş ve yüksek
              kaliteli örme giyim ürünleri üretiminde Türkiye'nin önde gelen
              şirketidir.
            </p>
          </div>

          {/* Explore Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-white border-b border-amber-600 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  ABOUT GYT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  FACTORY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  OUR FABRICS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  QUALITY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  SUSTAINABILITY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-white border-b border-amber-600 pb-2 inline-block">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400">
                  Hurriyet Bulvari Deparko San Sit No: 1/44 Basaksehir Istanbul Turkey
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-amber-500 mr-3" />
                <p className="text-gray-400">+90 (212) 675 24 98</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-amber-500 mr-3" />
                <a
                  href="mailto:info@gyttextile.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} YARA Production. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
