import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import BubbleBackground from '../components/BubbleBackground';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { products, categories } from '../data/mock';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-5000':
          filtered = filtered.filter(product => product.price < 5000);
          break;
        case '5000-25000':
          filtered = filtered.filter(product => product.price >= 5000 && product.price <= 25000);
          break;
        case '25000-100000':
          filtered = filtered.filter(product => product.price >= 25000 && product.price <= 100000);
          break;
        case 'above-100000':
          filtered = filtered.filter(product => product.price > 100000);
          break;
        default:
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Explore Our Products
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Discover amazing deals on cutting-edge technology, fashion, and premium accessories
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 text-lg bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 rounded-xl"
            />
          </div>

          {/* Filter Toggle for Mobile */}
          <div className="lg:hidden mb-6">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full border-gray-700 text-white bg-gray-800/50 hover:bg-gray-700/50 py-4 text-lg rounded-xl"
            >
              <Filter size={20} className="mr-2" />
              Filters
              <ChevronDown size={20} className="ml-2" />
            </Button>
          </div>

          {/* Filters */}
          <motion.div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
              showFilters ? 'block' : 'hidden lg:grid'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: showFilters ? 1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white py-4 rounded-xl">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 rounded-xl">
                <SelectItem value="all" className="text-white hover:bg-gray-700">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem 
                    key={category.id} 
                    value={category.id}
                    className="text-white hover:bg-gray-700"
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white py-4 rounded-xl">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 rounded-xl">
                <SelectItem value="all" className="text-white hover:bg-gray-700">All Prices</SelectItem>
                <SelectItem value="under-5000" className="text-white hover:bg-gray-700">Under ₹5,000</SelectItem>
                <SelectItem value="5000-25000" className="text-white hover:bg-gray-700">₹5,000 - ₹25,000</SelectItem>
                <SelectItem value="25000-100000" className="text-white hover:bg-gray-700">₹25,000 - ₹1,00,000</SelectItem>
                <SelectItem value="above-100000" className="text-white hover:bg-gray-700">Above ₹1,00,000</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort Filter */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white py-4 rounded-xl">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 rounded-xl">
                <SelectItem value="name" className="text-white hover:bg-gray-700">Name</SelectItem>
                <SelectItem value="price-low" className="text-white hover:bg-gray-700">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="text-white hover:bg-gray-700">Price: High to Low</SelectItem>
                <SelectItem value="rating" className="text-white hover:bg-gray-700">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12 justify-center"
        >
          <motion.button
            onClick={() => setSelectedCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
            }`}
          >
            All Products ({products.length})
          </motion.button>
          {categories.map(category => {
            const count = products.filter(p => p.category === category.id).length;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                {category.name} ({count})
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-gray-400 text-lg font-medium">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-24"
          >
            <div className="text-8xl mb-8">🔍</div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              No products found
            </h3>
            <p className="text-gray-400 text-xl mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or browse different categories
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-xl"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Shop;