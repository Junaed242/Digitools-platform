import { Check } from "lucide-react";
import React from "react";

import { useState } from "react";

const MainSection = ({
  products,
  cart,
  handleAddToCart,
  handleRemove,
  handleCheckout,
}) => {
  const [activeTab, setActiveTab] = useState("products");

  // Calculate Cart Total
  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section id="products" className="py-16 px-6 md:px-12 bg-white">
      
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-black text-slate-900">
          Premium Digital Tools
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          {/* Toggle buttons */}
          <button
            onClick={() => setActiveTab("products")}
            className={`px-8 py-2 rounded-full font-bold transition shadow-sm ${activeTab === "products" ? "bg-[#631dfa] text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-2 rounded-full font-bold transition shadow-sm ${activeTab === "cart" ? "bg-[#631dfa] text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

    
      {activeTab === "products" ? (
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition relative flex flex-col"
            >
              {product.tag && (
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded uppercase ${product.tagType === "popular" ? "bg-blue-50 text-blue-500" : product.tagType === "new" ? "bg-green-50 text-green-500" : "bg-amber-50 text-amber-500"}`}
                >
                  {product.tag}
                </span>
              )}
              <img src={product.icon} alt="" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-slate-800">
                {product.name}
              </h3>
              <p className="text-slate-500 text-sm mt-2 mb-4 grow">
                {product.description}
              </p>
              <div className="text-2xl font-black text-slate-900 mb-4">
                ${product.price}
                <span className="text-sm font-normal text-slate-400">
                  /{product.period === "monthly" ? "Monthly" : "One-Time"}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {product.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Check /> {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#631dfa] text-white py-3 rounded-xl font-bold hover:bg-[#5215d6] transition"
              >
                {cart.some((item) => item.id === product.id)
                  ? "In Cart"
                  : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Your Cart</h3>
          {cart.length === 0 ? (
            <div className="text-center py-10 text-slate-400 font-medium">
              Your cart is currently empty.
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.icon} className="w-10 h-10" alt="" />
                    <div>
                      <h4 className="font-bold text-slate-800">{item.name}</h4>
                      <p className="text-slate-500 text-sm">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-rose-500 text-sm font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-8 flex justify-between items-center border-t pt-6">
                <span className="text-slate-500 font-medium">Total:</span>
                <span className="text-3xl font-black text-slate-900">
                  ${cartTotal}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-[#631dfa] text-white py-4 rounded-2xl font-bold hover:bg-[#5215d6] shadow-lg shadow-purple-200"
              >
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MainSection;
