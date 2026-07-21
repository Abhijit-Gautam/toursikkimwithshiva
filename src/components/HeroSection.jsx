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
      <div className="hero-content animate-fade-in-up">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children && <div className="hero-actions">{children}</div>}
      </div>
    </div>
  );
};

export default HeroSection;
