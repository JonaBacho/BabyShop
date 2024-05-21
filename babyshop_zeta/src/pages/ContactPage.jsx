import ContactUs from '../components/ContactUs/ContactUs.jsx';
import Banner from '../components/Banner/Banner.jsx';

import contactAbout from '../assets/images/CONTACTUS.png';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={contactAbout} />
      <ContactUs />
      <Footer />

    </>
  );
};

export default ContactPage;
