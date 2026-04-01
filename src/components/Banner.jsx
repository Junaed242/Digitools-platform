import React from "react";
import bannerImage from "../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section className="px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">

      <div className=" space-y-6">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 text-[#631dfa] px-3 py-1 rounded-full text-xs font-bold border border-purple-100">
          <span className="w-2 h-2 bg-[#631dfa] rounded-full animate-pulse"></span>
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-6xl font-extrabold">
          Supercharge Your <br />
          <span>Digital Workflow</span>
        </h1>

        <p className="text-slate-500 text-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <button className="btn bg-[#631dfa] hover:bg-[#5215d6] text-white border-none rounded-full px-8 h-14 font-bold shadow-lg shadow-purple-200">
            Explore Products
          </button>
          <button className="btn btn-outline border-slate-200 hover:border-[#631dfa] hover:bg-transparent hover:text-[#631dfa] rounded-full px-8 h-14 font-bold gap-2">
            <Play />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="relative flex justify-end">
        <div className="rounded-3xl overflow-hidden p-2 shadow-2xl">
          <img
            src={bannerImage}
            alt="AI Workflow Illustration"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
