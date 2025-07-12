import React, { useState } from "react";

import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiC,
  SiCplusplus,
  SiMysql,
  SiDjango,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaCogs,
} from "react-icons/fa";

import { motion } from "framer-motion";
import WorksSection from "./WorksSection";

// -------------------- DATA --------------------

const tabs = ["Works", "Technology", "Pricing"];

const worksData = [1, 2, 3].map((id) => ({
  id,
  title: `Sample Work ${id}`,
  subtitle: "Branding",
  image: `https://static-wix-blog.wix.com/blog/wp-content/uploads/2015/08/07103034/long-scrolling-websites-4.png`,
}));

const categorizedTechnologies = {
  frontend: [
    { name: "React.js", icon: <FaReact size={36} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={36} color="#FFFFFF" /> },

    { name: "TypeScript", icon: <SiTypescript size={36} color="#3178C6" /> },
    { name: "Redux Toolkit", icon: <SiRedux size={36} color="#764ABC" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={36} color="#38B2AC" /> },
    { name: "HTML5", icon: <FaHtml5 size={36} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={36} color="#1572B6" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs size={36} color="#339933" /> },
    { name: "Express.js", icon: <SiExpress size={36} color="#FFFFFF" /> },
    { name: "Django", icon: <SiDjango size={36} color="#092E20" /> },
  ],
  languages: [
    {
      name: "JavaScript / TypeScript",
      icon: <SiTypescript size={36} color="#F7DF1E" />,
    },
    { name: "Python", icon: <FaPython size={36} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={36} color="#ea4c1d" /> },

    { name: "C", icon: <SiC size={36} color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus size={36} color="#00599C" /> },
  ],
  databases: [
    { name: "MongoDB", icon: <SiMongodb size={36} color="#47A248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={36} color="#336791" /> },
    { name: "MySQL", icon: <SiMysql size={36} color="#4479A1" /> },
    { name: "General DB", icon: <FaDatabase size={36} color="#444444" /> },
  ],
  devtools: [
    { name: "Git", icon: <FaGitAlt size={36} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={36} color="#181717" /> },
    { name: "Docker", icon: <SiDocker size={36} color="#2496ED" /> },
    { name: "Figma", icon: <FaFigma size={36} color="#F24E1E" /> },
  ],
  concepts: [{ name: "OOP", icon: <FaCogs size={36} color="#6B7280" /> }],
};

const pricingPlans = [
  {
    title: "Starter",
    price: "$299",
    features: [
      "1 Landing Page",
      "Contact Form",
      "Responsive Design",
      "3 Days Delivery",
      "Basic Deployment",
    ],
  },
  {
    title: "Standard",
    price: "$799",
    features: [
      "3-5 Pages",
      "REST API Integration",
      "Admin Dashboard",
      "7 Days Delivery",
      "SEO Optimized",
    ],
  },
  {
    title: "Professional",
    price: "$1499",
    features: [
      "Full-Stack MERN App",
      "Authentication + Authorization",
      "MongoDB Integration",
      "Admin Panel",
      "14 Days Delivery",
    ],
  },
  {
    title: "Enterprise",
    price: "Starting at $2999",
    features: [
      "Custom SaaS Application",
      "Scalable Backend (Node.js)",
      "CI/CD Deployment",
      "Monitoring + Logging",
      "Lifetime Support",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeInOut" as const } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(72, 187, 120, 0.5)" },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, backgroundColor: "#34d399", color: "#000000", transition: { duration: 0.3 } },
};
// -------------------- COMPONENT --------------------

const SkillsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Works");

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-black to-green-800 text-white py-20 px-6 flex justify-center items-center flex-wrap"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center">
          Skills & Services
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white text-black border-white font-bold"
                  : "border-white text-white hover:bg-green-600 hover:text-black font-semibold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Works */}
        {activeTab === "Works" && <WorksSection worksData={worksData} />}

        {/* Technology */}
        {activeTab === "Technology" && (
          <div className="space-y-12 bg-green-500 p-12 rounded-xl">
            {Object.entries(categorizedTechnologies).map(
              ([category, techList]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold capitalize mb-4 text-center">
                    {category}
                  </h3>
                  <div className="flex  flex-wrap justify-center gap-6">
                    {techList.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-950 border border-green-600 text-white rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                      >
                        <div className="mb-2">{tech.icon}</div>
                        <span className="text-sm text-center">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Pricing */}
        {activeTab === "Pricing" && (
  <motion.div
    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-10"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {pricingPlans.map((plan, idx) => (
      <motion.div
        key={idx}
        className="bg-gradient-to-br from-green-700 to-black text-white p-6 rounded-2xl border border-green-500 flex flex-col items-center justify-between shadow-lg h-full cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <h3 className="text-2xl font-bold">{plan.title}</h3>
        <p className="text-3xl font-extrabold my-4 text-green-200">{plan.price}</p>
        <ul className="text-sm text-gray-300 mb-6 space-y-2 text-left w-full px-4">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-green-400">✓</span> {f}
            </li>
          ))}
        </ul>
        <motion.button
          className="bg-white text-black px-5 py-2 rounded-full shadow-md"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300 }}
        >
          Choose Plan
        </motion.button>
      </motion.div>
    ))}
  </motion.div>
)}
      </div>
    </section>
  );
};

export default SkillsTabs;
