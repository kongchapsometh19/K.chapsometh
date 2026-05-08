import React from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      <div
        className={`rounded-[40px] md:rounded-[60px] p-8 md:p-20 overflow-hidden relative ${
          darkMode ? "bg-orange-500" : "bg-blue-600"
        } text-white shadow-2xl`}
      >
        {/* Decorative Circles - បន្ថយទំហំលើ Mobile */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div data-aos="fade-right" className="text-center lg:text-left">
            <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-6 md:mb-10">
              LET'S <br /> CONNECT.
            </h3>
            <p className="text-sm md:text-lg opacity-90 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Open for software development opportunities and aviation
              management consultancy.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 md:gap-5">
              {[
                <Github size={20} />,
                <Linkedin size={20} />,
                <Mail size={20} />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-4 md:p-5 bg-white/10 hover:bg-white text-white hover:text-black rounded-2xl md:rounded-[25px] transition-all duration-500 transform hover:-translate-y-2"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className={`p-6 md:p-10 rounded-[30px] md:rounded-[40px] ${
              darkMode ? "bg-black/20" : "bg-white/10"
            } backdrop-blur-xl border border-white/20 shadow-2xl`}
          >
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 placeholder:text-white/40 outline-none focus:bg-white/20 transition-all font-bold text-[10px] tracking-widest"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 placeholder:text-white/40 outline-none focus:bg-white/20 transition-all font-bold text-[10px] tracking-widest"
                />
              </div>
              <textarea
                placeholder="PROJECT DETAILS"
                rows="4"
                className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 placeholder:text-white/40 outline-none focus:bg-white/20 transition-all font-bold text-[10px] tracking-widest"
              ></textarea>
              <button className="w-full bg-white text-black font-black py-4 md:py-6 rounded-xl md:rounded-2xl uppercase tracking-[0.3em] text-[10px] hover:scale-[0.97] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3">
                Send Message <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 md:mt-20 text-center opacity-30 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] px-4">
        © 2026 KONG CHAPSOMETH • WEB DEVELOPER & AVIATION SPECIALIST
      </footer>
    </section>
  );
};

export default Contact;
