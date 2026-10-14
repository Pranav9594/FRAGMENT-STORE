import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Link to="/" className="footer-logo">
          <img src="/images/fragment-store-logo.svg" alt="Fragment Store logo" />
          <span>FRAGMENT STORE</span>
        </Link>
        <p>Thoughtfully selected essentials for work, life, and everywhere in between.</p>
      </div>

      <div className="footer-column">
        <h3>Explore</h3>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop all</Link>
        <Link to="/shop?category=electronics">Electronics</Link>
        <Link to="/shop?category=accessories">Accessories</Link>
      </div>
      <div className="footer-column">
        <h3>Customer care</h3>
        <Link to="/shop">Shipping information</Link>
        <Link to="/shop">Returns & refunds</Link>
        <Link to="/cart">Your cart</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
      <div className="footer-column footer-contact">
        <h3>Stay connected</h3>
        <span><Mail size={15} /> Newsletter signup on the homepage</span>
        <a href="mailto:support@fragmentstore.com">Email support@fragmentstore.com</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Fragment Store. All rights reserved.</span>
      <span>Secure checkout · Prices in INR</span>
    </div>
  </footer>
);

export default Footer;
