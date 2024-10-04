import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function Men() {
  const { products, addToWishlist, addToCart } = useContext(DataContext);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortPrice, setSortPrice] = useState('');
  const [wishlistStates, setWishlistStates] = useState({}); // State to manage heart icon states

  // Filter products by 'men' category and selected filters
  const menProducts = products.filter(product => product.category === 'men');

  const filteredProducts = menProducts
    .filter(product => {
      if (selectedCategory) {
        return product.product === selectedCategory;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortPrice === 'low-to-high') {
        return a.current_price - b.current_price;
      } else if (sortPrice === 'high-to-low') {
        return b.current_price - a.current_price;
      }
      return 0;
    });

  // Function to toggle heart state
  const toggleWishlist = (product) => {
    const isAlreadyInWishlist = wishlistStates[product._id];
    if (!isAlreadyInWishlist) {
      addToWishlist(product);
      setWishlistStates((prev) => ({ ...prev, [product._id]: true }));
    } else {
      setWishlistStates((prev) => ({ ...prev, [product._id]: false }));
      // Optionally, remove from wishlist if needed
    }
  };

  return (
    <div className="flex flex-wrap">
      {/* Filter Section (20%) */}
      <div className="w-full md:w-1/5 p-4 bg-gray-100">
        <h2 className="font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Category</h3>
          <label>
            <input
              type="checkbox"
              value="Trouser"
              checked={selectedCategory === 'Trouser'}
              onChange={() => setSelectedCategory('Trouser')}
            />
            Trouser
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="T-shirt"
              checked={selectedCategory === 'T-shirt'}
              onChange={() => setSelectedCategory('T-shirt')}
            />
            T-shirt
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Shirt"
              checked={selectedCategory === 'Shirt'}
              onChange={() => setSelectedCategory('Shirt')}
            />
            Shirt
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Hoodie"
              checked={selectedCategory === 'Hoodie'}
              onChange={() => setSelectedCategory('Hoodie')}
            />
            Hoodie
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Sneakers"
              checked={selectedCategory === 'Sneakers'}
              onChange={() => setSelectedCategory('Sneakers')}
            />
            Sneakers
          </label>
        </div>

        {/* Price Sorting */}
        <div className="mb-4">
          <h3 className="font-semibold">Sort by Price</h3>
          <label>
            <input
              type="radio"
              name="priceSort"
              value="low-to-high"
              checked={sortPrice === 'low-to-high'}
              onChange={() => setSortPrice('low-to-high')}
            />
            Low to High
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="priceSort"
              value="high-to-low"
              checked={sortPrice === 'high-to-low'}
              onChange={() => setSortPrice('high-to-low')}
            />
            High to Low
          </label>
        </div>
      </div>

      {/* Product Listing Section (80%) */}
      <div className="w-full md:w-4/5 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product._id} className="border p-2 rounded relative">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">₹{product.current_price}</p>
              <p className="line-through text-gray-500">₹{product.original_price}</p>
              <p className="text-green-500">{product.discount} off</p>

              {/* Wishlist and Cart Buttons */}
              <div className="absolute top-2 right-2 flex flex-col">
                <button onClick={() => toggleWishlist(product)} className="text-red-500">
                  {wishlistStates[product._id] ? (
                    <img src="https://pngimg.com/uploads/heart/heart_PNG704.png" alt="Heart" className="w-6" />
                  ) : (
                    <i className="fa-regular fa-heart text-xl"></i>
                  )}
                </button>
                <button onClick={() => addToCart(product)} className="text-blue-500 text-xl mt-2">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Men;