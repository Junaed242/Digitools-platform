import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-20 pb-10 px-6 md:px-12">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-black text-white">DigiTools</h2>
            <p className="text-sm max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs">
              Product
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Templates
              </li>
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Integrations
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                About
              </li>
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-[#631dfa] cursor-pointer transition">
                Press
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs">
              Social Links
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0f172a] hover:bg-[#631dfa] hover:text-white transition cursor-pointer"
              >
                <FaFacebookSquare className="text-lg" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0f172a] hover:bg-[#631dfa] hover:text-white transition cursor-pointer"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0f172a] hover:bg-[#631dfa] hover:text-white transition cursor-pointer"
              >
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-600 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
