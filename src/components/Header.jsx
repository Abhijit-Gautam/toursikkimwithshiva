import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Moon, Sun } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

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
