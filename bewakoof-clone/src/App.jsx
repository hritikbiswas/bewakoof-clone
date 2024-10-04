import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Men from './pages/Men'
import Women from './pages/Women'
import Winter from './pages/Winter'
import Sneakers from './pages/Sneakers'
import BewakoofAir from './pages/BewakoofAir'
import PlusSize from './pages/PlusSize'
import OffSale from './pages/OffSale'
import Navbar from './components/Navbar';

function App() {
  return (
    
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accessories' element={<Accessories />} />
      <Route path='/login' element={<Login />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/men' element={<Men />} />
      <Route path='/women' element={<Women />} />
      <Route path='/winter' element={<Winter />} />
      <Route path='/sneakers' element={<Sneakers />} />
      <Route path='/bewakoof-air' element={<BewakoofAir />} />
      <Route path='/off-sale' element={<OffSale />} />
      <Route path='/plus-size' element={<PlusSize />} />
</Routes>
    </>
  );
}

export default App;