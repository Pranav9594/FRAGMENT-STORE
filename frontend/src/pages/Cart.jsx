import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import BubbleBackground from '../components/BubbleBackground';
import { 
  getCartFromStorage, 
  updateCartQuantity, 
  removeFromCart, 
  getCartTotal, 
  getCartItemCount 
} from '../data/mock';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCart = () => {
      const cart = getCartFromStorage();
      setCartItems(cart);
      setIsLoading(false);
    };

    loadCart();

    // Listen for cart updates
    const handleCartUpdate = () => {
      const cart = getCartFromStorage();
      setCartItems(cart);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = updateCartQuantity(productId, quantity);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = removeFromCart(productId);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
    
    const event = new CustomEvent('showToast', {
      detail: { message: 'Item removed from cart', type: 'success' }
    });
    window.dispatchEvent(event);
  };

  const total = getCartTotal(cartItems);
  const itemCount = getCartItemCount(cartItems);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-24 flex items-center justify-center relative overflow-hidden">
        <BubbleBackground />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full relative z-10"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-24 relative overflow-hidden">
      {/* Live Bubble Background */}
      <BubbleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-12"
        >
          <Link to="/shop">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-3 mr-6 rounded-xl">
              <ArrowLeft size={24} />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            <p className="text-gray-400 text-xl mt-2">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </motion.div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-24"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-9xl mb-8"
            >
              🛒
            </motion.div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Your cart is empty
            </h3>
            <p className="text-gray-400 text-xl mb-12 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link to="/shop">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-10 py-6 text-xl rounded-xl"
              >
                <ShoppingBag size={24} className="mr-3" />
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        ) : (
          /* Cart Items */
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, scale: 0.8 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                        {/* Product Image */}
                        <div className="w-full sm:w-32 h-48 sm:h-32 rounded-2xl overflow-hidden bg-gray-700">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 w-full">
                          <h3 className="font-semibold text-white text-xl mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-base mb-4">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            {/* Price */}
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl font-bold text-cyan-400">
                                ₹{item.price.toLocaleString()}
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-gray-500 line-through text-lg">
                                  ₹{item.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-3 bg-gray-700/50 rounded-2xl p-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-xl transition-colors"
                                >
                                  <Minus size={18} />
                                </motion.button>
                                
                                <Badge variant="outline" className="bg-gray-800 border-gray-600 text-white min-w-[3rem] text-center py-2 px-4 text-lg">
                                  {item.quantity}
                                </Badge>
                                
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-xl transition-colors"
                                >
                                  <Plus size={18} />
                                </motion.button>
                              </div>

                              {/* Remove Button */}
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleRemoveItem(item.id)}
                                className="p-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
                              >
                                <Trash2 size={20} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 sticky top-32"
              >
                <h3 className="text-2xl font-semibold text-white mb-8">
                  Order Summary
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between text-gray-400 text-lg">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-400 text-lg">
                    <span>Shipping</span>
                    <span className="text-green-400 font-semibold">
                      {total >= 999 ? 'Free' : '₹99'}
                    </span>
                  </div>
                  
                  {total < 999 && (
                    <div className="text-sm text-cyan-400 bg-cyan-400/10 p-4 rounded-2xl border border-cyan-400/20">
                      Add ₹{(999 - total).toLocaleString()} more for free shipping! 🚚
                    </div>
                  )}
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex justify-between text-white text-2xl font-bold">
                      <span>Total</span>
                      <span>₹{(total + (total >= 999 ? 0 : 99)).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout" className="block mb-4">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 py-6 text-xl rounded-2xl"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center"
                    >
                      Proceed to Checkout
                    </motion.div>
                  </Button>
                </Link>

                <div className="text-center">
                  <Link to="/shop" className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;