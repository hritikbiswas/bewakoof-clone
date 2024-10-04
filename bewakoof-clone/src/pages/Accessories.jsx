import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function Accessories() {
  const { accessoriesList, addToWishlist, addToCart, wishlist, removeFromWishlist } = useContext(DataContext);
  const navigate = useNavigate();
  
  const [filterProduct, setFilterProduct] = useState('all'); // For filtering by product type
  const [priceRange, setPriceRange] = useState([0, 10000]); // For filtering price range
  const [cartMessages, setCartMessages] = useState({}); // To store cart messages
  const [wishlistIcons, setWishlistIcons] = useState({}); // For wishlist icons

  // Filter accessories based on product type and price range
  const filteredAccessories = accessoriesList.filter(product => {
    const isInPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const isMatchingProduct = filterProduct === 'all' || product.product.toLowerCase() === filterProduct;
    return isInPriceRange && isMatchingProduct;
  });

  // Handle adding/removing from wishlist
  const handleWishlistToggle = (product) => {
    if (wishlist.some(item => item._id === product._id)) {
      setWishlistIcons(prev => ({ ...prev, [product._id]: false }));
      removeFromWishlist(product._id);
    } else {
      setWishlistIcons(prev => ({ ...prev, [product._id]: true }));
      addToWishlist(product);
    }
  };

  // Handle adding to cart and show confirmation
  const handleAddToCart = (product) => {
    addToCart(product);
    setCartMessages(prev => ({ ...prev, [product._id]: 'Added to Cart' }));
    setTimeout(() => {
      setCartMessages(prev => ({ ...prev, [product._id]: '' })); // Clear message after 2 seconds
    }, 2000);
  };

  return (
    <div>
      {/* Product Type Filter */}
      <div className="mb-4">
        <label className="mr-2">Filter by Product:</label>
        <select 
          value={filterProduct} 
          onChange={(e) => setFilterProduct(e.target.value)} 
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="shoe">Shoes</option>
          <option value="cap">Caps</option>
          <option value="bag">Bags</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="mr-2">Price Range:</label>
        <input 
          type="number" 
          value={priceRange[0]} 
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="border p-2 rounded mr-2" 
          placeholder="Min Price"
        />
        <input 
          type="number" 
          value={priceRange[1]} 
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="border p-2 rounded" 
          placeholder="Max Price"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAccessories.map(product => (
          <div key={product._id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="font-bold">{product.price}₹</p>

            {/* Add to Cart Button */}
            <button 
              onClick={() => handleAddToCart(product)} 
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            >
              Add to Cart
            </button>
            {cartMessages[product._id] && (
              <p className="text-green-500 mt-1">{cartMessages[product._id]}</p>
            )}

            <div className="flex items-center mt-2">
              {/* Conditional Rendering for Wishlist Icon */}
              {wishlistIcons[product._id] ? (
                <img 
                  src='https://pngimg.com/uploads/heart/heart_PNG704.png' 
                  alt="In Wishlist" 
                  className="w-6 h-6 cursor-pointer" 
                  onClick={() => handleWishlistToggle(product)} 
                />
              ) : (
                <i 
                  className="fa-regular fa-heart text-xl cursor-pointer" 
                  onClick={() => handleWishlistToggle(product)} 
                ></i>
              )}
              <p className="ml-2">{wishlist.some(item => item._id === product._id) ? 'In Wishlist' : 'Add to Wishlist'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;