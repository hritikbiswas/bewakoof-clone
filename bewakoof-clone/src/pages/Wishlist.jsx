import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Wishlist() {
    const { wishlist, removeFromWishlist } = useContext(DataContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {wishlist.map((item) => (
                        <div key={item._id} className="border rounded p-4">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-sm">{item.description}</p>
                            <p className="text-lg font-semibold">₹{item.current_price}</p>
                            <p className="line-through text-gray-500">₹{item.original_price}</p>
                            <p className="text-green-500">{item.discount} off</p>
                            <button className="bg-red-500 text-white px-2 py-1 rounded mt-2" onClick={() => removeFromWishlist(item._id)}>
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;