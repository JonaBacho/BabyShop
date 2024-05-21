import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions.js';

import Product from '../components/Product/Product.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Title from '../components/Title/Title.jsx';
import Hero from '../components/Hero/Hero.jsx';
import ClientSlider from '../components/ClientSlider/ClientSlider.jsx';

import shirtBanner from '../assets/images/tshirt-banner.jpg';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const ShirtsPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const shirtProducts = products.filter((product) => product.title === 'shirt');

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={shirtBanner} />
      <section className="py-5">
        <div className="container">
          <Title title="SHIRTS PRODUCTS" />
          <div className="row">
            {shirtProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-10 col-md-6 col-lg-4 mx-auto"
                >
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      />
      <Footer />

    </>
  );
};

export default ShirtsPage;
