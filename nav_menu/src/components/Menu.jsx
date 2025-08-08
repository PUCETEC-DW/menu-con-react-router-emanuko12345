import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        {isOpen && <span></span>}
        <button onClick={toggleMenu}>
          <span className="arrow-icon">{isOpen ? '▲' : '▼'}</span>
        </button>
      </div>
    
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <span className="icon">🏠</span> {isOpen && 'Home'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <span className="icon">ℹ️</span> {isOpen && 'Acerca de'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <span className="icon">📊</span> {isOpen && 'Dashboard'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <span className="icon">⚙️</span> {isOpen && 'Configuración'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;