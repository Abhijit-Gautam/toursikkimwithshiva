import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const TravelInfo = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/travel-info-hero.jpg"
        title="Essential Travel Info"
        subtitle="Everything you need to know to plan a seamless journey to the Himalayas."
        height="50vh"
      />

      <section className="section container">
        <motion.div 
          className="grid grid-cols-2" 
          style={{ gap: 'var(--spacing-xl)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          <motion.div variants={itemVariants}>
            <h3 style={{ color: 'var(--secondary)' }}>Permits & Regulations</h3>
            <p style={{ marginBottom: 'var(--spacing-md)' }}>
              Sikkim shares borders with three countries, making it a sensitive border state. Certain permits are required for entry and specific regions.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--spacing-lg)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Inner Line Permit (ILP):</strong> Required for all foreign nationals to enter Sikkim. It's easily obtainable at checkpoints like Rangpo or Melli.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Protected Area Permit (PAP):</strong> Required for everyone (including Indian nationals) to visit restricted areas like Tsomgo Lake, Nathu La, Gurudongmar Lake, and Yumthang Valley.</li>
            </ul>

            <h3 style={{ color: 'var(--secondary)' }}>Best Time to Visit</h3>
            <p style={{ marginBottom: 'var(--spacing-md)' }}>
              Sikkim has distinct seasons, each offering a unique experience:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Spring (March - May):</strong> Ideal for clear skies and blooming rhododendrons.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Autumn (Sept - Nov):</strong> Crisp air, fantastic views of the snow peaks, and major festivals.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Winter (Dec - Feb):</strong> Best for experiencing snow in higher altitudes. Pack heavy woolens!</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} style={{ backgroundColor: 'var(--surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(47, 107, 79, 0.15)' }}>
            <h3 style={{ color: 'var(--primary)' }}>Packing Checklist</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
              Mountain weather is unpredictable. Layering is the key to comfort.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="pack-1" readOnly checked style={{ accentColor: 'var(--primary)' }}/>
                <label htmlFor="pack-1">Warm base layers (thermal wear)</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="pack-2" readOnly checked style={{ accentColor: 'var(--primary)' }}/>
                <label htmlFor="pack-2">Fleece jacket and windproof outer shell</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="pack-3" readOnly checked style={{ accentColor: 'var(--primary)' }}/>
                <label htmlFor="pack-3">Sturdy, broken-in trekking shoes</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="pack-4" readOnly checked style={{ accentColor: 'var(--primary)' }}/>
                <label htmlFor="pack-4">Sunscreen (high SPF), sunglasses, and hat</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="pack-5" readOnly checked style={{ accentColor: 'var(--primary)' }}/>
                <label htmlFor="pack-5">Personal basic medical kit (for motion sickness/altitude)</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" id="pack-6" readOnly checked style={{ accentColor: 'var(--primary)' }}/>
                <label htmlFor="pack-6">Multiple photocopies of ID and passport size photos (for permits)</label>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </>
  );
};

export default TravelInfo;
