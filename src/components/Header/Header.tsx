import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
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
              <li><a href="#works">Works</a></li>
              <li><a href="#wallpapers">Wallpapers</a></li>
              <li><a href="#posts">Posts</a></li>
              <li><a href="#uses">Uses</a></li>
              <li><a href="#view-source">View Source</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;