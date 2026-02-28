import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react"; // Added X
import React, { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skill", link: "#skill" },
    { name: "Project", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  const lightcolor = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textActive: "text-orange-600",
    secondary: "text-gray-700",
    indicator: "bg-orange-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkcolor = {
    navBg: "bg-gradient-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textActive: "text-orange-400",
    secondary: "text-gray-300",
    indicator: "bg-orange-400",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkcolor : lightcolor;

  const handleNavItemClick = (itemname) => {
    setActiveSection(itemname.toLowerCase());
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg w-11/12`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <span className={`text-xl font-bold ${colors.textPrimary}`}>
            CHAP-SOMETH<span className="text-orange-500">.</span>
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavItemClick(item.name)}
              className="relative"
            >
              <motion.span
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? colors.textActive
                    : `${colors.secondary} hover:text-orange-500`
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.span>

              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="navbar-indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${colors.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {isMenuOpen ? (
                <X
                  className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${
                darkMode ? "bg-gray-900/95" : "bg-white/95"
              } backdrop-blur-lg rounded-xl shadow-lg border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => handleNavItemClick(item.name)}
                      className="block"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                          isActive
                            ? "bg-orange-500 text-white"
                            : darkMode
                              ? "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                              : "text-gray-700 hover:bg-orange-50"
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
