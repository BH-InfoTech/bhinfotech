import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaHandshake, FaInfoCircle, FaBlog } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <RouterLink to="/" className="flex items-center space-x-2">
            <img src="" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-blue-800">BH Infotech</span>
          </RouterLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 cursor-pointer"
          >
            Home
          </ScrollLink>

          {/* Who We Are Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600">
              Who We Are <IoIosArrowDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-md z-20 w-48">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-blue-50 flex items-center gap-2"
              >
                <FaInfoCircle /> About Us
              </ScrollLink>
              <ScrollLink
                to="technology"
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-blue-50 flex items-center gap-2"
              >
                ⚙️ Technology
              </ScrollLink>
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-blue-50 flex items-center gap-2"
              >
                <FaBlog /> Blog
              </ScrollLink>
            </div>
          </div>

          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 cursor-pointer"
          >
            Services
          </ScrollLink>

          {/* Partnership Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600">
              Partnership <IoIosArrowDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-md z-20 w-52">
              <ScrollLink
                to="partner"
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-blue-50"
              >
                Become a Partner
              </ScrollLink>
              <ScrollLink
                to="franchise"
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-blue-50"
              >
                Become a Franchise
              </ScrollLink>
            </div>
          </div>

          {/* Career Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600">
              Career <IoIosArrowDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-md z-20 w-48">
              <ScrollLink
                to="openings"
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-blue-50 flex items-center gap-2"
              >
                <MdOutlineWork /> Current Openings
              </ScrollLink>
            </div>
          </div>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 cursor-pointer flex items-center gap-1"
          >
            <FiPhoneCall /> Contact Us
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-blue-800">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-4 space-y-3 font-medium">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              Home
            </ScrollLink>

            {/* Dropdowns collapsed into flat items for mobile */}
            <div className="space-y-1">
              <span className="text-sm text-gray-500">Who We Are</span>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block hover:text-blue-600"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                to="technology"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block hover:text-blue-600"
              >
                Technology
              </ScrollLink>
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block hover:text-blue-600"
              >
                Blog
              </ScrollLink>
            </div>

            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              Services
            </ScrollLink>

            <div className="space-y-1">
              <span className="text-sm text-gray-500">Partnership</span>
              <ScrollLink
                to="partner"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block hover:text-blue-600"
              >
                Become a Partner
              </ScrollLink>
              <ScrollLink
                to="franchise"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block hover:text-blue-600"
              >
                Become a Franchise
              </ScrollLink>
            </div>

            <div className="space-y-1">
              <span className="text-sm text-gray-500">Career</span>
              <ScrollLink
                to="openings"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block hover:text-blue-600"
              >
                Current Openings
              </ScrollLink>
            </div>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              Contact Us
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
