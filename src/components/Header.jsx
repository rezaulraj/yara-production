import React, { useState, useEffect } from "react";
import logo from "/logo3.png?url";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navLinks = [
    {
      label: "About yara",
      path: "/about-yara",
    },
    {
      label: "Factory",
      path: "/factory",
    },
    {
      label: "Products",
      subNav: [
        {
          label: "T Shirt",
          path: "/tshirt",
        },
        {
          label: "Sweatshirt",
          path: "/sweatshirt",
        },
        {
          label: "Tracksuit",
          path: "/tracksuit",
        },
        {
          label: "Trousers",
          path: "/trousers",
        },
      ],
    },
    {
      label: "Our Fabric",
      path: "/fabric-production",
    },
    {
      label: "Quality",
      path: "/our-qualitys",
    },
    {
      label: "Sustainability",
      path: "/sustainability",
    },
    {
      label: "contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between md:justify-center space-x-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={logo}
                alt="Yara Logo"
                className={`h-12 transition-all duration-500 ${
                  scrolled ? "h-10" : "h-12"
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.subNav ? (
                  <>
                    <button
                      className={`flex items-center font-medium font-serif tracking-widest transition-colors ${
                        scrolled ? "text-[#CCB064]" : "text-white"
                      } hover:text-[#CCB064]`}
                      onClick={() => toggleSubMenu(index)}
                    >
                      {link.label}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openSubMenu === index && (
                      <div className="absolute font-serif left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {link.subNav.map((subLink, subIndex) => (
                          <a
                            key={subIndex}
                            href={subLink.path}
                            className="block px-4 py-2 text-gray-800 tracking-widest hover:bg-gray-100"
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.path}
                    className={`font-serif transition-colors text-sm tracking-widest uppercase ${
                      scrolled ? "text-gray-800" : "text-white"
                    } hover:text-[#CCB064]`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-gray-800" : "text-white"
              } focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              {navLinks.map((link, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  {link.subNav ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                        onClick={() => toggleSubMenu(index)}
                      >
                        {link.label}
                        <svg
                          className={`ml-2 h-4 w-4 transform transition-transform ${
                            openSubMenu === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSubMenu === index && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.subNav.map((subLink, subIndex) => (
                            <a
                              key={subIndex}
                              href={subLink.path}
                              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                            >
                              {subLink.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.path}
                      className="block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
