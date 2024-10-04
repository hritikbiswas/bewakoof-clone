import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function Sneakers() {
  const { products, addToWishlist, addToCart, wishlist, removeFromWishlist } = useContext(DataContext);
  const navigate = useNavigate();

  const [filterProduct, setFilterProduct] = useState('all'); // Filter by product type (if needed)
  const [priceRange, setPriceRange] = useState([0, 10000]); // Filter by price range
  const [sortOrder, setSortOrder] = useState(''); // Sort by price (low-to-high or high-to-low)
  const [cartMessages, setCartMessages] = useState({}); // To show cart messages
  const [wishlistIcons, setWishlistIcons] = useState({}); // Wishlist toggle state

  // Filter sneakers based on price range and sorting order
  const filteredSneakers = products
    .filter(product => product.product.toLowerCase() === 'sneakers') // Only show sneakers
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]) // Filter by price range
    .sort((a, b) => {
      if (sortOrder === 'low-to-high') {
        return a.price - b.price; // Sort from low to high
      } else if (sortOrder === 'high-to-low') {
        return b.price - a.price; // Sort from high to low
      }
      return 0;
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
      setCartMessages(prev => ({ ...prev, [product._id]: '' }));
    }, 2000); // Clear message after 2 seconds
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sneakers</h1>

     

      {/* Price Sorting Filter */}
      <div className="mb-4">
        <label className="mr-2">Sort By:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Displaying Filtered Sneakers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSneakers.length > 0 ? (
          filteredSneakers.map(product => (
            <div key={product._id} className="border p-4 rounded shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="font-bold text-xl">₹{product.price}</p>

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

              {/* Wishlist Toggle */}
              <div className="flex items-center mt-2">
                {wishlistIcons[product._id] ? (
                  <img
                    src="https://pngimg.com/uploads/heart/heart_PNG704.png"
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
          ))
        ) : (
          <p className="text-gray-500">No sneakers found.</p>
        )}
      </div>
    </div>
  );
}

export default Sneakers;