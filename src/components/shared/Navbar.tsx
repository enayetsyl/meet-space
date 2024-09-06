import { FaCartArrowDown, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { IoMdArrowUp, IoMdSearch } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiInstagramLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { navItems } from "../../constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="p-4 bg-white md:bg-transparent h-20 md:h-28 relative z-50">
      <div className="flex items-center  justify-around">
        <div>
          <NavLink
            to="/"
            className="text-black md:text-white text-3xl md:text-4xl font-bold"
          >
            MeetSpace
          </NavLink>
        </div>
        <div className="hidden md:flex ml-10 space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white hover:text-customOrange ${
                  isActive ? "text-customGreen font-bold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden pt-3">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            className="text-customOrange hover:text-customGreen "
          >
            <GiHamburgerMenu
              className={
                isOpen
                  ? "h-6 w-6 text-customOrange"
                  : "h-6 w-6 text-customGreen"
              }
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-16 left-0 w-full bg-white p-4 space-y-4 z-20 flex flex-col justify-start items-start px-20 "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-black hover:text-customOrange border-t border-gray-400 w-full  ${
                  isActive ? "text-customGreen font-bold" : ""
                }`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
