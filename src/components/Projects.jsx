import React from "react";
import { Github, ExternalLink, Briefcase } from "lucide-react";

const Projects = ({ darkMode }) => {
  const projectList = [
    {
      title: "Mini POS System",
      category: "Full-Stack Laravel",
      description: "Inventory tracking and sales management system.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000",
    },
    {
      title: "ATC Safety Analysis",
      category: "Aviation Safety",
      description: "Analysis of mid-air collision risks using SHEL model.",
      tags: ["ICAO", "Safety", "ATC"],
      img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000",
    },
  ];

  return (
    <section id="project" className="py-24 px-10 max-w-7xl mx-auto">
      <div className="mb-16" data-aos="fade-up">
        <h2
          className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${darkMode ? "text-orange-500" : "text-blue-600"}`}
        >
          04. Selected Works
        </h2>
        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter">
          PAST <br /> ECOSYSTEMS.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`group rounded-[40px] overflow-hidden border transition-all duration-500 ${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-xl"}`}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-50">
                {project.category}
              </span>
              <h4 className="text-2xl font-black italic uppercase mt-2">
                {project.title}
              </h4>
              <p className="text-sm opacity-70 mt-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] border px-3 py-1 rounded-full opacity-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// នេះគឺជាបន្ទាត់ដែលអ្នកកំពុងខ្វះ (បន្ទាត់ដ៏សំខាន់បំផុត)
export default Projects;
