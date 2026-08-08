import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { flushSync } from 'react-dom';
import './Header.css';

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [glassMode, setGlassMode] = useState(() => {
    return localStorage.getItem('glassMode') === 'true';
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-glass', 'true');
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('glassMode', 'true');
  }, []);

  /* Toggle handlers preserved below
  const toggleGlassMode = () => setGlassMode((prev) => !prev);
  const toggleTheme = (e) => { ... };
  */

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span style={{ color: 'var(--primary)' }}>Tour Sikkim </span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>With </span>
          <span style={{ color: 'var(--accent)' }}>Shiva</span>
        </Link>
        
        <AnimatePresence>
          {(!isMobile || isMenuOpen) && (
            <motion.nav 
              className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
              variants={isMobile ? navVariants : {}}
              initial={isMobile ? "hidden" : false}
              animate={isMobile ? "visible" : false}
              exit={isMobile ? "exit" : false}
            >
              <motion.div variants={isMobile ? linkVariants : {}}><NavLink to="/places" className="nav-link" onClick={closeMenu}>Places</NavLink></motion.div>
              <motion.div variants={isMobile ? linkVariants : {}}><NavLink to="/culture" className="nav-link" onClick={closeMenu}>Culture</NavLink></motion.div>
              <motion.div variants={isMobile ? linkVariants : {}}><NavLink to="/nature" className="nav-link" onClick={closeMenu}>Nature</NavLink></motion.div>
              <motion.div variants={isMobile ? linkVariants : {}}><NavLink to="/food" className="nav-link" onClick={closeMenu}>Food</NavLink></motion.div>
              <motion.div variants={isMobile ? linkVariants : {}}><NavLink to="/travel-info" className="nav-link" onClick={closeMenu}>Travel Info</NavLink></motion.div>
              <motion.div variants={isMobile ? linkVariants : {}}><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink></motion.div>
            </motion.nav>
          )}
        </AnimatePresence>

        <div className="header-actions">
          <a href="tel:+919775228928" className="header-contact">
            <Phone size={18} />
            <span className="phone-text">+91 9775228928</span>
          </a>
          
          {/* Glass Mode Toggle - Commented out per request
          <button 
            className={`glass-toggle ${glassMode ? 'active' : ''}`} 
            onClick={toggleGlassMode} 
            aria-label="Toggle Glass Mode"
            title={glassMode ? "Glass Mode: ON" : "Glass Mode: OFF"}
          >
            <Sparkles size={19} />
          </button>
          */}

          {/* Dark Mode Switch Toggle - Commented out per request
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          */}

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
