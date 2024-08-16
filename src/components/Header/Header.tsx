import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <span className="paw-icon">🐾</span>
        <h1>AGRAT MOHAMMED</h1>
      </div>
      <nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><Link to="/#my-works">My Works</Link></li>
              <li><a href="#wallpapers">Wallpapers</a></li>
           
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;