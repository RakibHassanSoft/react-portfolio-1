import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "../compoents/Navbar/Navbar";
import CustomCursor from "../compoents/CustomCursor/CustomCursor";

const MainLayout: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 to-purple-800 relative">
      <CustomCursor />
      <Navbar />
      <Outlet />

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6  w-fit right-6 sm:bottom-1 sm:right-2 bg-green-700 hover:bg-green-600 text-white p-2 sm:p-4 rounded-full shadow-lg z-50 transition duration-300 ease-in-out"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
