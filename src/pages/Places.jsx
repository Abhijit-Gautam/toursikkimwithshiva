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

const destinations = [
  {
    id: 'gangtok',
    title: 'Gangtok',
    location: 'East Sikkim',
    highlight: 'Capital City',
    image: '/images/places/gangtok.jpg',
    description: 'Perched on a cloud-cloaked ridge in East Sikkim, Gangtok seamlessly blends alpine charm with modern mountain culture. Visitors can stroll down pedestrian-only MG Marg, ride the scenic ropeway, and explore historic monasteries like Rumtek while enjoying breathtaking views of Mount Khangchendzonga.',
    bestSeason: 'March to May & October to December',
    minimumStay: '2 - 3 Days'
  },
  {
    id: 'pelling',
    title: 'Pelling',
    location: 'West Sikkim',
    highlight: 'Khangchendzonga Views',
    image: '/images/places/pelling.jpg',
    description: 'Located in the serene West Sikkim district, Pelling offers some of the closest and most magnificent views of the snow-capped Khangchendzonga range. Home to the sacred Khecheopalri Lake, Pemayangtse Monastery, and India’s first glass skywalk, it is a sanctuary for nature lovers and spiritual seekers.',
    bestSeason: 'March to May & October to Mid-December',
    minimumStay: '2 Days'
  },
  {
    id: 'yumthang-valley',
    title: 'Yumthang Valley',
    location: 'North Sikkim',
    highlight: 'Valley of Flowers',
    image: '/images/places/yumthang-valley.jpg',
    description: 'Famed as the "Valley of Flowers", Yumthang sits at an elevation of 11,693 feet. Surrounded by majestic snow-draped peaks, the valley erupts into a vibrant sea of colors in spring with over 24 species of wild rhododendrons, soothing hot springs, and winding glacial streams.',
    bestSeason: 'March to May (Blooms) & November to February (Snow)',
    minimumStay: '2 Days (via Lachung)'
  },
  {
    id: 'gurudongmar-lake',
    title: 'Gurudongmar Lake',
    location: 'North Sikkim',
    highlight: 'High-Altitude Lake',
    image: '/images/places/gurudongmar-lake.jpg',
    description: 'Situated at an extraordinary altitude of 17,800 feet near the Indo-China border, Gurudongmar Lake is among the highest freshwater lakes on Earth. Revered by Buddhists, Hindus, and Sikhs alike, its crystal-clear turquoise waters remain partially unfrozen even during sub-zero winters.',
    bestSeason: 'April to May & October to November',
    minimumStay: '2 Days (via Lachen)'
  },
  {
    id: 'ravangla',
    title: 'Ravangla',
    location: 'South Sikkim',
    highlight: 'Buddha Park & Peace',
    image: '/images/places/ravangla.jpg',
    description: 'Tucked away between Gangtok and Pelling in South Sikkim, Ravangla is renowned for Tathagata Tsal (Buddha Park), featuring a grand 130-foot statue of Lord Buddha framed by Himalayan peaks. It serves as a tranquil retreat for birdwatching, monastery visits, and exploring nearby tea gardens.',
    bestSeason: 'March to May & September to November',
    minimumStay: '1 - 2 Days'
  },
  {
    id: 'nathula-pass',
    title: 'Nathula Pass',
    location: 'East Sikkim',
    highlight: 'Historic Silk Route',
    image: '/images/places/nathula-pass.jpg',
    description: 'Standing tall at 14,140 feet on the Indo-China border, Nathula Pass was a critical mountain passage on the ancient Silk Route. Visitors can experience the bracing high-altitude air, witness the international border post, and pay homage at the legendary Baba Harbhajan Singh Temple.',
    bestSeason: 'April to June & October to November',
    minimumStay: '1 Day (Day trip from Gangtok)'
  },
  {
    id: 'lachen-lachung',
    title: 'Lachen & Lachung',
    location: 'North Sikkim',
    highlight: 'Alpine Gateways',
    image: '/images/places/lachen-lachung.jpg',
    description: 'Twin high-mountain settlements nestled deep in the North Sikkim wilderness. Lachen acts as the gateway to the sacred Gurudongmar Lake and Chopta Valley, while Lachung leads to Yumthang Valley and Zero Point. Both villages offer authentic mountain hospitality in traditional homestays.',
    bestSeason: 'March to June & October to December',
    minimumStay: '3 Days (Full North Sikkim Circuit)'
  }
];

const Places = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/places-hero.jpg"
        title="Iconic Destinations"
        subtitle="Explore the breathtaking jewels of Sikkim, from vibrant hill stations to pristine alpine sanctuaries."
        height="75vh"
      />

      <section className="section container">
        <motion.div 
          className="grid grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {destinations.map((dest) => (
            <motion.div key={dest.id} variants={itemVariants}>
              <Card 
                image={dest.image}
                title={dest.title}
                location={dest.location}
                highlight={dest.highlight}
                description={dest.description}
                bestSeason={dest.bestSeason}
                minimumStay={dest.minimumStay}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Places;
