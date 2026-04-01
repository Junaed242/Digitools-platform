import React from "react";

const Stats = () => {
  return (
    <section className="px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto bg-[#631dfa] rounded-xl py-12 px-6 flex flex-col md:flex-row items-center justify-evenly gap-8 text-white shadow-xl">
        <div className="text-center flex-1">
          <h2 className="text-5xl font-black mb-2">50K+</h2>
          <p className="text-white/80 font-medium">Active Users</p>
        </div>

        <div className="text-center flex-1">
          <h2 className="text-5xl font-black mb-2">200+</h2>
          <p className="text-white/80 font-medium">Premium Tools</p>
        </div>

        <div className="text-center flex-1">
          <h2 className="text-5xl font-black mb-2">4.9</h2>
          <p className="text-white/80 font-medium">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
