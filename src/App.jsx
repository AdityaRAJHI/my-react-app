import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <button className="cart-button" onClick={toggleCart}>
          🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </header>
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />

      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <header className="header">
          <div className="search-container">
            <div className="search-bar">
              <button className="search-icon">🔍</button>
              <input
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="filter-icon">⚡</button>
            </div>
            <div className="search-suggestions">
              <span className="suggestion-tag">Pizza</span>
              <span className="suggestion-tag">Burger</span>
              <span className="suggestion-tag">Sushi</span>
              <span className="suggestion-tag">Salad</span>
            </div>
          </div>
        </header>

        <div className="page-container">
          <Routes>
            <Route 
              path="/" 
              element={<Home addToCart={addToCart} />} 
            />
            <Route 
              path="/categories" 
              element={<Categories addToCart={addToCart} />} 
            />
            <Route path="/orders" element={<Orders cartItems={cart} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <h2>Your Cart</h2>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={toggleCart}>Close Cart</button>
        </div>
      )}
    </div>
  );
}

export default App;