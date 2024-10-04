import React, { useContext, useState } from 'react';
import { icons } from '../assets/assets2';
import { Link, NavLink } from 'react-router-dom';
import { DataContext } from '../context/DataContext';


function Navbar() {
  const [visible, setVisible] = useState(false);
  const { cart,products } = useContext(DataContext);
  const cartItemCount = cart.length;

  return (
    <>
      {/* SCREEN SIZE FOR LESS THAN lg */}
      <div className="block lg:hidden flex justify-between bg-[#FFC803] h-12 mb-4 relative">
        <div className="flex items-center mx-4 gap-2">
          <img src={icons.menu_icon} className="w-6" alt="" onClick={() => setVisible(true)} />
          <img src={icons.bewakoof_logo} alt="" className="w-10" />
        </div>

        <div className="flex items-center justify-between gap-5 mx-4">
          <Link to="login">LOGIN</Link>
          <Link to="wishlist">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to="cart" className="relative">
            <img src={icons.cart_icon} alt="" className="w-5" />
            {cartItemCount > 0 && ( 
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
                {cartItemCount}
              </p>
            )}
          </Link>
        </div>

        {/* Overlay and Menu */}
        {visible && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={() => setVisible(false)} // Close menu if overlay is clicked
            ></div>

            {/* Slide-in Menu */}
            
            <div className="absolute bg-white w-[90%] h-screen rounded-r-2xl z-20">
              <div className="flex justify-between m-10">
                <div>
                  <Link to="login" className="flex items-center" onClick={() => setVisible(false)}>
                    <img src={icons.profile_icon} className="w-7 items-center" alt="" />
                    <div className="ml-2">
                      <p>Hey There!</p>
                      <p className="text-blue-400">Login/Sign up</p>
                    </div>
                  </Link>
                  <Link to="men" className="flex items-center gap-1 mt-6" onClick={() => setVisible(false)}>
                    <img src={icons.men_icon} className="w-8" alt="" />
                    <p>MEN</p>
                  </Link>
                  <Link to="/women" className="flex items-center gap-1 mt-6" onClick={() => setVisible(false)}>
                    <img src={icons.lady_icon} className="w-8" alt="" />
                    <p>WOMEN</p>
                  </Link>
                  <Link to="winter" className="flex items-center gap-1 mt-6" onClick={() => setVisible(false)}>
                    <img src={icons.winter_icon} className="w-8" alt="" />
                    <p>WINTER</p>
                  </Link>
                  <Link to="/sneakers" className="flex items-center gap-1 mt-6" onClick={() => setVisible(false)}>
                    <img src={icons.asneaker} className="w-8" alt="" />
                    <p>SNEAKERS</p>
                  </Link>
                  <Link to="/off-sale" className="flex items-center gap-1 mt-6" onClick={() => setVisible(false)}>
                    <img src={icons.special_icon} className="w-8" alt="" />
                    <p>SPECIAL</p>
                  </Link>
                </div>

                <img src={icons.cross_icon} className="w-5 h-5 my-4" alt="" onClick={() => setVisible(false)} />
              </div>

              <div className="mt-6 flex items-center px-6 gap-2">
                <p className="text-gray-500">MY PROFILE</p>
                <hr className="w-[80%]" />
              </div>

              <div className="flex items-center gap-4 mx-6 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <img className="w-14" src={icons.account_logo} alt="" />
                  <p>My Account</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img className="w-14" src={icons.truck_logo} alt="" />
                  <p>My Orders</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img className="w-14" src={icons.wallet_logo} alt="" />
                  <p>My Wallet</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img className="w-14" src={icons.wish_logo} alt="" />
                  <p>My Wishlist</p>
                </div>
              </div>

              <div className="mt-6 flex items-center px-6 gap-2">
                <p className="text-gray-500">CONTACT US</p>
                <hr className="w-[75%]" />
              </div>

              <div className="flex flex-col mx-6">
                <p className="text-gray-700 mt-3">Help & Support</p>
                <p className="text-gray-700 mt-3">Feedback & Suggestions</p>
                <p className="text-gray-700 mt-3">Become a Seller</p>
              </div>

              <div className="mt-6 flex items-center px-6 gap-2">
                <p className="text-gray-500">ABOUT US</p>
                <hr className="w-[75%]" />
              </div>

              <div className="flex flex-col mx-6">
                <p className="text-gray-700 mt-3">Our Story</p>
                <p className="text-gray-700 mt-3">Fanbook</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* SCREEN SIZE FOR lg AND ABOVE */}
      <div className="hidden lg:flex justify-evenly items-center py-2 sticky top-0 bg-white z-50">
        {/* SECTION ONE */}
        <div className="flex gap-8">
          <Link to="/">
            <img src={icons.web_logo} className="w-36" alt="" />
          </Link>
          <ul className="hidden sm:flex gap-5 text-gray-800">
            <NavLink to="men" className="flex flex-col items-center gap-1">
              <p>MEN</p>
              <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
            </NavLink>
            <NavLink to="/women" className="flex flex-col items-center gap-1">
              <p>WOMEN</p>
              <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
            </NavLink>
            <NavLink to="/winter" className="flex flex-col items-center gap-1">
              <p>WINTERWEAR</p>
              <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
            </NavLink>
          </ul>
        </div>

        {/* SECTION TWO */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-9">
            <div
              className="h-10 w-56 bg-[#EAEAEA] rounded-md flex items-center gap-2 px-2 py-1"
              onClick={() => document.querySelector('input').focus()}
            >
              <img src={icons.search_icon} alt="" className="w-5" />
              <input
                type="text"
                className="border-none bg-[#EAEAEA] outline-none text-gray-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="flex items-center justify-between gap-5">
              <Link to="login">LOGIN</Link>
              <Link to="wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="cart" className="relative">
            <img src={icons.cart_icon} alt="" className="w-5" />
            {cartItemCount > 0 && ( 
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
                {cartItemCount}
              </p>
            )}
          </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="hidden lg:block w-full m-1" />

      {/* SECOND NAVBAR */}
      <div className="bg-white flex justify-between mx-4 py-4 overflow-x-auto whitespace-nowrap gap-5 text-lg lg:text-sm">
        <NavLink to="/men" className="text-base sm:text-sm">
          MEN     
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />   
          </NavLink>
        <NavLink to="/women" className="text-base sm:text-sm">
          WOMEN
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        <NavLink to="/winter" className="text-base sm:text-sm">
          WINTERWEAR
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        <NavLink to="/accessories" className="text-base sm:text-sm">
          ACCESSORIES
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        <NavLink to="/bewakoof-air" className="text-base sm:text-sm">
          BEWAKOOF AIR 
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        <NavLink to="/off-sale" className="text-base sm:text-sm">
          OFF SALE
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        <NavLink to="/sneakers" className="text-base sm:text-sm">
          SNEAKERS
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        <NavLink to="/plus-size" className="text-base sm:text-sm">
          PLUS SIZE
          <hr className="w-3/4 border-none h-[3.5px] bg-yellow-500 hidden" />
        </NavLink>
        
      </div>
    </>
  );
}

export default Navbar;