// Navbar.tsx
import { useState } from "react";
import "./index.css";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navbarItems } from "./navbarData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  type NavbarItem = {
    label: string;
    href: string;
    subMenu?: { label: string; href: string }[];
  };

  const renderNavLink = (item: NavbarItem) => {
    if (item.href.startsWith("/#")) {
      return (
        <HashLink smooth to={item.href} className="hover:text-gray-600 font-semibold">
          {item.label}
        </HashLink>
      );
    }
    return (
      <Link to={item.href} className="hover:text-gray-600 font-semibold">
        {item.label}
      </Link>
    );
  };

  return (
<nav className="fixed z-20 bg-green-950 border-b-1 border-b-green-200 border-1 text-white w-full shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-white">🅜</span>
          <span>MELLOW</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navbarItems.map((item) => (
            <li key={item.label} className="relative group">
              {renderNavLink(item)}
              {item.subMenu && (
                <ul className="absolute left-0 mt-2 bg-black-700 border border-gray-700 shadow-lg rounded-md hidden group-hover:block z-10">
                  {item.subMenu.map((sub) => (
                    <li key={sub.label} className="relative inline-block px-4 py-2 text-white z-10 overflow-hidden font-semibold">
                      {sub.href.startsWith("/#") ? (
                        <HashLink smooth to={sub.href} 
                        >
                          {sub.label}
                        </HashLink>
                      ) : (
                        <Link to={sub.href} 
                        >
                          {sub.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <button className="hover:bg-white hover:text-black px-5 py-2 rounded-full font-semibold bg-black text-white transition-all">
              BOOK A CALL
            </button>
          </li>
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-green-950 px-6 pb-6 space-y-4">
          {navbarItems.map((item) => (
            <li key={item.label}
            
            >
              {item.href.startsWith("/#") ? (
                <HashLink
                  smooth
                  to={item.href}
                  className="block py-2 w-full"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {item.label}
                </HashLink>
              ) : (
                <Link
                  to={item.href}
                  className="block py-2 w-full"
                  onClick={() => item.subMenu && toggleDropdown(item.label)}
                >
                  {item.label}
                </Link>
              )}
              {item.subMenu && (
                <>
                  <button onClick={() => toggleDropdown(item.label)} className="text-xl">
                    {openDropdown === item.label ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {openDropdown === item.label && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.subMenu.map((sub) => (
                        <li key={sub.label}>
                          {sub.href.startsWith("/#") ? (
                            <HashLink smooth to={sub.href} className="block py-1 text-sm border-b border-gray-800">
                              {sub.label}
                            </HashLink>
                          ) : (
                            <Link to={sub.href} className="block py-1 text-sm border-b border-gray-800">
                              {sub.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
