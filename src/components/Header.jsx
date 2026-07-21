import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Header.css';

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span style={{ color: 'var(--primary)' }}>Tour Sikkim </span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>With </span>
          <span style={{ color: 'var(--accent)' }}>Shiva</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/places" className="nav-link" onClick={closeMenu}>Places</NavLink>
          <NavLink to="/culture" className="nav-link" onClick={closeMenu}>Culture</NavLink>
          <NavLink to="/nature" className="nav-link" onClick={closeMenu}>Nature</NavLink>
          <NavLink to="/food" className="nav-link" onClick={closeMenu}>Food</NavLink>
          <NavLink to="/travel-info" className="nav-link" onClick={closeMenu}>Travel Info</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="header-actions">
          <a href="tel:+919775228928" className="header-contact">
            <Phone size={18} />
            <span className="phone-text">+91 9775228928</span>
          </a>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
