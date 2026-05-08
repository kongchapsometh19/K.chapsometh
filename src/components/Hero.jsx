import React from "react";
import Navbar from "./Navbar";

const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      className={`min-h-screen transition-all duration-700 ease-in-out relative overflow-hidden font-sans w-full
      ${darkMode ? "bg-[#0a0f1a] text-white" : "bg-[#f8fafd] text-[#0f172a]"}`}
    >
      {/* 1. INTEGRATED NAVBAR */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* 2. MAIN HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-48 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 pb-32">
        {/* Left Side: Name & Animated Title */}
        <div
          className="flex-1 space-y-6 z-10 text-center md:text-left order-2 md:order-1"
          data-aos="fade-right"
        >
          <div className="space-y-2">
            <h1 className="text-[14vw] md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] mb-4">
              KONG <br />
              <span className="animate-run-color inline-block not-italic">
                CHAPSOMETH.
              </span>
            </h1>
          </div>

          <div className="pt-4 md:pt-10">
            <p
              className={`text-sm md:text-xl font-medium max-w-xl leading-relaxed mx-auto md:mx-0 opacity-80 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Bachelor-Degree Student
              <span className="text-orange-500 px-2 font-bold">|</span>
              Web Developer
              <span className="text-orange-500 px-2 font-bold">|</span>
              Civil Aviation
            </p>
          </div>
        </div>

        {/* Right Side: Image with refined glow */}
        <div
          className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2 w-full"
          data-aos="fade-left"
        >
          {/* Box Container - កែសម្រួលទំហំឱ្យសមស្របតាម Mobile */}
          <div className="w-64 h-80 md:w-full md:max-w-[420px] md:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl relative group border-4 border-white/10 z-10">
            <img
              src="/portfolio.jpg"
              alt="Kong Chapsometh"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
            />
            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                darkMode
                  ? "from-black/60 via-transparent"
                  : "from-black/20 via-transparent"
              }`}
            ></div>
          </div>

          {/* Glowing Background - ប្តូរពណ៌តាម Theme */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px] md:blur-[100px] transition-all duration-1000 opacity-40
            ${darkMode ? "bg-orange-600/20" : "bg-blue-400/20"}`}
          ></div>
        </div>
      </main>

      {/* 3. BOTTOM STATUS BAR - រចនាឱ្យកាន់តែស្អាត និង Responsive */}
      <footer
        className={`fixed bottom-4 left-4 right-4 md:bottom-6 md:left-10 md:right-10 flex flex-wrap items-center justify-between backdrop-blur-md border p-2.5 md:p-3 rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 z-50
        ${darkMode ? "bg-white/5 border-white/10 text-gray-400 shadow-black/20" : "bg-white/60 border-gray-200 text-gray-500 shadow-gray-200/50"} shadow-xl`}
      >
        <div className="flex items-center gap-3 md:gap-8">
          <div
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all ${
              darkMode
                ? "bg-green-500/10 text-green-400 border-green-500/20"
                : "bg-green-50 text-green-600 border-green-200"
            }`}
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="hidden xs:inline">System</span> Online
          </div>
          <div className="hidden sm:block opacity-60 font-medium">
            Uptime: 92h 14m
          </div>
          <div className="hidden lg:block opacity-60 font-medium">
            Location: Phnom Penh, KH
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-orange-500 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl flex items-center gap-2 hover:bg-orange-600 hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-orange-500/20">
            <span className="text-[10px]">✦</span>
            <span className="text-[9px] md:text-[10px]">Premium Portfolio</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
