import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";
const Steps = () => {
  const stepsData = [
    {
      number: "01",
      icon: userIcon,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      number: "02",
      icon: packageIcon,
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      number: "03",
      icon: rocketIcon,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section id="steps" className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-16 space-y-3">
          <h2 className="text-4xl font-black text-slate-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-10 text-center relative shadow-sm hover:shadow-md transition"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 bg-[#631dfa] text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>

              <div className="w-20 h-20 mx-auto rounded-full bg-purple-50 flex items-center justify-center mb-8 p-5">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
