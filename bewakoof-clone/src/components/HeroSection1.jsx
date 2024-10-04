import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function HeroSection1() {
  const { products } = useContext(DataContext); // Get products from context

  // Pick the first 25 products, regardless of category
  const selectedProducts = products.slice(0, 25);

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center m-5">Our Best Collection for You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {selectedProducts.map((product) => (
          <div key={product._id} className="text-center p-2 border rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <p className="text-sm">{product.description}</p>
            <p className="text-lg font-semibold">₹{product.current_price}</p>
            <p className="line-through text-gray-500">₹{product.original_price}</p>
            <p className="text-green-500">{product.discount} off</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection1;