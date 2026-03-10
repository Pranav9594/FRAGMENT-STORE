// Products with duplicate images that need unique URLs

const productsNeedingNewImages = [
  // Wireless Earbuds duplicates
  { id: 71, name: 'Bluetooth Tracker', category: 'accessories', search: 'bluetooth-tracker-device' },
  { id: 75, name: 'Smart Key Finder', category: 'accessories', search: 'key-finder-device' },
  { id: 79, name: 'Wireless Earbuds Pro', category: 'accessories', search: 'premium-wireless-earbuds' },
  
  // Phone accessories duplicates
  { id: 61, name: 'Phone Ring Holder', category: 'accessories', search: 'phone-ring-holder' },
  { id: 73, name: 'PopSocket Grip', category: 'accessories', search: 'popsocket-phone-grip' },
  
  // Cable duplicates
  { id: 62, name: 'Cable Organizer', category: 'accessories', search: 'cable-organizer-clips' },
  
  // Car/Phone mount duplicates
  { id: 19, name: 'Smartphone 128GB', category: 'electronics', search: 'modern-smartphone-device' },
  { id: 72, name: 'Car Air Freshener', category: 'accessories', search: 'car-air-freshener' },
  
  // Charging pad duplicates
  { id: 24, name: 'Gaming Chair RGB', category: 'electronics', search: 'gaming-chair-rgb' },
  { id: 69, name: 'Travel Pillow Memory', category: 'accessories', search: 'travel-neck-pillow' },
  
  // Desk organizer duplicates
  { id: 65, name: 'Wrist Rest Pad', category: 'accessories', search: 'keyboard-wrist-rest' },
  { id: 70, name: 'Desk Organizer Set', category: 'accessories', search: 'desk-organizer-bamboo' },
  
  // Fitness tracker duplicates
  { id: 80, name: 'Fitness Tracker Band', category: 'accessories', search: 'fitness-tracker-band' },
  
  // Smartwatch duplicates
  { id: 83, name: 'Smartwatch Series Pro', category: 'accessories', search: 'smartwatch-cellular' },
  
  // Fashion duplicates
  { id: 63, name: 'Keychain Multi-tool', category: 'accessories', search: 'keychain-multitool' },
  { id: 86, name: 'Designer Handbag', category: 'accessories', search: 'designer-leather-handbag' },
  
  { id: 64, name: 'Phone Stand Desktop', category: 'accessories', search: 'phone-stand-desk' },
  
  // More duplicates found
  { id: 35, name: 'Tank Top', category: 'fashion', search: 'mens-tank-top' },
  { id: 36, name: 'Graphic Hoodie', category: 'fashion', search: 'graphic-hoodie-streetwear' },
  { id: 38, name: 'Polo Shirt Classic', category: 'fashion', search: 'polo-shirt-classic' },
  { id: 39, name: 'Sweatpants Joggers', category: 'fashion', search: 'jogger-sweatpants' },
  { id: 41, name: 'Athletic Shorts Pro', category: 'fashion', search: 'athletic-shorts-sports' },
  { id: 44, name: 'Henley Long Sleeve', category: 'fashion', search: 'henley-shirt-long-sleeve' },
  { id: 48, name: 'Dress Shirt Formal', category: 'fashion', search: 'formal-dress-shirt' },
  { id: 51, name: 'Premium Denim Jacket', category: 'fashion', search: 'denim-jacket-vintage' },
  { id: 53, name: 'Tailored Trousers', category: 'fashion', search: 'tailored-trousers-mens' },
  { id: 55, name: 'Silk Tie Collection', category: 'fashion', search: 'silk-tie-collection' },
  { id: 56, name: 'Luxury Tuxedo', category: 'fashion', search: 'luxury-tuxedo-formal' },
  { id: 58, name: 'Designer Blazer', category: 'fashion', search: 'designer-blazer-mens' },
  { id: 60, name: 'Custom Suit Premium', category: 'fashion', search: 'custom-tailored-suit' },
  { id: 74, name: 'Laptop Sleeve 15"', category: 'accessories', search: 'laptop-sleeve-case' },
  { id: 78, name: 'Travel Backpack 30L', category: 'accessories', search: 'travel-backpack-hiking' },
  { id: 82, name: 'Luxury Briefcase', category: 'accessories', search: 'leather-briefcase-executive' },
  { id: 84, name: 'Professional Camera Bag', category: 'accessories', search: 'camera-bag-professional' },
  { id: 85, name: 'Diamond Watch Luxury', category: 'accessories', search: 'luxury-diamond-watch' },
  { id: 87, name: 'Platinum Cufflinks', category: 'accessories', search: 'platinum-cufflinks' },
  { id: 88, name: 'Luxury Pen Set', category: 'accessories', search: 'luxury-fountain-pen' },
  { id: 89, name: 'Swiss Watch Automatic', category: 'accessories', search: 'swiss-automatic-watch' },
  { id: 90, name: 'Limited Edition Accessories', category: 'accessories', search: 'luxury-accessories-collection' }
];

console.log(`\nTotal products needing unique images: ${productsNeedingNewImages.length}\n`);
console.log('Suggested Unsplash URLs:\n');

productsNeedingNewImages.forEach(product => {
  const url = `https://images.unsplash.com/photo-${Math.random().toString(36).substring(2, 15)}?w=500&h=500&fit=crop&q=${product.search}`;
  console.log(`ID ${product.id}: ${product.name}`);
  console.log(`   Search: https://unsplash.com/s/photos/${product.search}`);
  console.log('');
});

console.log('\nInstructions:');
console.log('1. Visit each Unsplash search URL');
console.log('2. Find appropriate image');
console.log('3. Copy image URL in format: https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop');
console.log('4. Update mock.js with new URLs');
