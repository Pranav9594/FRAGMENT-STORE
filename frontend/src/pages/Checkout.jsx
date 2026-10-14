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
    <div className="min-h-screen bg-[#f7f7f4] pt-24">
      <div className="container px-6 py-12 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center"
        >
          <Button 
            onClick={() => navigate('/cart')}
            variant="ghost" 
            className="mr-6 rounded-xl p-3 text-[#2364aa] hover:bg-[#eef1f5] hover:text-[#14213d]"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-[#14213d] md:text-5xl">
              Checkout
            </h1>
            <p className="mt-2 text-xl text-[#687080]">
              Complete your order in just a few steps
            </p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Personal Information */}
              <div className="rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#14213d] font-semibold text-white">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-[#14213d]">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[#687080]">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#687080]">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#687080]">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#687080]">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#14213d] font-semibold text-white">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-[#14213d]">Shipping Address</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="text-[#687080]">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-[#687080]">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-[#687080]">State *</Label>
                      <Select 
                        value={formData.state} 
                        onValueChange={(value) => setFormData(prev => ({...prev, state: value}))}
                      >
                        <SelectTrigger className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent className="border-[#e7e8e5] bg-white">
                          <SelectItem value="maharashtra" className="text-[#14213d]">Maharashtra</SelectItem>
                          <SelectItem value="delhi" className="text-[#14213d]">Delhi</SelectItem>
                          <SelectItem value="karnataka" className="text-[#14213d]">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu" className="text-[#14213d]">Tamil Nadu</SelectItem>
                          <SelectItem value="gujarat" className="text-[#14213d]">Gujarat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="pincode" className="text-[#687080]">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="mt-1 border-[#d8dbd8] bg-[#f7f7f4] text-[#14213d] focus:border-[#2364aa]"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#14213d] font-semibold text-white">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-[#14213d]">Payment Method</h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                          ? 'border-[#2364aa] bg-[#eef1f5]'
                          : 'border-[#d8dbd8] hover:border-[#2364aa]'
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
                      <method.icon size={20} className="mr-3 text-[#2364aa]" />
                      <span className="font-medium text-[#14213d]">{method.label}</span>
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
              className="sticky top-24 rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm"
            >
              <h3 className="mb-6 text-xl font-semibold text-[#14213d]">Order Summary</h3>

              <div className="space-y-4 mb-6">
                {cartItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="line-clamp-1 text-sm font-medium text-[#14213d]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#687080]">
                        Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {cartItems.length > 3 && (
                  <p className="text-sm text-[#687080]">
                    +{cartItems.length - 3} more items
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#687080]">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-[#687080]">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                </div>
                
                <div className="border-t border-[#e7e8e5] pt-3">
                  <div className="flex justify-between text-xl font-semibold text-[#14213d]">
                    <span>Total</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
                size="lg"
                className="w-full rounded-xl border-0 bg-[#14213d] py-4 text-lg text-white hover:bg-[#2364aa]"
              >
                <motion.div
                  animate={isLoading ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 1, repeat: isLoading ? Infinity : 0 }}
                  className="flex items-center justify-center"
                >
                  {isLoading ? 'Processing Order...' : `Place Order • ₹${finalTotal.toLocaleString()}`}
                </motion.div>
              </Button>

              <div className="mt-4 text-center text-xs text-[#687080]">
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