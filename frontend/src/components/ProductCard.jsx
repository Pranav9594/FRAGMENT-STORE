import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, X } from 'lucide-react';
import { addToCart } from '../data/mock';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const discount = product.originalPrice > product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    addToCart(product);
    window.dispatchEvent(new Event('cartUpdated'));
    window.dispatchEvent(new CustomEvent('showToast', { detail: { message: `${product.name} added to cart!`, type: 'success' } }));
  };

  return (
    <>
      <article className="product-card">
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} className="product-image" />
          {discount > 0 && <span className="product-discount">-{discount}%</span>}
          <button type="button" aria-label={`Add ${product.name} to wishlist`} className={`wishlist-button ${isLiked ? 'liked' : ''}`} onClick={() => setIsLiked(!isLiked)}><Heart size={17} fill={isLiked ? 'currentColor' : 'none'} /></button>
        </div>
        <div className="product-info">
          <button type="button" className="product-name" onClick={() => setIsModalOpen(true)}>{product.name}</button>
          <div className="product-rating"><span>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill={star <= Math.round(product.rating) ? 'currentColor' : 'none'} />)}</span><small>{product.rating} ({product.reviews})</small></div>
          <div className="product-price-row"><strong>₹{product.price.toLocaleString()}</strong>{discount > 0 && <del>₹{product.originalPrice.toLocaleString()}</del>}</div>
          <button type="button" className="product-cart-button" onClick={handleAddToCart}><ShoppingCart size={14} /> Add to cart</button>
        </div>
      </article>
      {isModalOpen && <div className="product-modal-backdrop" role="presentation" onClick={() => setIsModalOpen(false)}><div className="product-modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={(event) => event.stopPropagation()}><button type="button" className="modal-close" aria-label="Close product details" onClick={() => setIsModalOpen(false)}><X size={18} /></button><img src={product.image} alt={product.name} /><div><span className="eyebrow">{product.category}</span><h2>{product.name}</h2><p>{product.description}</p><div className="product-price-row"><strong>₹{product.price.toLocaleString()}</strong>{discount > 0 && <del>₹{product.originalPrice.toLocaleString()}</del>}</div><button type="button" className="primary-button" onClick={handleAddToCart}><ShoppingCart size={15} /> Add to cart</button></div></div></div>}
    </>
  );
};

export default ProductCard;
