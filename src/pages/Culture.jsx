import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const ImageBox = ({ src, alt }) => {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div style={{ width: '100%', height: '260px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--secondary)', color: 'var(--text-muted)' }}>
        <span>{alt} Photo</span>
      </div>
    );
  }
  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)}
      style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
    />
  );
};

const Culture = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/culture-hero.jpg"
        title="Living Traditions"
        subtitle="Discover a rich tapestry of Buddhism, vibrant festivals, and indigenous heritage."
        height="75vh"
      />

      <section className="section container">
        <motion.div 
          className="grid grid-cols-2" 
          style={{ alignItems: 'center', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xxl)' }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-md)' }}>Monasteries & Monks</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)', lineHeight: 1.7, color: 'var(--text)' }}>
              Sikkim is a spiritual haven, home to over 200 monasteries. The air resonates with the deep chants of monks, the spinning of prayer wheels, and the fluttering of colorful prayer flags. 
            </p>
            <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>
              Visit the grand <strong style={{ color: 'var(--accent)' }}>Rumtek Monastery</strong>, the seat of the Karmapa, or the ancient <strong style={{ color: 'var(--accent)' }}>Pemayangtse Monastery</strong>. Witnessing a morning prayer session is an experience that transcends religion and instills profound peace.
            </p>
          </div>
          <div className="glass-card" style={{ padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-lg)' }}>
            <ImageBox src="/images/culture/monasteries.jpg" alt="Monks in Sikkim" />
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2" 
          style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="glass-card" style={{ order: 2, padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-md)' }}>Festivals & Dance</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)', lineHeight: 1.7, color: 'var(--text)' }}>
              The cultural calendar is dotted with vibrant festivals like Losar (Tibetan New Year), Saga Dawa, and Pang Lhabsol.
            </p>
            <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>
              The highlight of many monastic festivals is the <strong style={{ color: 'var(--accent)' }}>Cham Dance</strong>—a mesmerizing masked dance performed by monks to invoke deities and drive away evil spirits, accompanied by traditional trumpets and drums.
            </p>
          </div>
          <div className="glass-card" style={{ order: 1, padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-lg)' }}>
            <ImageBox src="/images/culture/mask-dance.jpg" alt="Traditional Mask Dance" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Culture;
