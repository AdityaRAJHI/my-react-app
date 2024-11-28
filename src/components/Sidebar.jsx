import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ isSidebarOpen, toggleSidebar, cartItemCount, setShowCart }) {
  return (
    <aside className={`sidebar ${!isSidebarOpen ? 'closed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <span className="logo-icon">🍽️</span>
          <h1 className="logo-text">Zep2food</h1>
        </div>
        <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isSidebarOpen ? '◀' : '▶'}
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">🏠</span>
          <span className={`nav-text ${!isSidebarOpen ? 'hidden' : ''}`}>Dashboard</span>
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">📋</span>
          <span className={`nav-text ${!isSidebarOpen ? 'hidden' : ''}`}>Categories</span>
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">🛍️</span>
          <span className={`nav-text ${!isSidebarOpen ? 'hidden' : ''}`}>Orders</span>
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">👤</span>
          <span className={`nav-text ${!isSidebarOpen ? 'hidden' : ''}`}>Profile</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">⚙️</span>
          <span className={`nav-text ${!isSidebarOpen ? 'hidden' : ''}`}>Settings</span>
        </NavLink>
      </nav>

      {/* Remove Cart Button */}
    </aside>
  );
}

export default Sidebar;
