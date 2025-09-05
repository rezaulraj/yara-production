import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/logo2.png?url";
import { LuContact } from "react-icons/lu";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebook className="text-lg" />,
      href: "https://www.facebook.com/yaraproductions0/",
    },
    {
      icon: <FaInstagram className="text-lg" />,
      href: "https://www.instagram.com/yaraproductions0/",
    },
    {
      icon: <FaYoutube className="text-lg" />,
      href: "https://www.youtube.com/@YaraProductions",
    },
    {
      icon: <FaTiktok className="text-lg" />,
      href: "https://www.tiktok.com/@yaraproductions0",
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      href: "https://www.linkedin.com/company/107771948/admin/dashboard/",
    },
    {
      icon: <FaX className="text-lg" />,
      href: "https://x.com/yaraproduction0",
    },
    {
      icon: <FaPinterest className="text-lg" />,
      href: "https://www.pinterest.com/yaraproductions/",
    },
  ];

  const exploreLinks = [
    { label: "ABOUT YARA", href: "/about-yara" },
    { label: "FACTORY", href: "/factory" },
    { label: "OUR FABRICS", href: "/fabric-production" },
    { label: "QUALITY", href: "/our-qualitys" },
    { label: "SUSTAINABILITY", href: "/sustainability" },
    { label: "CONTACT", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={logo}
                alt="Yara Production"
                className="h-16 transition-transform hover:scale-105 duration-300"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Yara Production is Spain's premier manufacturer of high-end, niche
              knitted clothing products. We specialize in producing exceptional
              quality fabrics from premium yarns.
            </p>
            <div className="flex space-x-4 flex-wrap gap-y-2 items-center">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="bg-gray-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-white relative pb-2 inline-block before:absolute before:bottom-0 before:left-0 before:w-12 before:h-0.5 before:bg-amber-500">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-80 w-full"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-1 rounded-xl shadow-2xl h-full overflow-hidden transform hover:shadow-amber-900/20 transition-all duration-500 border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.5475553106176!2d-0.10469022411326452!3d40.61780504337703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5f826890aed477%3A0x91cf3e81adedbca6!2sTrav.%20Borr%C3%A1s%2C%209%2C%2012300%20Morella%2C%20Castell%C3%B3n%2C%20Spain!5e0!3m2!1sen!2sbd!4v1750326698002!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-white relative pb-2 inline-block before:absolute before:bottom-0 before:left-0 before:w-12 before:h-0.5 before:bg-amber-500">
              Contact
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-amber-500/10 p-2 rounded-lg mr-3 group-hover:bg-amber-500/20 transition-colors">
                  <FaMapMarkerAlt className="text-amber-400" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  Trav. Borrás, 9, 12300 Morella, Castellón, Spain
                </p>
              </motion.div>

              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-amber-500/10 p-2 rounded-lg mr-3 group-hover:bg-amber-500/20 transition-colors">
                  <FaEnvelope className="text-amber-400" />
                </div>
                <a
                  href="mailto:chairman@yaraproductions.uk"
                  className="text-gray-400 group-hover:text-amber-400 transition-colors"
                >
                  chairman@yaraproductions.uk
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} YARA Production. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
