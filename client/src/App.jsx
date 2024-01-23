import React from 'react'
import "./App.scss"
import { HelmetProvider } from "react-helmet-async"
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Favourite from './pages/Favourite'
import Detail from './pages/Detail'
import WishlistProvider from './context/WishlistContext'
import CartProvider from './context/BasketContext'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
      <HelmetProvider>
          <WishlistProvider>
            <CartProvider>
            <div><Toaster/></div>
              <Routes>
                <Route path='/' element={<MainLayout />}>
                  <Route index element={<Home />}/>
                  <Route path='/admin' element={<Admin />}/>
                  <Route path='/cart' element={<Cart />}/>
                  <Route path='/favourite' element={<Favourite />}/>
                  <Route path='/:id' element={<Detail />}/>
                </Route>
              </Routes>
            </CartProvider>
          </WishlistProvider>
      </HelmetProvider>
  )
}

export default App
