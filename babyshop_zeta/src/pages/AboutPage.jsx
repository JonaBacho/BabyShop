import Banner from '../components/Banner/Banner.jsx';
import AboutInfo from '../components/AboutInfo/AboutInfo.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';
import Hero from '../components/Hero/Hero.jsx';

import aboutBanner from '../assets/images/KIDSSSS.png';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';


const AboutPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
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
      <Footer/>
    </>
  );
};

export default AboutPage;
