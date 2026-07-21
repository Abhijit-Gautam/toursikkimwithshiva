import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = ({ image, title, subtitle, height = '60vh', children }) => {
  return (
    <div 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(var(--overlay), var(--overlay)), url(${image})`,
        minHeight: height 
      }}
    >
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children && <div className="hero-actions">{children}</div>}
      </motion.div>
    </div>
  );
};

export default HeroSection;
