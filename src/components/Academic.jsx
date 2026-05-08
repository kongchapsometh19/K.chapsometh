import React from "react";
import { GraduationCap, BookOpen, MapPin } from "lucide-react";

const Academic = ({ darkMode }) => {
  const educations = [
    {
      university: "Royal University of Phnom Penh",
      degree: "Bachelor of Computer Science",
      period: "2022 - 2026",
      // ប្រើឈ្មោះ File តាមរូបភាពដែលអ្នកបានបង្ហោះ
      logo: "/logo-rupp-1-1024x1024.png",
      color: "from-blue-600/20 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      tag: "Faculty of Engineering",
    },
    {
      university: "National Institute of Civil Aviation",
      degree: "Bachelor of Civil Aviation Management",
      period: "2023 - 2026",
      // ប្រើឈ្មោះ File តាមរូបភាពដែលអ្នកបានបង្ហោះ (ប្រយ័ត្នអក្សរតូចធំ Nica.jpg)
      logo: "/Nica.jpg",
      color: "from-orange-600/20 to-yellow-500/10",
      borderColor: "border-orange-500/20",
      tag: "Aviation Management",
    },
  ];

  return (
    <section id="academic" className="py-24 px-10 max-w-7xl mx-auto">
      {/* Header ផ្នែក Academic */}
      <div className="mb-16" data-aos="fade-up">
        <h2
          className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${darkMode ? "text-orange-500" : "text-blue-600"}`}
        >
          02. Educational Journey
        </h2>
        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
          Academic <br /> Ecosystem.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {educations.map((edu, index) => (
          <div
            key={index}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
            className={`group relative p-1 rounded-[45px] transition-all duration-700 hover:scale-[1.02] ${darkMode ? "bg-white/5" : "bg-gray-100 shadow-2xl shadow-gray-200/50"}`}
          >
            {/* Inner Content Card */}
            <div
              className={`relative h-full p-8 md:p-10 rounded-[40px] border ${edu.borderColor} overflow-hidden ${darkMode ? "bg-[#0a0f1a]" : "bg-white"}`}
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-20 bg-gradient-to-br ${edu.color}`}
              />

              <div className="relative z-10 flex flex-col gap-8">
                {/* Logo & Badge Section */}
                <div className="flex justify-between items-start">
                  <div
                    className={`w-24 h-24 rounded-3xl overflow-hidden p-2 flex items-center justify-center border ${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-lg"}`}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.university}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${index === 0 ? "text-blue-500 border-blue-500/30" : "text-orange-500 border-orange-500/30"}`}
                    >
                      {edu.tag}
                    </span>
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Degree Info */}
                <div className="space-y-4">
                  <h4 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 opacity-60">
                    <MapPin
                      size={14}
                      className={
                        index === 0 ? "text-blue-500" : "text-orange-500"
                      }
                    />
                    <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                      {edu.university}
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${index === 0 ? "bg-blue-400" : "bg-orange-400"}`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-3 w-3 ${index === 0 ? "bg-blue-500" : "bg-orange-500"}`}
                      ></span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      Active Student
                    </span>
                  </div>
                  <GraduationCap className="opacity-20" size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;
