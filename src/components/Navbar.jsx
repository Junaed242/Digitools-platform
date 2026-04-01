import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between lg:px-12 px-2 py-6 bg-white">
      
      <div className="text-2xl font-black text-[#631dfa] flex items-center gap-1">
        DigiTools
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <li>
          <a href="#products" className="hover:text-[#631dfa] cursor-pointer transition">
            Products
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-[#631dfa] cursor-pointer transition">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-[#631dfa] cursor-pointer transition">
            Pricing
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-[#631dfa] cursor-pointer transition">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-[#631dfa] cursor-pointer transition">FAQ</a>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer group">
          <ShoppingCart></ShoppingCart>
          <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {cartCount || 0}
          </span>
        </div>
        <button className="text-sm font-bold text-slate-700 hover:text-[#631dfa]">
          Login
        </button>
        <button className="btn bg-[#631dfa] hover:bg-[#5215d6] text-white border-none rounded-full px-6 font-bold normal-case">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
