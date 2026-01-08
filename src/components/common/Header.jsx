import React, { useEffect, useState } from "react";
import { HeaderConstants } from "../../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = HeaderConstants.map((item) =>
        document.querySelector(item.href)
      );

      // Find which section is currently in view
      const current = sections.find((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (accounting for header height)
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(`#${current.id}`);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto py-4 relative">
        <div className="flex items-center justify-between px-2">
        <div className="flex gap-6 2xl:gap-16 items-center">
            <a href="https://ai.iith.ac.in" target="_blank" rel="noopener noreferrer">
            <img
              src={process.env.PUBLIC_URL + "/images/ai-department-logo.jpeg"}
              alt="AI dept logo"
              className="w-12 lg:w-20 h-auto object-contain"
            />
            </a>
            <a href="https://iith.ac.in" target="_blank" rel="noopener noreferrer"> 
            <img
              src={process.env.PUBLIC_URL + "/images/iith-logo.jpeg"}
              alt="AI dept logo"
              className="w-44 lg:w-60 h-auto object-contain"
            />
            </a>
          </div>
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 xl:space-x-8 justify-center">
            {HeaderConstants?.map((header) => (
              <a
                href={header?.href}
                className={`text-base xl:text-lg transition-colors ${
                  activeSection === header?.href
                    ? "text-teal-700 font-bold"
                    : "text-gray-700 font-medium hover:text-teal-700"
                }`}
                key={header?.id}
              >
                {header?.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Hamburger Button - Hidden on desktop */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 px-4 space-y-2">
            {HeaderConstants?.map((header) => (
              <a
                href={header?.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  activeSection === header?.href
                    ? "bg-teal-100 text-teal-700 font-bold"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
                key={header?.id}
                onClick={() => setIsMenuOpen(false)}
              >
                {header?.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
