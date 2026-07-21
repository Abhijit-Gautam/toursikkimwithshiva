import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const Culture = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/culture-hero.jpg"
        title="Living Traditions"
        subtitle="Discover a rich tapestry of Buddhism, vibrant festivals, and indigenous heritage."
        height="50vh"
      />

      <section className="section container">
        <motion.div 
          className="grid grid-cols-2" 
          style={{ alignItems: 'center' }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div>
            <h2 style={{ color: 'var(--secondary)' }}>Monasteries & Monks</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              Sikkim is a spiritual haven, home to over 200 monasteries. The air resonates with the deep chants of monks, the spinning of prayer wheels, and the fluttering of colorful prayer flags. 
            </p>
            <p>
              Visit the grand <strong>Rumtek Monastery</strong>, the seat of the Karmapa, or the ancient <strong>Pemayangtse Monastery</strong>. Witnessing a morning prayer session is an experience that transcends religion and instills profound peace.
            </p>
          </div>
          <div>
            <img src="/images/culture/monasteries.jpg" alt="Monks in Sikkim" style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2" 
          style={{ alignItems: 'center', marginTop: 'var(--spacing-xl)' }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div style={{ order: 2 }}>
            <h2 style={{ color: 'var(--secondary)' }}>Festivals & Dance</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              The cultural calendar is dotted with vibrant festivals like Losar (Tibetan New Year), Saga Dawa, and Pang Lhabsol.
            </p>
            <p>
              The highlight of many monastic festivals is the <strong>Cham Dance</strong>—a mesmerizing masked dance performed by monks to invoke deities and drive away evil spirits, accompanied by traditional trumpets and drums.
            </p>
          </div>
          <div style={{ order: 1 }}>
            <img src="/images/culture/mask-dance.jpg" alt="Traditional Mask Dance" style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Culture;
