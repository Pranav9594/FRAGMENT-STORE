import React, { useState } from 'react';
import { ArrowRight, Box, Check, Gift, Headphones, LockKeyhole, Mail, RotateCcw, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/mock';
import ProductCard from '../components/ProductCard';

const categoryTiles = [
  { id: 'electronics', name: 'Electronics', image: products.find((product) => product.category === 'electronics')?.image },
  { id: 'fashion', name: 'Fashion', image: products.find((product) => product.category === 'fashion')?.image },
  { id: 'accessories', name: 'Accessories', image: products.find((product) => product.category === 'accessories')?.image },
];

const Home = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const featuredProducts = products.filter((product) => product.originalPrice > product.price).slice(0, 5);
  const heroProduct = products.find((product) => product.category === 'accessories') || products[0];

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thanks. Captured locally for now; connect a subscription service to send updates.');
    setEmail('');
  };

  return (
    <main className="home-page">
      <div className="announcement-bar">WELCOME TO FRAGMENT STORE <span>QUALITY PRODUCTS, GREAT PRICES</span></div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Curated for everyday living</span>
            <h1>Everything.<br />For everyone.<em>Small finds. Big delight.</em></h1>
            <p className="hero-description">Discover useful, beautiful products for your everyday. Thoughtfully chosen, fairly priced, and ready to make life a little better.</p>
            <div className="hero-actions"><Link to="/shop" className="primary-button">Shop now <ArrowRight size={15} /></Link><a href="#categories" className="secondary-button">Explore collections</a></div>
          </div>
          <div className="hero-visual"><img className="hero-image" src={heroProduct.image} alt={heroProduct.name} /><div className="hero-badge">Save up to <strong>30%</strong> on selected finds</div></div>
        </div>
      </section>
      <section className="container benefits" aria-label="Shopping benefits">
        <div className="benefit"><span className="benefit-icon" aria-hidden="true"><Truck size={19} /></span><div className="benefit-copy"><strong>Free shipping</strong><span>On orders above ₹999</span></div></div>
        <div className="benefit"><span className="benefit-icon" aria-hidden="true"><RotateCcw size={19} /></span><div className="benefit-copy"><strong>Returns support</strong><span>Simple help when you need it</span></div></div>
        <div className="benefit"><span className="benefit-icon" aria-hidden="true"><LockKeyhole size={19} /></span><div className="benefit-copy"><strong>Secure checkout</strong><span>Your cart stays protected</span></div></div>
      </section>
      <section className="section container" id="categories">
        <div className="section-heading"><div><span className="eyebrow">Find your next favorite</span><h2>Browse by category</h2></div><Link className="section-link" to="/shop">View all <ArrowRight size={14} /></Link></div>
        <div className="category-grid">{categoryTiles.map((category) => <Link to={`/shop?category=${category.id}`} className="category-tile" key={category.id}><img src={category.image} alt="" /><span className="category-label">{category.name}<small>Shop the edit <ArrowRight size={12} /></small></span></Link>)}</div>
      </section>
      <section className="section container" id="trending">
        <div className="section-heading"><div><span className="eyebrow">Popular right now</span><h2>Trending products</h2></div><Link className="section-link" to="/shop">View all products <ArrowRight size={14} /></Link></div>
        <div className="products-grid">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="container promo-strip" aria-label="Store benefits">
        <div className="promo-card"><Box size={28} /><div><h3>Free shipping</h3><p>On orders over ₹999</p></div></div>
        <div className="promo-card"><Gift size={28} /><div><h3>Special offers</h3><p>Fresh finds, honest prices</p></div></div>
        <div className="promo-card"><Headphones size={28} /><div><h3>Friendly support</h3><p>We are here to help</p></div></div>
      </section>
      <section className="container trust-newsletter" id="about">
        <div className="trust-copy"><span className="trust-mark"><ShieldCheck size={26} /></span><div><h3>Made for better everyday shopping</h3><p>Real products, clear pricing, and a checkout designed to stay simple.</p></div></div>
        <div className="newsletter" id="contact"><span className="eyebrow">Stay in the loop</span><h3>New finds, delivered occasionally.</h3><p>No noise. Just useful product drops and offers from Fragment Store.</p><form className="newsletter-form" onSubmit={handleSubscribe}><Mail size={16} /><input aria-label="Email address" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" /><button type="submit">SUBSCRIBE</button></form>{message && <p className="newsletter-message" role="status"><Check size={14} /> {message}</p>}</div>
      </section>
    </main>
  );
};

export default Home;
