import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linke.png"; // make sure file name matches exactly

const socialIcons = [
  { icon: instagram, alt: "Instagram" },
  { icon: facebook, alt: "Facebook" },
  { icon: twitter, alt: "Twitter" },
  { icon: linkedin, alt: "LinkedIn" },
];

const darkTheme = {
  textPrimary: "text-white",
  textSecondary: "text-gray-300",
  buttonSecondary: "text-white border-2 border-orange-500 hover:bg-orange-600",
};

const lightTheme = {
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  buttonSecondary:
    "text-orange-500 border-2 border-orange-500 hover:bg-orange-50",
};

// Add this in your index.css or global CSS
/*
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
.float {
  animation: float 4s ease-in-out infinite;
}
*/

const Hero = ({ darkMode }) => {
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section
      className={`min-h-screen flex items-center px-6 ${theme.textPrimary}`}
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-orange-500">Someth</span>
          </h1>

          <p className={`mt-4 text-lg ${theme.textSecondary}`}>
            Frontend Developer building modern and responsive websites.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Hire Me
            </button>

            <button
              className={`px-6 py-2 rounded-full transition ${theme.buttonSecondary}`}
            >
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            {socialIcons.map((item, index) => (
              <img
                key={index}
                src={item.icon}
                alt={item.alt}
                className="w-8 h-8 cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — Modern Rectangle Image */}
        <div className="flex justify-center">
          <img
            src="/portfolio.jpg" // must be inside public folder
            alt="Portfolio"
            className="w-80 h-96 object-cover rounded-2xl shadow-xl float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
