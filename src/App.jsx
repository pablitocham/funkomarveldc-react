import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart'
import SuperHero from './Components/Pages/SuperHero';
import Index from './Components/Pages/Index';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/super-hero' element={<SuperHero/>} />
          <Route path='*' element={<h1>404 NOT FOUND </h1>} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App