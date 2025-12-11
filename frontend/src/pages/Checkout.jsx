import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  getCartFromStorage, 
  getCartTotal, 
  getCartItemCount, 
  clearCart 
} from '../data/mock';

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  useEffect(() => {
    const cart = getCartFromStorage();
    if (cart.length === 0) {
      navigate('/cart');
      return;
    }
    setCartItems(cart);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      const event = new CustomEvent('showToast', {
        detail: { message: 'Please fill in all required fields', type: 'error' }
      });
      window.dispatchEvent(event);
      setIsLoading(false);
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      // Save order data to localStorage for success page
      const orderData = {
        orderId: 'ORD' + Date.now(),
        items: cartItems,
        total: getCartTotal(cartItems) + (getCartTotal(cartItems) >= 999 ? 0 : 99),
        shippingInfo: formData,
        orderDate: new Date().toISOString()
      };
      
      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      
      // Clear cart
      clearCart();
      
      // Navigate to success page
      navigate('/success');
    }, 2000);
  };

  const total = getCartTotal(cartItems);
  const itemCount = getCartItemCount(cartItems);
  const shippingCost = total >= 999 ? 0 : 99;
  const finalTotal = total + shippingCost;

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 1920],
              y: [0, Math.random() * 1080],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-8"
        >
          <Button 
            onClick={() => navigate('/cart')}
            variant="ghost" 
            className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-2"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="ml-4">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Checkout
            </h1>
            <p className="text-gray-400">
              Complete your order in just a few steps
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Personal Information */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-white">Shipping Address</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="text-gray-300">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-gray-300">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-gray-300">State *</Label>
                      <Select 
                        value={formData.state} 
                        onValueChange={(value) => setFormData(prev => ({...prev, state: value}))}
                      >
                        <SelectTrigger className="mt-1 bg-gray-700/50 border-gray-600 text-white">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="maharashtra" className="text-white">Maharashtra</SelectItem>
                          <SelectItem value="delhi" className="text-white">Delhi</SelectItem>
                          <SelectItem value="karnataka" className="text-white">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu" className="text-white">Tamil Nadu</SelectItem>
                          <SelectItem value="gujarat" className="text-white">Gujarat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="pincode" className="text-gray-300">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="mt-1 bg-gray-700/50 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-white">Payment Method</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                    { id: 'upi', label: 'UPI', icon: Truck },
                    { id: 'cod', label: 'Cash on Delivery', icon: Shield }
                  ].map((method) => (
                    <motion.label
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <method.icon size={20} className="text-blue-400 mr-3" />
                      <span className="text-white font-medium">{method.label}</span>
                    </motion.label>
                  ))}
                </div>
              </div>
            </motion.form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                {cartItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {cartItems.length > 3 && (
                  <p className="text-gray-400 text-sm">
                    +{cartItems.length - 3} more items
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                </div>
                
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-white text-xl font-semibold">
                    <span>Total</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 py-4 text-lg"
              >
                <motion.div
                  animate={isLoading ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 1, repeat: isLoading ? Infinity : 0 }}
                  className="flex items-center justify-center"
                >
                  {isLoading ? 'Processing Order...' : `Place Order • ₹${finalTotal.toLocaleString()}`}
                </motion.div>
              </Button>

              <div className="mt-4 text-xs text-gray-400 text-center">
                By placing your order, you agree to our Terms & Conditions
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;