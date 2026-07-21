import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

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

const Nature = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/nature-hero.jpg"
        title="Untamed Wilderness"
        subtitle="From subtropical forests to high-altitude deserts, discover nature in its purest form."
        height="50vh"
      />

      <section className="section container">
        <motion.div 
          className="grid grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/nature/gurudongmar.jpg"
              title="Gurudongmar Lake"
              location="North Sikkim"
              description="One of the highest lakes in the world at 17,800 ft. Its sacred waters remain partially unfrozen even in the harshest winters, surrounded by snow-clad peaks."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/nature/khangchendzonga.jpg"
              title="Flora & Fauna"
              location="Khangchendzonga National Park"
              description="A UNESCO World Heritage site, home to the elusive Snow Leopard, Red Panda, and over 500 species of orchids. A paradise for trekkers and wildlife enthusiasts."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/nature/nathula.jpg"
              title="Nathu La Pass"
              location="East Sikkim"
              description="The historic Silk Route pass connecting India and Tibet. At 14,140 ft, experience freezing winds, thin air, and awe-inspiring alpine geography."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              image="/images/nature/waterfalls.jpg"
              title="Waterfalls & Hot Springs"
              location="Across Sikkim"
              description="Marvel at the thunderous Seven Sister Waterfalls or take a therapeutic dip in the natural hot springs (Tsa-Chu) of Reshi and Yumthang."
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Nature;
