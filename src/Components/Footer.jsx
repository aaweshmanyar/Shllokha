import React from "react";

import { FaInstagram, FaFacebook, FaWhatsapp, FaLine } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
     
      {/* Footer Section */}
      <footer className="bg-black py-10 text-white font-semibold  shadow-lg shadow-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Brand Section */}
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <img
                  src="https://shlloka.com/wp-content/themes/wsshlloka//assets/images/logo.png"
                  alt="Logo"
                  className="w-12 h-12 mr-3 shadow-md shadow-heading rounded-full"
                />
                <span className="text-2xl font-bold text-white">
                  Aadi Yoga Center Phuket
                </span>
              </div>
              <p className="text-sm text-gray-200">
                Discover tranquility at Aadi Yoga Center in Thailand. From yoga
                classes to therapy and sound healing, find your path to wellness
                with us.
              </p>
            </div>

            {/* Services and Policies Section */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/yogaclass"
                    className="text-white hover:opacity-65 transition-colors duration-200"
                  >
                    Yoga Classes (Private & Group)
                  </a>
                </li>
                <li>
                  <a
                    href="/yogatherapy"
                    className="text-white hover:opacity-65 transition-colors duration-200"
                  >
                    Yoga Therapy
                  </a>
                </li>
                <li>
                  <a
                    href="/kidsyoga"
                    className="text-white hover:opacity-65 transition-colors duration-200"
                  >
                    Kids Yoga
                  </a>
                </li>
                <li>
                  <a
                    href="/yogateacher"
                    className="text-white hover:opacity-65 transition-colors duration-200"
                  >
                    Yoga Teacher
                  </a>
                </li>
                <li>
                  <a
                    href="/trainingcourse"
                    className="text-white hover:opacity-65 transition-colors duration-200"
                  >
                    Training Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/soundhealing"
                    className="text-white hover:opacity-65 transition-colors duration-200"
                  >
                    Sound Healing
                  </a>
                </li>
              </ul>
              {/* <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Policies
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/termsconditions"
                className="hover:text-teal-200 text-gray-200 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacypolicy"
                className="hover:text-teal-200 text-gray-200 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/refundpolicy"
                className="hover:text-teal-200 text-gray-200 transition-colors duration-200"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div> */}
            </div>

            {/* Location & Contact Section */}
            <div className="animate-fade-in-up delay-400">
              <h3 className="text-lg font-semibold mb-3 text-white">
                ⏰ Opening Hours
              </h3>
              <p className="text-sm text-gray-200 mb-3">
                Mon-Sun: 05:30 AM to 09:00 PM
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Policies
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/termsconditions"
                      className="text-white hover:opacity-65 transition-colors duration-200"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacypolicy"
                      className="text-white hover:opacity-65  transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refundpolicy"
                      className="text-white  hover:opacity-65 transition-colors duration-200"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social & Credits Section */}
            <div className="animate-fade-in-up delay-600 flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Get in Touch
              </h3>

              <a href="https://maps.app.goo.gl/QDW2DyYZoYKnfqpV8" className="text-sm text-gray-200 mb-3 text-white hover:opacity-65">
                80, Doctor wattana, 16 Soi Dr. Watthana, Pa Tong, Phuket, 83150,
                Thailand
              </a>
              <p className="text-sm text-gray-200 mb-3">
                Phone: +66 80 251 1273
              </p>
              <a href="mailto:info@aadiyogacenterphuket.com" className="text-sm text-white hover:opacity-65"> Email: info@aadiyogacenterphuket.com </a>

              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/aadiyogacenter.bangkok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-65 "
                >
                  <FaInstagram className="text-teal-300 w-6 h-6" />
                </a>
                <a
                  href="https://line.me/ti/p/Xu79UdtdLg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-65"
                >
                  <FaLine className="text-teal-300 w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/66802511273?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-65"
                >
                  <FaWhatsapp className="text-teal-300 w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10 border-t border-teal-700 pt-5 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-200">
              &copy; 2024 aadiyogacenterphuket.com. All Rights Reserved. | Designed &
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/aawesh-manyar/"
                className="text-white hover:opacity-65 font-bold"
              >
                Aawesh Manyar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;