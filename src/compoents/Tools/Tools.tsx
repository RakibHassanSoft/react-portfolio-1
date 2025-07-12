import React from "react";
import { motion } from "framer-motion";
import {
  FaFigma,
  FaHtml5,
  FaWordpress,
  FaAngular,
  FaSlack,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiFramer,
  SiSketch,
  SiNotion,
  SiWebflow,
  SiNextdotjs,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiProtools,
} from "react-icons/si";

const tools = [
  { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
  {
    icon: <SiAdobeillustrator className="text-orange-500" />,
    name: "Adobe Illustrator",
  },
  { icon: <SiFramer className="text-blue-400" />, name: "Framer" },
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <SiSketch className="text-yellow-400" />, name: "Sketch" },
  { icon: <SiNotion className="text-gray-300" />, name: "Notion" },
  { icon: <SiWebflow className="text-blue-600" />, name: "Webflow" },
  { icon: <FaSlack className="text-pink-400" />, name: "Slack" },
  { icon: <FaWordpress className="text-blue-500" />, name: "WordPress" },
  { icon: <FaAngular className="text-red-600" />, name: "Angular" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  {
    icon: <SiAdobepremierepro className="text-indigo-600" />,
    name: "Adobe Premiere Pro",
  },
  {
    icon: <SiAdobeaftereffects className="text-purple-600" />,
    name: "After Effects",
  },
  { icon: <SiAdobeaudition className="text-blue-300" />, name: "Audition" },
  { icon: <SiProtools className="text-emerald-400" />, name: "Pro Tools" },
];

import type { Transition } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      type: "spring" as Transition["type"],
    },
  }),
};

const Tools: React.FC = () => {
  return (
    <section
      id="tools"
      className="bg-gradient-to-r from-black to-green-800 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-green-400 mb-2 tracking-widest">TOOLS</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
          Tools I Use to <br /> Design & Develop
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group bg- border border-green-700 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-default shadow-lg
        hover:border-white hover:shadow-[0_0_15px_4px_rgba(34,197,94,0.6)]
        transition duration-300"
            >
              <div
                className="text-5xl mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] 
        transition-all duration-300"
              >
                {tool.icon}
              </div>
              <p className="text-lg font-semibold tracking-wide text-white opacity-90">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
