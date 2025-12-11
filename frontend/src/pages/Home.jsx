import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products } from '../data/mock';
import BubbleBackground from '../components/BubbleBackground';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Quick delivery across India'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your data is safe with us'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders above ₹999'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Live Bubble Background */}
      <BubbleBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  FRAGMENT STORE
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Discover cutting-edge products with lightning-fast delivery and secure payments. Your next favorite item is just a click away in our futuristic shopping experience.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/shop">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-10 py-6 text-xl font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center"
                    >
                      <ShoppingBag className="mr-3" size={24} />
                      Start Shopping
                    </motion.div>
                  </Button>
                </Link>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-6 text-xl font-semibold bg-transparent hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Features
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose FRAGMENT STORE?
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-lg shadow-blue-500/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Featured Products
              </h2>
              <p className="text-gray-400 text-xl">
                Discover our most popular and innovative items
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-semibold text-white text-lg mb-3 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-500 line-through text-lg">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/shop">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-10 py-6 text-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Products
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl border border-blue-500/30 p-12 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join thousands of satisfied customers and discover what makes FRAGMENT STORE special.
              </p>
              <Link to="/shop">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-10 py-6 text-xl font-semibold shadow-xl shadow-cyan-500/30"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;