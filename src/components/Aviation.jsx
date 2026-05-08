import React from "react";
import { Plane, ShieldAlert, Wind, Zap } from "lucide-react";

const Aviation = ({ darkMode }) => {
  const safetyFocus = [
    {
      title: "ATC Management",
      desc: "Air Traffic Control operations and safety protocols focused on Sector C.",
      icon: <Zap size={24} />,
    },
    {
      title: "SHEL Model",
      desc: "Human factors analysis applied to aviation safety management systems.",
      icon: <ShieldAlert size={24} />,
    },
    {
      title: "ICAO Standards",
      desc: "Commitment to Green Aviation and carbon-neutral goals (CORSIA).",
      icon: <Wind size={24} />,
    },
  ];

  return (
    <section
      id="aviation"
      className="py-20 md:py-24 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Header Section */}
      <div className="mb-12 md:mb-16" data-aos="fade-up">
        <h2
          className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 ${
            darkMode ? "text-orange-500" : "text-blue-600"
          }`}
        >
          05. Aviation Expertise
        </h2>
        <h3 className="text-[40px] md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
          Sky <br /> Governance.
        </h3>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {safetyFocus.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`group p-8 md:p-10 rounded-[35px] md:rounded-[45px] border transition-all duration-500 hover:scale-[1.02] lg:hover:scale-[1.05] ${
              darkMode
                ? "bg-white/5 border-white/10 hover:bg-orange-500/10 hover:border-orange-500/30"
                : "bg-white border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-500/30"
            }`}
          >
            {/* Icon Box */}
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:rotate-12 ${
                darkMode
                  ? "bg-orange-500/20 text-orange-500"
                  : "bg-blue-600/10 text-blue-600"
              }`}
            >
              {item.icon}
            </div>

            {/* Content */}
            <h4 className="text-lg md:text-xl font-black uppercase italic mb-3 md:mb-4 tracking-tight">
              {item.title}
            </h4>
            <p className="text-xs md:text-sm opacity-70 md:opacity-60 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aviation;
