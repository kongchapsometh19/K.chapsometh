import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Plane, GraduationCap } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // បន្ថែម Aviation ចូលក្នុងបញ្ជីនេះ ដោយមិនប៉ះពាល់កូដផ្សេងទៀត
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Academic", link: "#academic" },
    { name: "Skills", link: "#skill" },
    { name: "Projects", link: "#project" },
    { name: "Aviation", link: "#aviation" }, // បានបន្ថែមរួចរាល់
    { name: "Contact", link: "#contact" },
  ];

  const lightTheme = {
    navBg: "bg-white/70 border-white/40",
    textPrimary: "text-slate-900",
    textActive: "text-orange-600",
    secondary: "text-slate-500",
    indicator: "bg-orange-500",
  };

  const darkTheme = {
    navBg: "bg-slate-900/80 border-slate-700/50",
    textPrimary: "text-white",
    textActive: "text-orange-400",
    secondary: "text-slate-400",
    indicator: "bg-orange-400",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-6xl flex items-center justify-between ${theme.navBg} backdrop-blur-xl border rounded-2xl px-6 py-3 shadow-2xl shadow-black/5`}
      >
        {/* Logo Section - បង្ហាញអត្តសញ្ញាណ Dual Degree */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 ${darkMode ? "bg-orange-500 border-slate-900" : "bg-blue-600 border-white text-white"}`}
            >
              <GraduationCap size={16} />
            </div>
          </div>
          <span
            className={`text-lg font-black tracking-tighter hidden sm:block ${theme.textPrimary}`}
          >
            KONG <span className="text-orange-500">CH.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setActiveSection(item.name.toLowerCase())}
              className="relative py-1 group"
            >
              <span
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? theme.textActive
                    : `${theme.secondary} group-hover:text-orange-500`
                }`}
              >
                {item.name}
              </span>

              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="nav-underline"
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${theme.indicator}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Tools: Dark Mode & Identity */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl border transition-all duration-500 ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="hidden md:flex items-center gap-2 border-l pl-4 border-gray-200/50">
            <div
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${darkMode ? "bg-white/5 text-orange-400" : "bg-black/5 text-blue-600"}`}
            >
              RUPP • NICA
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-full left-0 right-0 mt-4 p-4 lg:hidden ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-gray-200"
              } border rounded-2xl shadow-2xl`}
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => {
                      setActiveSection(item.name.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`py-4 px-4 rounded-xl text-center text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeSection === item.name.toLowerCase()
                        ? "bg-orange-500 text-white"
                        : `${darkMode ? "bg-white/5 text-slate-400" : "bg-slate-50 text-slate-600"}`
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
