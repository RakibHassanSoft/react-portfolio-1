import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Step {
  title: string;
  desc: string;
  tags: string[];
}

const steps: Step[] = [
  {
    title: "1. Discover",
    desc: "The goal is to define clear objectives and requirements for the product and gathering insights.",
    tags: [
      "STAKEHOLDER INTERVIEW",
      "PROBLEM FINDING",
      "MARKET RESEARCH",
      "PRODUCT POSITIONING",
      "UX RESEARCH",
    ],
  },
  {
    title: "2. Design",
    desc: "In this stage, ideas are translated into tangible concepts to align product with business goals.",
    tags: ["WIREFRAME", "VISUAL DESIGN", "USER TESTING", "VALIDATION"],
  },
  {
    title: "3. Deliver",
    desc: "The final phase involves collaborating with developers to build and launch the product.",
    tags: [
      "PROJECT HANDOVER",
      "DEVELOPER COLLABORATION",
      "LONG TIME SUPPORT",
    ],
  },
];

const ProductDesignProcess: React.FC = () => {
  return (
    <div id="process" className="bg-gradient-to-r from-black to-green-800 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-2">How I work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PRODUCT DESIGN PROCESS</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Structured series of steps that guide the development of a new product—from identifying a problem or opportunity, to delivering a final, market-ready solution.
          </p>
        </div>

        {/* Wave Line */}
        <svg
          className="w-full h-10 text-white mb-10"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 Q166.67,0 333.33,50 T666.67,50 T1000,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>

        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/3 px-2">
              <div className="flex justify-center mb-3">
                <div className="bg-black p-1 rounded-full">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-100 text-sm mb-4 text-center">{step.desc}</p>
              <ul className="flex flex-wrap gap-2 justify-center">
                {step.tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="bg-gradient-to-r from-green-700 to-green-950 border border-green-600 rounded-full px-3 py-1 text-xs sm:text-sm text-white font-medium shadow-md"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesignProcess;
