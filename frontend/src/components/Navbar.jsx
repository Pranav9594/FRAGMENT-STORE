import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, X, UserRound, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { getCartItemCount, getCartFromStorage, removeFromCart, updateCartQuantity, getCartTotal } from '../data/mock';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const syncCart = () => {
    const cart = getCartFromStorage();
    setCartItems(cart);
    setCartCount(getCartItemCount(cart));
  };

  useEffect(() => {
    syncCart();
    window.addEventListener('cartUpdated', syncCart);
    return () => window.removeEventListener('cartUpdated', syncCart);
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = updateCartQuantity(productId, quantity);
    setCartItems(updatedCart);
    setCartCount(getCartItemCount(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = removeFromCart(productId);
    setCartItems(updatedCart);
    setCartCount(getCartItemCount(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const subtotal = getCartTotal(cartItems);

  const navItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Shop', path: '/shop', key: 'shop' },
    { name: 'Contact', path: '/', hash: '#contact', key: 'contact' },
  ];

  const isNavItemActive = (item) => {
    if (item.hash) {
      return location.pathname === '/' && location.hash === item.hash;
    }
    if (item.key === 'home') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="site-nav"
      >
        <div className="nav-inner">
          <div className="nav-row">
            <Link to="/" className="brand-mark">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brand-mark"
              >
                <img 
                  src="/images/fragment-store-logo.svg"
                  alt="FRAGMENT STORE"
                  className="brand-logo"
                />
                <div className="brand-name">
                  FRAGMENT STORE
                </div>
              </motion.div>
            </Link>

            <div className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.hash ? { pathname: item.path, hash: item.hash } : item.path}
                  className="nav-item"
                >
                  <motion.span className={`nav-link ${isNavItemActive(item) ? 'active' : ''}`} whileHover={{ y: -1 }}>
                    {item.name}
                  </motion.span>
                  <motion.div
                    className="nav-underline"
                    initial={false}
                    animate={{ width: isNavItemActive(item) ? '100%' : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                type="button"
                aria-label="Search products"
                onClick={() => navigate('/shop?focus=search')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-icon"
              >
                <Search size={20} />
              </motion.button>

              <motion.button
                type="button"
                aria-label="Open cart"
                onClick={() => setIsCartOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-icon cart-link"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="cart-count"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              <button type="button" aria-label="Open account" className="nav-icon account-icon"><UserRound size={19} /></button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#14213d]/25 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-screen w-full max-w-md border-l border-[#e7e8e5] bg-[#f7f7f4] shadow-2xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-[#e7e8e5] px-6 py-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#2364aa]">Your cart</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">{cartCount} item{cartCount === 1 ? '' : 's'}</h2>
                  </div>
                  <button
                    type="button"
                    aria-label="Close cart"
                    onClick={() => setIsCartOpen(false)}
                    className="rounded-full border border-[#d8dbd8] bg-white p-2 text-[#14213d] transition hover:bg-[#eef1f5]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5">
                  {cartItems.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="mb-6 text-6xl">🛒</div>
                      <h3 className="text-2xl font-semibold text-[#14213d]">Your cart is empty</h3>
                      <p className="mt-3 max-w-xs text-sm text-[#687080]">Add a product to keep shopping and build your cart.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-[#e7e8e5] bg-white p-4 shadow-sm">
                          <div className="flex gap-4">
                            <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h3 className="text-base font-semibold text-[#14213d]">{item.name}</h3>
                                  <p className="mt-1 text-sm text-[#687080]">₹{item.price.toLocaleString()}</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="rounded-lg p-1.5 text-[#687080] transition hover:bg-red-50 hover:text-red-600"
                                  aria-label={`Remove ${item.name}`}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>

                              <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-2 rounded-xl border border-[#d8dbd8] bg-[#f7f7f4] p-1.5">
                                  <button
                                    type="button"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="rounded-lg p-1.5 text-[#687080] transition hover:bg-white hover:text-[#14213d]"
                                    aria-label={`Decrease quantity for ${item.name}`}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="w-8 text-center text-sm font-medium text-[#14213d]">{item.quantity}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="rounded-lg p-1.5 text-[#687080] transition hover:bg-white hover:text-[#14213d]"
                                    aria-label={`Increase quantity for ${item.name}`}
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>

                                <p className="text-base font-semibold text-[#2364aa]">₹{(item.price * item.quantity).toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-[#e7e8e5] bg-white p-6">
                  <div className="mb-4 flex items-center justify-between text-sm text-[#687080]">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="mb-5 flex items-center justify-between text-sm text-[#687080]">
                    <span>Shipping</span>
                    <span className="font-medium text-[#e7ad4b]">{subtotal >= 999 ? 'Free' : '₹99'}</span>
                  </div>
                  <Link
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="mb-3 flex w-full items-center justify-center rounded-xl bg-[#14213d] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#14213d]/20 transition hover:bg-[#2364aa]"
                  >
                    View cart <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl border border-[#aeb5be] bg-white px-4 py-3 text-sm font-semibold text-[#14213d] transition hover:bg-[#eef1f5]"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;