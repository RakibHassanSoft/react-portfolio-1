import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
