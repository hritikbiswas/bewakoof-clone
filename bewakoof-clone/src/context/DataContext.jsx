import { createContext, useState } from "react";
import { products,sliders,winterwear,accessoriesList,pluseSize } from "../assets/assets2";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [wishlist, setWishlist] = useState([]); // Wishlist state
  const [cart, setCart] = useState([]); // Cart state

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    if (!wishlist.some(item => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item._id !== id));
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    if (!cart.some(item => item._id === product._id)) {
      setCart([...cart, product]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  const value = {
    products,
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
    sliders,
    winterwear,
    accessoriesList,
    pluseSize,
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;