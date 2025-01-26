import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import logo from "../assets/logo.png";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full py-4 px-6 bg-white text-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Yoga Logo" className="h-20 w-auto object-contain" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-[#000] hover:text-[#9e6144]   font-semibold text-lg">
            Home
          </a>
          <a href="/events" className=" text-[#000]  hover:text-[#9e6144] font-semibold text-lg">
            Events
          </a>
          <a href="/about" className=" text-[#000]  hover:text-[#9e6144] font-semibold text-lg">
            About
          </a>
          <a href="/contact" className="text-[#000] hover:text-[#9e6144] font-semibold text-lg">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="search"
            placeholder="Search classes"
            className="w-[200px] sm:w-[250px] lg:w-[300px] rounded-full text-black border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#hover:#9e6144]"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 bg-[#9e6144] text-white px-6 py-4 rounded-lg">
          <a href="/" className="hover:text-[#b2dfdb] font-medium py-2">
            Home
          </a>
          <a href="/events" className="hover:text-[#000] font-medium py-2">
            Events
          </a>
          <a href="/about" className="hover:text-[#000] font-medium py-2">
            About
          </a>
          <a href="/contact" className="hover:text-[#000] font-medium py-2">
            Contact
          </a>
          <div className="relative mt-2">
            <input
              type="search"
              placeholder="Search classes"
              className="w-full rounded-full bg-[#white] text-white px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9e6144]"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-300" />
          </div>
        </div>
      )}
    </header>
  );
}
