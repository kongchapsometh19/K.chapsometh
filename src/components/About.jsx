import React from "react";
import { Code, Plane, Globe, Award } from "lucide-react";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-24 px-10 max-w-7xl mx-auto">
      <div className="mb-16" data-aos="fade-up">
        <h2
          className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${darkMode ? "text-orange-500" : "text-blue-600"}`}
        >
          01. Professional Profile
        </h2>
        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter">
          THE DUAL <br /> PERSPECTIVE.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 01: Bio */}
        <div
          data-aos="fade-up"
          className={`md:col-span-2 p-8 rounded-[40px] border transition-all duration-500 flex flex-col justify-between ${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-xl"}`}
        >
          <div className="space-y-6">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${darkMode ? "bg-orange-500/20 text-orange-500" : "bg-orange-100 text-orange-600"}`}
            >
              <Globe size={24} />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
              I bridge the gap between{" "}
              <span className="text-orange-500 font-bold">Complex Systems</span>{" "}
              and{" "}
              <span className="text-blue-500 font-bold">Aviation Safety</span>.
            </p>
          </div>
          <div className="mt-10 flex gap-4 text-center">
            <div>
              <div className="text-3xl font-black italic">2026</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">
                Graduation
              </div>
            </div>
            <div className="w-[1px] bg-gray-500/20 mx-4"></div>
            <div>
              <div className="text-3xl font-black italic">RUPP+NICA</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">
                Dual Degree
              </div>
            </div>
          </div>
        </div>

        {/* Card 02: Tech List */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className={`p-8 rounded-[40px] border transition-all duration-500 ${darkMode ? "bg-white/5 border-white/10" : "bg-blue-600 text-white shadow-xl"}`}
        >
          <Code className="mb-6" size={32} />
          <h4 className="text-xl font-black uppercase mb-4">Development</h4>
          <ul className="space-y-2 opacity-80 text-xs font-bold uppercase tracking-widest">
            <li>• Laravel Expert</li>
            <li>• React / Next.js</li>
            <li>• Vue.js System</li>
            <li>• MySQL / SSMS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
