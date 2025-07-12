import React from "react";
import { motion, useAnimation } from "framer-motion";

interface WorkItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface WorksSectionProps {
  worksData: WorkItem[];
}

const WorksSection: React.FC<WorksSectionProps> = ({ worksData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
      {worksData.map((item) => (
        <HoverScrollCard key={item.id} item={item} />
      ))}
    </div>
  );
};

interface HoverScrollCardProps {
  item: WorkItem;
}

const HoverScrollCard: React.FC<HoverScrollCardProps> = ({ item }) => {
  const controls = useAnimation();
  const containerHeight = 300;
  const imageHeight = 600;
  const scrollDistance = -(imageHeight - containerHeight);

  const startScroll = () => {
    controls.start({
      y: [0, scrollDistance],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    });
  };

  const stopScroll = () => {
    controls.start({
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-green-800 to-gray-800 rounded-xl shadow-lg cursor-pointer max-w-[320px] overflow-hidden"
      onMouseEnter={startScroll}
      onMouseLeave={stopScroll}
      style={{ width: "100%" }}
    >
      <div
        style={{
          height: containerHeight,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          animate={controls}
          initial={{ y: 0 }}
          className="w-full object-cover"
          style={{ height: imageHeight, position: "relative" }}
        />
      </div>

      <div className="p-4 bg-black bg-opacity-70 text-white">
        <p className="text-xs text-gray-300">{item.subtitle}</p>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <button className="mt-4 text-sm bg-black bg-opacity-90 text-white px-3 py-1 rounded-full hover:bg-green-700">
          View Case
        </button>
      </div>
    </motion.div>
  );
};

export default WorksSection;
