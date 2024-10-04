import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function PlusSize() {
  const { products, addToWishlist, addToCart } = useContext(DataContext);
  const [sortOrder, setSortOrder] = useState('low-to-high'); // State to manage sorting order
  const [selectedCategory, setSelectedCategory] = useState('all'); // State to manage category filter
  const navigate = useNavigate();

  // Filter products with _id between 78 and 96 and apply category filter
  const plusSizeProducts = products.filter(product => {
    return product._id >= 78 && product._id <= 96 && 
           (selectedCategory === 'all' || product.category === selectedCategory);
  });

  // Function to sort products by price
  const sortedProducts = plusSizeProducts.sort((a, b) => {
    return sortOrder === 'low-to-high' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Plus Size Products</h1>

      {/* Sort Options */}
      <div className="mb-4">
        <label className="mr-2">Sort by Price:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="mr-2">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      {/* Displaying Filtered and Sorted Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product._id} className="border p-4 rounded shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="font-bold text-xl">{product.price}₹</p>

              <button
                onClick={() => {
                  addToCart(product);
                  alert(`${product.name} has been added to the cart!`);
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2 mr-2"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  addToWishlist(product);
                  alert(`${product.name} has been added to the wishlist!`);
                }}
                className="bg-red-500 text-white py-2 px-4 rounded mt-2"
              >
                Add to Wishlist
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default PlusSize;