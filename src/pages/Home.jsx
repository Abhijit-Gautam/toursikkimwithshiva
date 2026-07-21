import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

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

const Home = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/home-hero.jpg"
        title="Discover the Mystical Sikkim"
        subtitle="Journey into a land of plunging valleys, ancient monasteries, and the majestic Himalayas."
        height="85vh"
      >
        <Link to="/places" className="btn btn-accent">Explore Destinations</Link>
        <Link to="/contact" className="btn btn-primary">Plan Your Trip</Link>
      </HeroSection>

      <motion.section 
        className="section container text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={itemVariants}
      >
        <h2>
          Welcome to <span style={{ color: 'var(--primary)' }}>Tour Sikkim </span><span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>With </span><span style={{ color: 'var(--accent)' }}>Shiva</span>
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Nestled in the lap of the Himalayas, Sikkim is a sanctuary of peace, spirituality, and untamed natural beauty. 
          Whether you seek the thrill of high-altitude treks, the tranquility of Buddhist monasteries, or simply a retreat 
          from the chaos of city life, we craft journeys that touch your soul.
        </p>
      </motion.section>

      <section className="section container" style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
        <h2 className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>Featured Experiences</h2>
        <motion.div 
          className="grid grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/home/spiritual-trails.jpg"
              title="Spiritual Trails"
              location="Rumtek & Pemayangtse"
              description="Immerse yourself in the chanting of monks and the profound peace of ancient Tibetan Buddhist monasteries."
              highlight="Culture"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/home/alpine-wonders.jpg"
              title="Alpine Wonders"
              location="Yumthang Valley"
              description="Witness the breathtaking 'Valley of Flowers' bursting with rhododendrons against snow-capped peaks."
              highlight="Nature"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/home/culinary-delights.jpg"
              title="Culinary Delights"
              location="Gangtok Streets"
              description="Savor authentic Himalayan flavors from steaming momos to hearty thukpa in local eateries."
              highlight="Food"
            />
          </motion.div>
        </motion.div>
        <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
          <Link to="/places" className="btn btn-primary">View All Experiences</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
