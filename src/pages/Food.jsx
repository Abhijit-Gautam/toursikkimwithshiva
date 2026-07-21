import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

const Food = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/food-hero.jpg"
        title="Himalayan Flavors"
        subtitle="Taste the authentic blend of Tibetan, Nepalese, and indigenous culinary traditions."
        height="50vh"
      />

      <section className="section container">
        <div className="grid grid-cols-3">
          <Card 
            image="/images/food/momos.jpg"
            title="Momos"
            description="The undisputed king of Himalayan street food. Steamed or fried dumplings stuffed with meat, cheese, or vegetables, served with a fiery red chili chutney."
          />
          <Card 
            image="/images/food/thukpa.jpg"
            title="Thukpa"
            description="A hearty, steaming bowl of noodle soup packed with fresh vegetables, meat, and warming spices. The perfect comfort food for chilly mountain evenings."
          />
          <Card 
            image="/images/food/gundruk.jpg"
            title="Gundruk & Kinema"
            description="Experience true local flavor with Gundruk (fermented leafy greens) and Kinema (fermented soybeans), staples in traditional Sikkimese households."
          />
        </div>
      </section>
    </>
  );
};

export default Food;
