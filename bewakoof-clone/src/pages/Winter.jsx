import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

function Winter() {
  const { winterwear, addToWishlist, addToCart, wishlist, removeFromWishlist } = useContext(DataContext);
  const [wishlistIcons, setWishlistIcons] = useState({});
  const [sortOrder, setSortOrder] = useState('lowToHigh'); // Default sorting order
  const [cartMessages, setCartMessages] = useState({}); // To store cart messages

  // Sort products based on selected order
  const sortedWinterwear = [...winterwear].sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOrder === 'highToLow') {
      return b.price - a.price;
    }
    return 0; // No sorting if sortOrder is not recognized
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
    <div className='mx-4'>
      {/* Sorting Options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)} 
          className="border p-2 rounded"
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedWinterwear.map(product => (
          <div key={product._id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="font-bold">{product.price}₹</p>
            <p className="line-through text-gray-500">{product.original_price}₹</p>
            <p className="text-green-600 font-bold">{product.discount} Off</p>

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

export default Winter;