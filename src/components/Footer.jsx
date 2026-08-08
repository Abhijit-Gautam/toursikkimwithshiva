import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer dark-theme-footer">
      <div className="container grid footer-grid">
        <div className="footer-brand">
          <h2 className="brand-name">
            <span className="footer-primary-text">Tour Sikkim </span>
            <span className="footer-muted-text">With </span>
            <span className="footer-accent-text">Shiva</span>
          </h2>
          <p>Your trusted local partner for authentic and unforgettable travel experiences in the heart of Sikkim.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/places">Destinations</Link></li>
            <li><Link to="/culture">Culture & Heritage</Link></li>
            <li><Link to="/nature">Nature & Wildlife</Link></li>
            <li><Link to="/food">Local Cuisine</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Information</h3>
          <ul>
            <li><Link to="/travel-info">Travel Guides</Link></li>
            <li><Link to="/travel-info">Permit Info</Link></li>
            <li><Link to="/travel-info">Best Time to Visit</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <MapPin size={18} />
              <span>MG Marg, Gangtok, Sikkim 737101</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 9775228928</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@toursikkimwithshiva.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tour Sikkim With Shiva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
