import React from "react";
// ត្រូវប្រាកដថាមានការ Import "Code" និង Icons ផ្សេងៗនៅទីនេះ
import { Code, Terminal, ShieldCheck, Database, Zap } from "lucide-react";

const Skills = ({ darkMode }) => {
  const mainTech = [
    { name: "Laravel", level: 92, color: "bg-orange-500" },
    { name: "React/Next.js", level: 88, color: "bg-blue-500" },
    { name: "MySQL/SSMS", level: 90, color: "bg-cyan-500" },
  ];

  return (
    <section id="skill" className="py-24 px-10 max-w-7xl mx-auto">
      <div className="mb-16" data-aos="fade-up">
        <h2
          className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${darkMode ? "text-orange-500" : "text-blue-600"}`}
        >
          03. Technical Capabilities
        </h2>
        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter">
          SYSTEM <br /> ARCHITECTURE.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* បង្ហាញ Tech Stack */}
        <div
          data-aos="fade-right"
          className={`md:col-span-2 p-8 rounded-[40px] border ${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-xl"}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <Terminal size={24} className="text-blue-500" />
            <h4 className="text-2xl font-black italic uppercase">Dev Stack</h4>
          </div>
          <div className="space-y-6">
            {mainTech.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-1 w-full bg-gray-500/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color}`}
                    style={{ width: `${s.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* បង្ហាញ Aviation Safety (កន្លែងដែលប្រហែលជាមានប្រើ Code icon) */}
        <div
          data-aos="fade-left"
          className={`p-8 rounded-[40px] ${darkMode ? "bg-orange-500" : "bg-gray-900"} text-white shadow-xl`}
        >
          <ShieldCheck size={32} className="mb-4" />
          <h4 className="text-xl font-black italic uppercase">
            Aviation Safety
          </h4>
          <p className="text-xs opacity-80 mt-4 leading-relaxed uppercase tracking-widest">
            Specializing in SHEL human factors and ICAO regulatory standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
