import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Calendar, MapPin, CreditCard, Home, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';

const Success = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (!lastOrder) {
      navigate('/');
      return;
    }

    setOrderData(JSON.parse(lastOrder));
    setShowConfetti(true);

    // Hide confetti after 3 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!orderData) {
    return null;
  }

  const orderDate = new Date(orderData.orderDate);
  const estimatedDelivery = new Date(orderDate.getTime() + (5 * 24 * 60 * 60 * 1000)); // 5 days from order

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f7f4] pt-24">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-[#e7ad4b]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
                rotate: 0,
                scale: Math.random() * 1 + 0.5
              }}
              animate={{
                y: window.innerHeight + 10,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                ease: "easeOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10 px-6 py-12 sm:px-8 lg:px-12">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <CheckCircle size={80} className="mx-auto text-[#2364aa]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 text-4xl font-bold text-[#14213d] md:text-5xl"
          >
            Order Placed Successfully!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-2 text-xl text-[#687080]"
          >
            Thank you for shopping with us! 🎉
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-[#687080]"
          >
            Your order has been confirmed and will be delivered soon.
          </motion.p>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-8 rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Order Info */}
            <div>
              <h3 className="mb-6 flex items-center text-xl font-semibold text-[#14213d]">
                <Package className="mr-3 text-[#2364aa]" size={24} />
                Order Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-[#f7f7f4] p-3">
                  <span className="text-[#687080]">Order ID</span>
                  <span className="font-mono text-[#14213d]">{orderData.orderId}</span>
                </div>
                
                <div className="flex items-center justify-between rounded-lg bg-[#f7f7f4] p-3">
                  <span className="flex items-center text-[#687080]">
                    <Calendar className="mr-2" size={16} />
                    Order Date
                  </span>
                  <span className="text-[#14213d]">
                    {orderDate.toLocaleDateString('en-IN')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between rounded-lg bg-[#f7f7f4] p-3">
                  <span className="text-[#687080]">Total Amount</span>
                  <span className="text-lg font-semibold text-[#2364aa]">
                    ₹{orderData.total.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between rounded-lg bg-[#f7f7f4] p-3">
                  <span className="flex items-center text-[#687080]">
                    <Package className="mr-2" size={16} />
                    Items
                  </span>
                  <span className="text-[#14213d]">
                    {orderData.items.length} item{orderData.items.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div>
              <h3 className="mb-6 flex items-center text-xl font-semibold text-[#14213d]">
                <MapPin className="mr-3 text-[#2364aa]" size={24} />
                Delivery Information
              </h3>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-[#f7f7f4] p-3">
                  <p className="mb-1 text-sm text-[#687080]">Estimated Delivery</p>
                  <p className="font-semibold text-[#14213d]">
                    {estimatedDelivery.toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                <div className="rounded-lg bg-[#f7f7f4] p-3">
                  <p className="mb-1 text-sm text-[#687080]">Delivery Address</p>
                  <p className="text-[#14213d]">
                    {orderData.shippingInfo.firstName} {orderData.shippingInfo.lastName}
                  </p>
                  <p className="text-sm text-[#687080]">
                    {orderData.shippingInfo.address}
                  </p>
                  <p className="text-sm text-[#687080]">
                    {orderData.shippingInfo.city}, {orderData.shippingInfo.state} - {orderData.shippingInfo.pincode}
                  </p>
                </div>
                
                <div className="rounded-lg bg-[#f7f7f4] p-3">
                  <p className="mb-1 flex items-center text-sm text-[#687080]">
                    <CreditCard className="mr-2" size={14} />
                    Payment Method
                  </p>
                  <p className="capitalize text-[#14213d]">
                    {orderData.shippingInfo.paymentMethod === 'card' ? 'Credit/Debit Card' :
                     orderData.shippingInfo.paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-8 rounded-2xl border border-[#e7e8e5] bg-white p-8 shadow-sm"
        >
          <h3 className="mb-6 text-xl font-semibold text-[#14213d]">
            Ordered Items
          </h3>
          
          <div className="space-y-4">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 rounded-lg bg-[#f7f7f4] p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-[#14213d]">{item.name}</h4>
                  <p className="text-sm text-[#687080]">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#14213d]">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link to="/">
            <Button 
              size="lg"
              className="rounded-xl border-0 bg-[#14213d] px-8 py-4 text-white hover:bg-[#2364aa]"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/shop">
            <Button 
              size="lg"
              variant="outline"
              className="rounded-xl border-2 border-[#2364aa] bg-transparent px-8 py-4 text-[#2364aa] hover:bg-[#2364aa] hover:text-white"
            >
              <ShoppingBag className="mr-2" size={20} />
              Continue Shopping
            </Button>
          </Link>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-[#e7ad4b] bg-white p-6 text-center"
        >
          <p className="mb-2 text-lg text-[#14213d]">
            We appreciate your business! 
          </p>
          <p className="text-[#687080]">
            You'll receive an email confirmation with tracking details shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;