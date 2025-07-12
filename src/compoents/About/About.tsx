import React from "react";
import { FaEnvelope, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
}

interface StatCardProps {
  value: string;
  label: string;
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, x: 10, transition: { type: "spring"  as const, stiffness: 300 } },
};

const Card: React.FC<CardProps> = ({ icon, title, children }) => (
  <motion.div
    className="mb-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
  >
    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
      {icon} {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </motion.div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company }) => (
  <motion.div
    className="relative pl-6 group cursor-pointer"
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, amount: 0.3 }}
    variants={timelineItemVariants}
  >
    <div className="absolute left-0 top-0 h-6 w-1 bg-white group-hover:h-11 group-hover:bg-blue-500 transition-all duration-300" />
    <div className="pl-4 border-l-2 border-white group-hover:border-blue-500 transition-all duration-300">
      <p className="text-sm text-gray-400">{date}</p>
      <p className="font-medium">{title}</p>
      <p className="text-sm">{company}</p>
    </div>
  </motion.div>
);

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <motion.div
    className="bg-gradient-to-r from-green-400 to-green-600 border-2 border-gray-400 p-4 rounded text-center cursor-default"
    whileHover={{
      scale: 1.1,
      boxShadow: "0 0 15px rgba(72, 187, 120, 0.8)",
      transition: { type: "spring", stiffness: 300 },
    }}
  >
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-sm text-gray-50">{label}</p>
  </motion.div>
);

const About: React.FC = () => {
  const experience = [
    { title: "Creative Director", company: "Logospectrum", date: "Aug 2023 — Present" },
    { title: "Senior Product Designer", company: "Carbon8 agency", date: "Jan 2021 — Jul 2023" },
    { title: "Design Lead", company: "Oceania Innovations", date: "Jan 2020 — Jan 2021" },
    { title: "Design Intern", company: "AUX Studio", date: "Aug 2019 — Jan 2020" },
  ];

  const education = [
    { title: "MDes, Creative Direction", company: "Logospectrum", date: "2022 – 2024" },
    { title: "BA (Hons) Innovation Design", company: "Arts Uni, UK", date: "2019 – 2022" },
    { title: "GCSE, Media", company: "Logospectrum", date: "2016 – 2018" },
  ];

  const stats = [
    { value: "12+", label: "Years of experience" },
    { value: "6", label: "Awards won" },
    { value: "30+", label: "Projects completed" },
    { value: "4K", label: "Happy clients" },
  ];

  return (
    <div
      id="about"
      className="bg-gradient-to-r from-black to-green-800 text-white min-h-screen px-6 py-10 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <p className="text-sm text-gray-400">About Me</p>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-white hover:underline"
              aria-label="Email me"
            >
              <FaEnvelope /> hello@example.com
            </a>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          A PRODUCT DESIGNER WITH A KNACK FOR TURNING PROBLEMS AND CHALLENGES INTO USER-DRIVEN STRATEGIC SOLUTIONS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 mb-10 max-w-3xl"
        >
          I specialize in combining user-centric research and strategy for digital products. I believe that a strategic design approach bridges the gap between user goals, operational needs, and business impact.
        </motion.p>

        {/* Experience and Education */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          <Card icon={<FaBriefcase className="text-blue-400" />} title="Experience">
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </Card>

          <Card icon={<FaGraduationCap className="text-blue-400" />} title="Education">
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </Card>
        </motion.div>

        {/* Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;