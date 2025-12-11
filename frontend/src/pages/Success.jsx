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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
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

      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 1920],
              y: [0, Math.random() * 1080],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-12"
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
            <CheckCircle size={80} className="text-green-400 mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            Order Placed Successfully!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-gray-300 mb-2"
          >
            Thank you for shopping with us! 🎉
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-400"
          >
            Your order has been confirmed and will be delivered soon.
          </motion.p>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Package className="mr-3 text-blue-400" size={24} />
                Order Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-400">Order ID</span>
                  <span className="text-white font-mono">{orderData.orderId}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-400 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    Order Date
                  </span>
                  <span className="text-white">
                    {orderDate.toLocaleDateString('en-IN')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-400">Total Amount</span>
                  <span className="text-green-400 font-semibold text-lg">
                    ₹{orderData.total.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-400 flex items-center">
                    <Package className="mr-2" size={16} />
                    Items
                  </span>
                  <span className="text-white">
                    {orderData.items.length} item{orderData.items.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <MapPin className="mr-3 text-green-400" size={24} />
                Delivery Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1">Estimated Delivery</p>
                  <p className="text-white font-semibold">
                    {estimatedDelivery.toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                <div className="p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1">Delivery Address</p>
                  <p className="text-white">
                    {orderData.shippingInfo.firstName} {orderData.shippingInfo.lastName}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {orderData.shippingInfo.address}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {orderData.shippingInfo.city}, {orderData.shippingInfo.state} - {orderData.shippingInfo.pincode}
                  </p>
                </div>
                
                <div className="p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1 flex items-center">
                    <CreditCard className="mr-2" size={14} />
                    Payment Method
                  </p>
                  <p className="text-white capitalize">
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
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Ordered Items
          </h3>
          
          <div className="space-y-4">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-8 py-4"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/shop">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 bg-transparent"
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
          className="text-center mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
        >
          <p className="text-lg text-blue-200 mb-2">
            We appreciate your business! 
          </p>
          <p className="text-gray-400">
            You'll receive an email confirmation with tracking details shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;