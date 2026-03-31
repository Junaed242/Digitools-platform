import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Stats from "./components/stats";
import MainSection from "./components/MainSection";
import productsData from "./products.json";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./components/Steps";
function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Check if already in cart to avoid duplicate toasts
    const isExist = cart.find((item) => item.id === product.id);

    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.warn("Item already in cart!");
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Item removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Thank you for your purchase!");
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <MainSection
        products={productsData}
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemove={handleRemove}
        handleCheckout={handleCheckout}
      />
      <Steps />
      <ToastContainer />
    </>
  );
}

export default App;
