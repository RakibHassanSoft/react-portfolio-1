import React from "react";
import Lottie from "lottie-react";
import sampleAnimation from "../../../public/lotti.json"; // your Lottie JSON

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="pt-0 md:pt-20 lg:pt-24 min-h-screen bg-gradient-to-r from-black to-green-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 relative overflow-hidden"
    >
      {/* Left side text content */}
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left z-10">
        <p className="text-sm sm:text-base text-green-400 font-semibold mb-3">
          * Your Vision, My Design Expertise
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
          <span className="text-gray-300">I’m Rakib,</span> <br />
          Full stack <br />
          web developer
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-lg mb-10 leading-relaxed mx-auto md:mx-0">
          I specialize in crafting stunning, user-friendly websites that not only look great but also perform flawlessly. With over 4 years of experience, I bring a wealth of knowledge in both front-end and back-end development to every project.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          <button className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-6 py-3 rounded-full shadow-lg">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition px-6 py-3 rounded-full flex items-center gap-2 font-semibold">
            <span>Watch Intro</span>
            <span className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center animate-pulse">
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </span>
          </button>
        </div>

        
      </div>

      {/* Right side Lottie */}
      <div className="w-full md:w-1/2 max-w-lg mt-12 md:mt-0">
        <Lottie
          animationData={sampleAnimation}
          loop={true}
          style={{ width: "100%", height: "auto", maxHeight: "600px" }}
        />
        {/* Floating info cards for larger screens */}
        <div className="hidden md:flex gap-6 mt-0 justify-center">
          <div className="bg-black bg-opacity-10 p-4 rounded-lg flex items-center gap-4 shadow-lg animate-slide-loop">
            <div className="w-10 h-10 rounded-full bg-green-400" />
            <div>
              <p className="text-white font-semibold">Real Customers</p>
              <p className="text-green-300 text-sm">+7 Reviews</p>
            </div>
          </div>
          <div className="bg-black bg-opacity-10 p-4 rounded-lg shadow-lg animate-slide-loop">
            <p className="text-2xl font-bold text-white">4+ Years</p>
            <p className="text-green-300 text-sm">Experience</p>
          </div>
        </div>
      </div>

      {/* Background overlays */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-800 to-transparent opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-l from-green-400 to-transparent rounded-tl-full opacity-30 pointer-events-none" />
    </section>
  );
};

// Custom animation
const styles = `
  @keyframes slideLoop {
    0% { transform: translateX(0) translateY(0); }
    33% { transform: translateX(-10px) translateY(-5px); }
    66% { transform: translateX(-10px) translateY(-5px); }
    100% { transform: translateX(0) translateY(0); }
  }
  .animate-slide-loop {
    animation: slideLoop 6s infinite ease-in-out;
  }
`;

if (typeof window !== "undefined") {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(styles);
  document.adoptedStyleSheets = [styleSheet];
}

export default Hero;
