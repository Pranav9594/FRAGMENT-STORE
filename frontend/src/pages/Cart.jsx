import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f4] pt-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="relative z-10 h-12 w-12 rounded-full border-4 border-[#e7ad4b] border-t-transparent"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-12"
        >
          <Link to="/shop">
            <Button variant="ghost" className="mr-6 rounded-xl p-3 text-[#2364aa] hover:bg-[#eef1f5] hover:text-[#14213d]">
              <ArrowLeft size={24} />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-[#14213d] md:text-5xl">
              Shopping Cart
            </h1>
            <p className="mt-2 text-xl text-[#687080]">
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
            className="rounded-2xl border border-[#e7e8e5] bg-white py-24 text-center shadow-sm"
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
            <h3 className="mb-4 text-3xl font-semibold text-[#14213d]">
              Your cart is empty
            </h3>
            <p className="mx-auto mb-12 max-w-md text-xl text-[#687080]">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link to="/shop">
              <Button 
                size="lg"
                className="rounded-xl border-0 bg-[#14213d] px-10 py-6 text-xl text-white hover:bg-[#2364aa]"
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
                      className="rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#e7ad4b]"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                        {/* Product Image */}
                        <div className="h-48 w-full overflow-hidden rounded-xl bg-[#eef1f5] sm:h-32 sm:w-32">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 w-full">
                          <h3 className="mb-2 text-xl font-semibold text-[#14213d]">
                            {item.name}
                          </h3>
                          <p className="mb-4 text-base text-[#687080]">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            {/* Price */}
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl font-bold text-[#2364aa]">
                                ₹{item.price.toLocaleString()}
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-lg text-[#9aa0a8] line-through">
                                  ₹{item.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-3 rounded-xl border border-[#d8dbd8] bg-[#f7f7f4] p-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="rounded-xl p-2 text-[#687080] transition-colors hover:bg-white hover:text-[#14213d]"
                                >
                                  <Minus size={18} />
                                </motion.button>
                                
                                <Badge variant="outline" className="min-w-[3rem] border-[#d8dbd8] bg-white px-4 py-2 text-center text-lg text-[#14213d]">
                                  {item.quantity}
                                </Badge>
                                
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="rounded-xl p-2 text-[#687080] transition-colors hover:bg-white hover:text-[#14213d]"
                                >
                                  <Plus size={18} />
                                </motion.button>
                              </div>

                              {/* Remove Button */}
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleRemoveItem(item.id)}
                                className="rounded-xl p-3 text-[#687080] transition-colors hover:bg-red-50 hover:text-red-600"
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
                className="sticky top-32 rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm"
              >
                <h3 className="mb-8 text-2xl font-semibold text-[#14213d]">
                  Order Summary
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between text-lg text-[#687080]">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-lg text-[#687080]">
                    <span>Shipping</span>
                    <span className="font-semibold text-[#2364aa]">
                      {total >= 999 ? 'Free' : '₹99'}
                    </span>
                  </div>
                  
                  {total < 999 && (
                    <div className="rounded-xl border border-[#e7ad4b]/40 bg-[#e7ad4b]/10 p-4 text-sm text-[#14213d]">
                      Add ₹{(999 - total).toLocaleString()} more for free shipping! 🚚
                    </div>
                  )}
                  
                  <div className="border-t border-[#e7e8e5] pt-6">
                    <div className="flex justify-between text-2xl font-bold text-[#14213d]">
                      <span>Total</span>
                      <span>₹{(total + (total >= 999 ? 0 : 99)).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout" className="block mb-4">
                  <Button 
                    size="lg"
                    className="w-full rounded-xl border-0 bg-[#14213d] py-6 text-xl text-white hover:bg-[#2364aa]"
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
                  <Link to="/shop" className="text-lg font-medium text-[#2364aa] transition-colors hover:text-[#14213d]">
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