import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
            {/* Company Section */}
            <div>
              <p className="text-base text-gray-500">Company</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            {/* Help Section */}
            <div>
              <p className="text-base text-gray-500">Help</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources Section */}
            <div>
              <p className="text-base text-gray-500">Resources</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    YouTube Playlist
                  </a>
                </li>
              </ul>
            </div>
            {/* Extra Links Section */}
            <div>
              <p className="text-base text-gray-500">Extra Links</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-16 mb-10 border-gray-800" />
          <div className="flex flex-wrap items-center justify-between">
          <div className="flex">
          <DotLottieReact
                src="https://lottie.host/9e9d4103-05f9-48a7-a723-14648d1599c3/G8xEHjdRbB.lottie"
                loop
                autoplay
                style={{ width: 50, height: 50 }}
              />
              <p className="m-5 text-3xl text-orange-700">Dine Craft</p>
          </div>
              
            <div className="flex items-center space-x-2 w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
              <p>© Copyright {currentYear}, All Rights Reserved by</p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
