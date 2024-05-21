import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions.js';

import Product from '../components/Product/Product.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Title from '../components/Title/Title.jsx';
import Hero from '../components/Hero/Hero.jsx';
import ClientSlider from '../components/ClientSlider/ClientSlider.jsx';

import accessoriesBanner from '../assets/images/BannerAccesories.png';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const AccessoriesPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const accessoriesProducts = products.filter((product) => product.title === 'accessories');

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={accessoriesBanner} />
      <section className="py-5">
        <div className="container">
          <Title title="KIDS ACCESSORIES" />
          <div className="row">
            {accessoriesProducts.map((product) => {
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
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
      <ClientSlider />
    </>
  );
};

export default AccessoriesPage;
