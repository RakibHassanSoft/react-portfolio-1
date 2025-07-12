import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Thomas Lutz",
    title: "Senior Product Developer @ IBM",
    quote:
      "Extremely professional, unique and enjoyable. The effort taken to ensure our requirements were met delivered the optimum outcome.",
    image: "https://placekitten.com/200/200",
  },
  {
    name: "Andrea De Sontis",
    title: "CEO @ Agresar Soft Inc",
    quote:
      "The team went above and beyond to deliver a professional and enjoyable experience. Their attention to detail was unmatched.",
    image: "https://placekitten.com/201/201",
  },
  {
    name: "Mark Robinson",
    title: "Project Manager @ Acme Works",
    quote:
      "Great communication, strong skills, and an excellent attitude. The result was better than expected.",
    image: "https://placekitten.com/202/202",
  },
  {
    name: "Mark Hassan",
    title: "Project Manager @ Acme Works",
    quote:
      "Great communication, strong skills, and an excellent attitude. The result was better than expected.",
    image: "https://placekitten.com/203/203",
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (isCenter: boolean) => ({
    opacity: 1,
    scale: isCenter ? 1 : 0.85,
    transition: { duration: 0.5 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px 4px rgba(20, 255, 140, 0.6)",
    transition: { duration: 0.3 },
  },
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // example breakpoint at 768px (md)
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Indices for left, center, right cards
  const leftIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (currentIndex + 1) % testimonials.length;

  return (
    <div
      id="testimonials"
      className="bg-gradient-to-r from-black to-green-800 text-white py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto text-center relative">
        <p className="text-sm text-gray-300 mb-2">Testimonials</p>
        <h2 className="text-4xl font-bold mb-12">WHAT CLIENTS SAY</h2>

        <div className="flex items-center justify-center gap-8 relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-900 hover:bg-green-600 p-3 rounded-full text-white z-20"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </button>

          {/* Testimonial cards */}
          {isSmallScreen ? (
            // On small screens: show only the center testimonial
            (() => {
              const testimonial = testimonials[currentIndex];
              const isCenter = true;
              return (
                <motion.div
                  key={currentIndex}
                  className={`rounded-xl p-6 shadow-lg cursor-default select-text max-w-xs flex flex-col items-center bg-green-600 text-center`}
                  custom={isCenter}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <p className="italic mb-6 font-semibold leading-relaxed text-black text-lg">
                    “{testimonial.quote}”
                  </p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full border-2 object-cover w-20 h-20 border-green-400"
                  />
                  <p className="mt-4 font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-200">{testimonial.title}</p>
                </motion.div>
              );
            })()
          ) : (
            // On larger screens: show left, center, right cards
            [leftIndex, currentIndex, rightIndex].map((idx, pos) => {
              const testimonial = testimonials[idx];
              const isCenter = pos === 1;

              return (
                <motion.div
                  key={idx}
                  className={`rounded-xl p-6 shadow-lg cursor-default select-text max-w-xs flex flex-col items-center bg-green-600 text-center`}
                  custom={isCenter}
                  initial="hidden"
                  animate="visible"
                  whileHover={isCenter ? "hover" : undefined}
                  variants={cardVariants}
                >
                  <p
                    className={`italic mb-6 font-semibold leading-relaxed ${
                      isCenter ? "text-black text-lg" : "text-gray-300 text-sm"
                    }`}
                  >
                    “{testimonial.quote}”
                  </p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`rounded-full border-2 object-cover ${
                      isCenter
                        ? "w-20 h-20 border-green-400"
                        : "w-14 h-14 border-green-700 opacity-70"
                    }`}
                  />
                  <p className={`mt-4 font-semibold ${isCenter ? "text-white" : "text-green-300"}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs ${isCenter ? "text-gray-200" : "text-green-400"}`}>
                    {testimonial.title}
                  </p>
                </motion.div>
              );
            })
          )}

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-900 hover:bg-green-600 p-3 rounded-full text-white z-20"
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
