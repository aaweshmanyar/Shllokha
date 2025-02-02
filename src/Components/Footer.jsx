import React from "react";
import logo from '.././assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#f5e7e0] text-gray-800 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Address Section */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}// Replace with your logo path
              alt="Yoga Center Logo"
              className="w-32 mb-4"
            />
            <p className="text-sm text-center sm:text-left">
              Shlloka Joshi Foundation
              <br />
              123 Yoga Street, Wellness City
              <br />
              State, ZIP Code
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/events" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:underline">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section (Optional) */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-600 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-600 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-600 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; 2023 Your Yoga Center Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;