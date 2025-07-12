import React from "react";
import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

// Typed variants with custom param for index-based delay
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: custom * 0.15, duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  }),
  hover: {
    scale: 1.07,
    boxShadow: "0 0 20px 4px rgba(20, 255, 140, 0.6)",
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const iconVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  tags,
  index,
}) => (
  <motion.div
    className="relative bg-gradient-to-br from-[#0e1f13] to-[#002f22] border border-green-600 p-7 rounded-2xl cursor-pointer"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    whileHover="hover"
    style={{ zIndex: 0 }}
  >
    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-20 bg-gradient-to-r from-green-400 to-green-600 blur-lg" />

    <div className="relative flex justify-between items-center mb-6 z-10">
      <motion.div
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        className="text-5xl text-green-400"
      >
        {icon}
      </motion.div>
      <h3 className="text-white text-2xl font-bold max-w-[70%]">{title}</h3>
      <BsArrowUpRight className="text-green-400 text-xl" />
    </div>

    <p className="text-gray-100 mb-6 text-sm leading-relaxed z-10 relative">
      {description}
    </p>

    <div className="flex flex-wrap gap-2 z-10 relative">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-gradient-to-r from-green-700 to-green-900 border border-green-600 text-green-100 text-xs font-semibold px-3 py-1 rounded-full select-none"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description:
        "Building scalable, robust, and maintainable web applications using React, Node.js, Express, and MongoDB.",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      icon: <FaDatabase />,
      title: "Database Design & Management",
      description:
        "Designing efficient database schemas, optimizing queries, and ensuring data integrity with SQL and NoSQL databases.",
      tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Data Modeling"],
    },
    {
      icon: <FaServer />,
      title: "Backend & API Development",
      description:
        "Creating secure, performant backend services and RESTful APIs with Express, GraphQL, and serverless architectures.",
      tags: ["Express", "GraphQL", "Serverless", "Authentication", "OAuth"],
    },
    {
      icon: <FaTools />,
      title: "DevOps & CI/CD",
      description:
        "Automating deployments, monitoring, and infrastructure management with Docker, Kubernetes, and GitHub Actions.",
      tags: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Terraform"],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile apps with React Native ensuring smooth user experiences on iOS and Android.",
      tags: ["React Native", "Expo", "Push Notifications", "App Store Deployment"],
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions & Architecture",
      description:
        "Designing scalable cloud infrastructure and serverless solutions on AWS, Azure, and Google Cloud platforms.",
      tags: ["AWS Lambda", "Azure Functions", "CloudFormation", "S3", "CDN"],
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-r from-black to-green-900 text-white py-20 px-6"
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-green-700 opacity-20 filter blur-3xl mix-blend-lighten pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-green-500 opacity-30 filter blur-2xl mix-blend-lighten pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-sm text-green-400 uppercase mb-2 tracking-wider"
        >
          What I do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-4xl font-extrabold mb-14 leading-tight"
        >
          DIGITAL PRODUCT DESIGN <br /> SERVICES I OFFER
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
