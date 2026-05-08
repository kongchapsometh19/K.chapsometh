import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academic from "./components/Academic";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aviation from "./components/Aviation";
import Contact from "./components/Contact";

// Import AOS សម្រាប់ Animation ពេល Scroll
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // កំណត់ Dark Mode ជា Default
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // ចាប់ផ្តើមដំណើរការ AOS ជាមួយ Settings ដែល Smooth សម្រាប់ Mobile
    AOS.init({
      duration: 800, // ល្បឿនល្មម បង្កើនភាពរលូន
      once: true, // ដើរតែម្តងបានហើយ ដើម្បីកុំឱ្យទាក់ពេល Scroll ឡើងលើវិញ
      offset: 50, // បង្ហាញខ្លួនលឿនជាងមុនបន្តិច
      easing: "ease-out",
      delay: 50,
    });

    // ប្តូរ Class "dark" សម្រាប់ Tailwind CSS
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Function សម្រាប់ប្តូរ Theme
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`transition-colors duration-700 ease-in-out min-h-screen relative w-full overflow-x-hidden
      ${darkMode ? "bg-[#0a0f1a] text-white" : "bg-[#f8fafd] text-[#0f172a]"}`}
    >
      {/* ១. Navbar: គ្រប់គ្រង Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* ២. តំបន់បង្ហាញ Content (Main Framework) */}
      <main className="relative z-10 w-full">
        {/* Section 00: Home / Hero */}
        <section id="home" className="min-h-screen flex items-center">
          <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </section>

        {/* Section 01: About Me */}
        <section id="about" className="relative z-10 py-10 md:py-20">
          <About darkMode={darkMode} />
        </section>

        {/* Section 02: Academic */}
        <section id="academic" className="relative z-10 py-10 md:py-20">
          <Academic darkMode={darkMode} />
        </section>

        {/* Section 03: Technical Skills */}
        <section id="skill" className="relative z-10 py-10 md:py-20">
          <Skills darkMode={darkMode} />
        </section>

        {/* Section 04: Projects */}
        <section id="project" className="relative z-10 py-10 md:py-20">
          <Projects darkMode={darkMode} />
        </section>

        {/* Section 05: Aviation Expertise */}
        <section id="aviation" className="relative z-10 py-10 md:py-20">
          <Aviation darkMode={darkMode} />
        </section>

        {/* Section 06: Contact */}
        <section id="contact" className="relative z-10 py-10 md:py-20">
          <Contact darkMode={darkMode} />
        </section>
      </main>

      {/* ៣. Decorative Elements: ពន្លឺ Glow (លាក់នៅលើ Mobile តូចៗដើម្បីឱ្យដើរ Smooth) */}
      <div className="fixed inset-0 pointer-events-none -z-0 overflow-hidden hidden sm:block">
        <div
          className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-30 transition-all duration-1000
          ${darkMode ? "bg-orange-500/20" : "bg-blue-500/10"}`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-30 transition-all duration-1000
          ${darkMode ? "bg-blue-500/20" : "bg-orange-500/10"}`}
        />
      </div>
    </div>
  );
};

export default App;
