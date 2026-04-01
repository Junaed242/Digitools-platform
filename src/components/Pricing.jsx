import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-white">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black text-slate-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-500 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 border ${
              plan.isPopular
                ? "bg-[#631dfa] text-white border-transparent shadow-2xl scale-105 z-10"
                : "bg-slate-50 text-slate-900 border-slate-100"
            }`}
          >
             {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-600 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-200">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-sm ${plan.isPopular ? "text-white/80" : "text-slate-500"}`}
              >
                {plan.desc}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-black">${plan.price}</span>
              <span
                className={`text-sm ${plan.isPopular ? "text-white/60" : "text-slate-400"}`}
              >
                /Month
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check
                    className={`w-4 h-4 ${plan.isPopular ? "text-white" : "text-green-500"}`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold transition ${
                plan.isPopular
                  ? "bg-white text-[#631dfa] hover:bg-slate-100"
                  : "bg-[#631dfa] text-white hover:bg-[#5215d6]"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
