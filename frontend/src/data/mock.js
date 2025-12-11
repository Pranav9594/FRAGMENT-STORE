// Mock data for FRAGMENT STORE e-commerce website

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt' },
  { id: 'accessories', name: 'Accessories', icon: 'Watch' }
];

export const products = [
  // Electronics (30 products - Low to High price with discounts)
  {
    id: 1,
    name: 'Wireless Earbuds Basic',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.1,
    reviews: 324,
    description: 'Budget-friendly wireless earbuds with decent sound quality'
  },
  {
    id: 2,
    name: 'Bluetooth Speaker Mini',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.2,
    reviews: 567,
    description: 'Compact portable speaker with powerful bass'
  },
  {
    id: 3,
    name: 'USB-C Cable 3ft',
    price: 399,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.0,
    reviews: 1234,
    description: 'Fast charging USB-C cable with durable braided design'
  },
  {
    id: 4,
    name: 'Phone Case Clear',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.3,
    reviews: 892,
    description: 'Crystal clear protective case with shock absorption'
  },
  {
    id: 5,
    name: 'Power Bank 10000mAh',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.4,
    reviews: 1567,
    description: 'Portable charger with fast charging and LED display'
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 2499,
    originalPrice: 3299,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.5,
    reviews: 743,
    description: 'Ergonomic wireless mouse with long battery life'
  },
  {
    id: 7,
    name: 'Screen Protector Pack',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.2,
    reviews: 654,
    description: 'Tempered glass screen protector pack of 2'
  },
  {
    id: 8,
    name: 'Car Phone Mount',
    price: 1199,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.3,
    reviews: 432,
    description: 'Universal car mount with 360-degree rotation'
  },
  {
    id: 9,
    name: 'Bluetooth Headphones',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.6,
    reviews: 2156,
    description: 'Over-ear headphones with active noise cancellation'
  },
  {
    id: 10,
    name: 'Webcam HD 1080p',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.5,
    reviews: 987,
    description: 'Full HD webcam with auto-focus and built-in microphone'
  },
  {
    id: 11,
    name: 'Gaming Keyboard RGB',
    price: 7999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 1234,
    description: 'Mechanical gaming keyboard with RGB backlighting'
  },
  {
    id: 12,
    name: 'Wireless Charger Pad',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.4,
    reviews: 876,
    description: '15W fast wireless charging pad for all devices'
  },
  {
    id: 13,
    name: 'Smart Band Fitness',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.5,
    reviews: 1567,
    description: 'Fitness tracker with heart rate monitor and sleep tracking'
  },
  {
    id: 14,
    name: 'USB Hub 4-Port',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.3,
    reviews: 543,
    description: '4-port USB hub with high-speed data transfer'
  },
  {
    id: 15,
    name: 'Laptop Stand Adjustable',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.6,
    reviews: 765,
    description: 'Ergonomic laptop stand with multiple height adjustments'
  },
  {
    id: 16,
    name: 'Tablet 10-inch',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.4,
    reviews: 432,
    description: 'Android tablet with 64GB storage and full HD display'
  },
  {
    id: 17,
    name: 'Smart Watch Series',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 1923,
    description: 'Advanced smartwatch with GPS and health monitoring'
  },
  {
    id: 18,
    name: 'Gaming Mouse Pro',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1563297007-0686b2bd6fdb?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 654,
    description: 'Professional gaming mouse with 16000 DPI and RGB lighting'
  },
  {
    id: 19,
    name: 'Smartphone 128GB',
    price: 19999,
    originalPrice: 24999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.5,
    reviews: 2847,
    description: 'Latest smartphone with triple camera and fast processor'
  },
  {
    id: 20,
    name: 'Wireless Headset Premium',
    price: 12999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.6,
    reviews: 1234,
    description: 'Premium wireless headset with studio-quality sound'
  },
  {
    id: 21,
    name: 'Action Camera 4K',
    price: 18999,
    originalPrice: 24999,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 876,
    description: '4K action camera with waterproof case and stabilization'
  },
  {
    id: 22,
    name: 'Portable SSD 1TB',
    price: 9999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 543,
    description: 'Ultra-fast portable SSD with USB 3.2 Gen 2 interface'
  },
  {
    id: 23,
    name: 'Smart Speaker Voice',
    price: 6999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.5,
    reviews: 1567,
    description: 'Voice-controlled smart speaker with premium sound'
  },
  {
    id: 24,
    name: 'Gaming Chair RGB',
    price: 25999,
    originalPrice: 34999,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.6,
    reviews: 321,
    description: 'Ergonomic gaming chair with RGB lighting and lumbar support'
  },
  {
    id: 25,
    name: 'Drone with Camera',
    price: 35999,
    originalPrice: 45999,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 432,
    description: 'Professional drone with 4K camera and GPS return home'
  },
  {
    id: 26,
    name: 'VR Headset Gaming',
    price: 28999,
    originalPrice: 39999,
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 654,
    description: 'Immersive VR headset with wireless connectivity'
  },
  {
    id: 27,
    name: 'MacBook Air M3',
    price: 114900,
    originalPrice: 119900,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.9,
    reviews: 567,
    description: '13-inch laptop with M3 chip and all-day battery life'
  },
  {
    id: 28,
    name: 'Gaming Laptop RTX',
    price: 89999,
    originalPrice: 109999,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 789,
    description: 'High-performance gaming laptop with RTX graphics'
  },
  {
    id: 29,
    name: 'OLED TV 55-inch',
    price: 149999,
    originalPrice: 179999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 432,
    description: '4K OLED smart TV with perfect blacks and vibrant colors'
  },
  {
    id: 30,
    name: 'Professional Camera Kit',
    price: 199999,
    originalPrice: 249999,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
    category: 'electronics',
    rating: 4.9,
    reviews: 234,
    description: 'Professional DSLR camera with multiple lenses and accessories'
  },

  // Fashion (30 products - Low to High price with discounts)
  {
    id: 31,
    name: 'Basic Cotton T-Shirt',
    price: 499,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.2,
    reviews: 1234,
    description: 'Comfortable cotton t-shirt in multiple colors'
  },
  {
    id: 32,
    name: 'Sports Socks Pack',
    price: 399,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.1,
    reviews: 567,
    description: 'Pack of 3 comfortable sports socks'
  },
  {
    id: 33,
    name: 'Baseball Cap',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1575428652377-a36d235dc22d?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.3,
    reviews: 432,
    description: 'Adjustable baseball cap with embroidered logo'
  },
  {
    id: 34,
    name: 'Casual Shorts',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1506629905607-105e69ac5489?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.2,
    reviews: 876,
    description: 'Comfortable casual shorts for everyday wear'
  },
  {
    id: 35,
    name: 'Tank Top',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.0,
    reviews: 654,
    description: 'Breathable tank top perfect for summer'
  },
  {
    id: 36,
    name: 'Graphic Hoodie',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviews: 1123,
    description: 'Trendy graphic hoodie with soft fleece lining'
  },
  {
    id: 37,
    name: 'Denim Jeans Slim',
    price: 2999,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.4,
    reviews: 987,
    description: 'Slim-fit denim jeans in classic blue wash'
  },
  {
    id: 38,
    name: 'Polo Shirt Classic',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.3,
    reviews: 654,
    description: 'Classic polo shirt in premium cotton pique'
  },
  {
    id: 39,
    name: 'Sweatpants Joggers',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.4,
    reviews: 543,
    description: 'Comfortable jogger sweatpants with elastic waistband'
  },
  {
    id: 40,
    name: 'Button-Up Shirt',
    price: 2299,
    originalPrice: 3299,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviews: 432,
    description: 'Crisp button-up shirt perfect for casual or formal wear'
  },
  {
    id: 41,
    name: 'Athletic Shorts Pro',
    price: 1599,
    originalPrice: 2299,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.6,
    reviews: 765,
    description: 'Performance athletic shorts with moisture-wicking fabric'
  },
  {
    id: 42,
    name: 'Cardigan Knit',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.4,
    reviews: 321,
    description: 'Soft knit cardigan with button closure'
  },
  {
    id: 43,
    name: 'Chino Pants',
    price: 2799,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviews: 567,
    description: 'Versatile chino pants in modern slim fit'
  },
  {
    id: 44,
    name: 'Henley Long Sleeve',
    price: 2199,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.3,
    reviews: 432,
    description: 'Classic henley with long sleeves and button placket'
  },
  {
    id: 45,
    name: 'Bomber Jacket',
    price: 4999,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.6,
    reviews: 654,
    description: 'Stylish bomber jacket with ribbed cuffs and hem'
  },
  {
    id: 46,
    name: 'Cargo Pants Utility',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.4,
    reviews: 543,
    description: 'Utility cargo pants with multiple pockets'
  },
  {
    id: 47,
    name: 'Wool Sweater',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.7,
    reviews: 321,
    description: 'Premium wool sweater with ribbed knit pattern'
  },
  {
    id: 48,
    name: 'Dress Shirt Formal',
    price: 2999,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviews: 765,
    description: 'Formal dress shirt with French cuffs and spread collar'
  },
  {
    id: 49,
    name: 'Leather Jacket Biker',
    price: 12999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.8,
    reviews: 432,
    description: 'Genuine leather biker jacket with asymmetric zipper'
  },
  {
    id: 50,
    name: 'Designer Suit Set',
    price: 24999,
    originalPrice: 34999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.9,
    reviews: 234,
    description: 'Two-piece designer suit with tailored fit'
  },
  {
    id: 51,
    name: 'Premium Denim Jacket',
    price: 7999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.6,
    reviews: 567,
    description: 'Premium denim jacket with vintage wash and distressing'
  },
  {
    id: 52,
    name: 'Cashmere Scarf',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.7,
    reviews: 321,
    description: 'Luxurious cashmere scarf in multiple colors'
  },
  {
    id: 53,
    name: 'Tailored Trousers',
    price: 6999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviews: 432,
    description: 'Professionally tailored trousers with perfect fit'
  },
  {
    id: 54,
    name: 'Designer Coat Winter',
    price: 18999,
    originalPrice: 26999,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.8,
    reviews: 234,
    description: 'Luxury winter coat with down filling and fur trim'
  },
  {
    id: 55,
    name: 'Silk Tie Collection',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.6,
    reviews: 543,
    description: 'Set of 3 premium silk ties in classic patterns'
  },
  {
    id: 56,
    name: 'Luxury Tuxedo',
    price: 35999,
    originalPrice: 49999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.9,
    reviews: 156,
    description: 'Black-tie tuxedo with satin lapels and bow tie'
  },
  {
    id: 57,
    name: 'Cashmere Sweater',
    price: 12999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.8,
    reviews: 287,
    description: '100% cashmere sweater with classic crew neck'
  },
  {
    id: 58,
    name: 'Designer Blazer',
    price: 15999,
    originalPrice: 22999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.7,
    reviews: 321,
    description: 'Designer blazer with modern slim fit and notch lapels'
  },
  {
    id: 59,
    name: 'Luxury Overcoat',
    price: 28999,
    originalPrice: 39999,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 4.9,
    reviews: 178,
    description: 'Premium wool overcoat with classic double-breasted design'
  },
  {
    id: 60,
    name: 'Custom Suit Premium',
    price: 45999,
    originalPrice: 64999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'fashion',
    rating: 5.0,
    reviews: 89,
    description: 'Fully custom-tailored premium suit with finest materials'
  },

  // Accessories (30 products - Low to High price with discounts)
  {
    id: 61,
    name: 'Phone Ring Holder',
    price: 199,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.0,
    reviews: 1567,
    description: 'Universal phone ring holder with 360-degree rotation'
  },
  {
    id: 62,
    name: 'Cable Organizer',
    price: 299,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.1,
    reviews: 876,
    description: 'Silicone cable organizer set for desk organization'
  },
  {
    id: 63,
    name: 'Keychain Multi-tool',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.2,
    reviews: 654,
    description: 'Compact multi-tool keychain with 8 functions'
  },
  {
    id: 64,
    name: 'Phone Stand Desktop',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.3,
    reviews: 543,
    description: 'Adjustable phone stand for desk and bedside use'
  },
  {
    id: 65,
    name: 'Wrist Rest Pad',
    price: 899,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.2,
    reviews: 432,
    description: 'Ergonomic wrist rest pad for keyboard and mouse'
  },
  {
    id: 66,
    name: 'Pocket Wallet Slim',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.4,
    reviews: 765,
    description: 'Minimalist slim wallet with RFID protection'
  },
  {
    id: 67,
    name: 'Sunglasses Classic',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.3,
    reviews: 987,
    description: 'Classic aviator sunglasses with UV protection'
  },
  {
    id: 68,
    name: 'Sports Water Bottle',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.5,
    reviews: 1234,
    description: 'Insulated sports bottle with 24-hour temperature retention'
  },
  {
    id: 69,
    name: 'Travel Pillow Memory',
    price: 1499,
    originalPrice: 2299,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.4,
    reviews: 654,
    description: 'Memory foam travel pillow with washable cover'
  },
  {
    id: 70,
    name: 'Desk Organizer Set',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.6,
    reviews: 432,
    description: 'Bamboo desk organizer set with multiple compartments'
  },
  {
    id: 71,
    name: 'Bluetooth Tracker',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.5,
    reviews: 876,
    description: 'Smart tracker for keys, wallet, and bags'
  },
  {
    id: 72,
    name: 'Car Air Freshener',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.2,
    reviews: 1567,
    description: 'Long-lasting car air freshener with premium fragrance'
  },
  {
    id: 73,
    name: 'PopSocket Grip',
    price: 799,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.3,
    reviews: 2134,
    description: 'Collapsible phone grip and stand with custom design'
  },
  {
    id: 74,
    name: 'Laptop Sleeve 15"',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.4,
    reviews: 543,
    description: 'Padded laptop sleeve with water-resistant material'
  },
  {
    id: 75,
    name: 'Smart Key Finder',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.6,
    reviews: 321,
    description: 'Bluetooth key finder with loud alarm and app control'
  },
  {
    id: 76,
    name: 'Premium Sunglasses',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.7,
    reviews: 432,
    description: 'Designer sunglasses with polarized lenses'
  },
  {
    id: 77,
    name: 'Leather Wallet Premium',
    price: 4999,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.8,
    reviews: 654,
    description: 'Handcrafted leather wallet with multiple card slots'
  },
  {
    id: 78,
    name: 'Travel Backpack 30L',
    price: 6999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.6,
    reviews: 765,
    description: 'Durable travel backpack with laptop compartment'
  },
  {
    id: 79,
    name: 'Wireless Earbuds Pro',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.7,
    reviews: 1234,
    description: 'Premium wireless earbuds with active noise cancellation'
  },
  {
    id: 80,
    name: 'Fitness Tracker Band',
    price: 7999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.5,
    reviews: 987,
    description: 'Advanced fitness tracker with heart rate and GPS'
  },
  {
    id: 81,
    name: 'Designer Watch Steel',
    price: 15999,
    originalPrice: 22999,
    image: 'https://images.unsplash.com/photo-1523170335258-f5c6c6bd6ebc?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.8,
    reviews: 432,
    description: 'Stainless steel watch with Swiss movement'
  },
  {
    id: 82,
    name: 'Luxury Briefcase',
    price: 12999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.7,
    reviews: 234,
    description: 'Executive leather briefcase with combination lock'
  },
  {
    id: 83,
    name: 'Smartwatch Series Pro',
    price: 24999,
    originalPrice: 32999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.8,
    reviews: 876,
    description: 'Advanced smartwatch with cellular connectivity'
  },
  {
    id: 84,
    name: 'Professional Camera Bag',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.6,
    reviews: 321,
    description: 'Weatherproof camera bag with customizable dividers'
  },
  {
    id: 85,
    name: 'Diamond Watch Luxury',
    price: 89999,
    originalPrice: 124999,
    image: 'https://images.unsplash.com/photo-1594576662017-c6ec04be6d36?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.9,
    reviews: 89,
    description: 'Luxury watch with diamond-encrusted bezel'
  },
  {
    id: 86,
    name: 'Designer Handbag',
    price: 45999,
    originalPrice: 64999,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.9,
    reviews: 156,
    description: 'Designer leather handbag with gold hardware'
  },
  {
    id: 87,
    name: 'Platinum Cufflinks',
    price: 35999,
    originalPrice: 49999,
    image: 'https://images.unsplash.com/photo-1594576662017-c6ec04be6d36?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.8,
    reviews: 67,
    description: 'Handcrafted platinum cufflinks with precious stones'
  },
  {
    id: 88,
    name: 'Luxury Pen Set',
    price: 18999,
    originalPrice: 26999,
    image: 'https://images.unsplash.com/photo-1594576662017-c6ec04be6d36?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 4.7,
    reviews: 123,
    description: 'Premium fountain pen set in gift box'
  },
  {
    id: 89,
    name: 'Swiss Watch Automatic',
    price: 125999,
    originalPrice: 169999,
    image: 'https://images.unsplash.com/photo-1594576662017-c6ec04be6d36?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 5.0,
    reviews: 45,
    description: 'Swiss-made automatic watch with sapphire crystal'
  },
  {
    id: 90,
    name: 'Limited Edition Accessories',
    price: 199999,
    originalPrice: 279999,
    image: 'https://images.unsplash.com/photo-1594576662017-c6ec04be6d36?w=500&h=500&fit=crop',
    category: 'accessories',
    rating: 5.0,
    reviews: 23,
    description: 'Exclusive limited edition luxury accessories collection'
  }
];

// Helper functions for cart management
export const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem('fragment-store-cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
};

export const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem('fragment-store-cart', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCartFromStorage();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  saveCartToStorage(cart);
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCartFromStorage();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const updateCartQuantity = (productId, quantity) => {
  const cart = getCartFromStorage();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    saveCartToStorage(cart);
  }
  
  return cart;
};

export const clearCart = () => {
  localStorage.removeItem('fragment-store-cart');
  return [];
};

export const getCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = (cartItems) => {
  return cartItems.reduce((count, item) => count + item.quantity, 0);
};