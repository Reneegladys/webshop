import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Orders from './components/Orders';
import NotFound from './components/NotFound';
import { AuthProvider } from './context/AuthContext';
import CartProvider from './context/CartContext';
import Products from './pages/Products';
import Footer from './components/Footer';
import About from './components/About'; // Import the About section

const App = () => (
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><About /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);

export default App;
