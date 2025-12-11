import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import BubbleBackground from "./components/BubbleBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  useEffect(() => {
    const handleToast = (event) => {
      const { message, type } = event.detail;
      if (type === 'success') {
        toast.success(message);
      } else if (type === 'error') {
        toast.error(message);
      } else {
        toast(message);
      }
    };

    window.addEventListener('showToast', handleToast);
    return () => window.removeEventListener('showToast', handleToast);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </AnimatePresence>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'rgb(17, 24, 39)',
                color: 'white',
                border: '1px solid rgb(6, 182, 212)',
                borderRadius: '12px',
              },
            }}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;