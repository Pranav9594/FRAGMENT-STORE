import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Eye, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { addToCart } from '../data/mock';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // Add to cart with animation delay
    setTimeout(() => {
      addToCart(product);
      setIsAddingToCart(false);
      
      // Trigger cart update event
      window.dispatchEvent(new Event('cartUpdated'));
      
      // Show success animation
      const event = new CustomEvent('showToast', {
        detail: { message: `${product.name} added to cart!`, type: 'success' }
      });
      window.dispatchEvent(event);
    }, 300);
  };

  return (
    <>
      <motion.div
        className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Discount Badge */}
          {discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
              -{discount}%
            </Badge>
          )}

          {/* Quick Actions */}
          <motion.div
            className="absolute top-3 right-3 flex flex-col space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-black/30 text-white hover:bg-red-500'
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            </motion.button>
            
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-blue-500 transition-colors"
            >
              <Eye size={16} />
            </motion.button>
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Add to Cart Button */}
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg"
            >
              <motion.div
                animate={isAddingToCart ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ShoppingCart size={16} className="mr-2" />
              </motion.div>
              {isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </Button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <p className="text-gray-400 text-xs mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-2">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-gray-500 line-through text-sm">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-400">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-3xl font-bold text-white">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xl text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={handleAddToCart}
                      disabled={isAddingToCart}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 py-6 text-lg"
                    >
                      <ShoppingCart size={20} className="mr-2" />
                      {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;