import Banner from '../components/Banner/Banner';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Reviews from '../components/Reviews/Reviews';
import Hero from '../components/Hero/Hero';

import aboutBanner from '../assets/images/KIDSSSS.png';

const AboutPage = () => {
  return (
    <>
      <Banner image={aboutBanner} />
      <AboutInfo />
      <Reviews />
      <Hero
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
    </>
  );
};

export default AboutPage;
