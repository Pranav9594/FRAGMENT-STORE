import React, { useMemo, useState } from 'react';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/mock';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const searchMatch = !searchQuery || `${product.name} ${product.description}`.toLowerCase().includes(searchQuery.toLowerCase());
      const priceMatch = priceRange === 'all' || (priceRange === 'under-5000' && product.price < 5000) || (priceRange === '5000-25000' && product.price >= 5000 && product.price <= 25000) || (priceRange === '25000-100000' && product.price >= 25000 && product.price <= 100000) || (priceRange === 'above-100000' && product.price > 100000);
      return categoryMatch && searchMatch && priceMatch;
    });
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [priceRange, searchQuery, selectedCategory, sortBy]);

  return (
    <main className="shop-page">
      <div className="shop-hero container"><span className="eyebrow">The complete edit</span><h1>Shop all products</h1><p>Useful things, considered carefully. Browse the full Fragment Store collection.</p></div>
      <div className="container shop-content">
        <div className="shop-toolbar"><div className="shop-search"><Search size={17} /><input aria-label="Search products" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search products" /></div><button type="button" className="filter-toggle" onClick={() => setShowFilters(!showFilters)}><SlidersHorizontal size={16} /> Filters</button><span className="result-count">{filteredProducts.length} products</span></div>
        <div className={`shop-layout ${showFilters ? 'filters-open' : ''}`}>
          <aside className="shop-filters"><div className="filter-heading"><strong>Refine</strong><Filter size={15} /></div><label>Category<select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}><option value="all">All categories</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label><label>Price<select value={priceRange} onChange={(event) => setPriceRange(event.target.value)}><option value="all">All prices</option><option value="under-5000">Under ₹5,000</option><option value="5000-25000">₹5,000 - ₹25,000</option><option value="25000-100000">₹25,000 - ₹1,00,000</option><option value="above-100000">Above ₹1,00,000</option></select></label><label>Sort by<select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option value="featured">Featured</option><option value="name">Name</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Highest rated</option></select></label></aside>
          <section className="shop-results" aria-live="polite">{filteredProducts.length ? <div className="shop-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-results"><h2>No products found</h2><p>Try a different search or category.</p><button type="button" className="primary-button" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setPriceRange('all'); }}>Clear filters</button></div>}</section>
        </div>
      </div>
    </main>
  );
};

export default Shop;
