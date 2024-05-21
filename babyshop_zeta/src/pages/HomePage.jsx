import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import axiosClient from '../axios-client.js';

import { fetchProducts } from '../redux/products/products_actions.js';
import image_product from './shoes.jpg';

import MainBanner from '../components/MainBanner/MainBanner.jsx';
import Categories from '../components/Categories/Categories.jsx';
import BestProducts from '../components/BestProducts/BestProducts.jsx';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts.jsx';
import Hero from '../components/Hero/Hero.jsx';
import ClientSlider from '../components/ClientSlider/ClientSlider.jsx';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';
import { fetchProducts } from '../redux/products/products_actions';

import MainBanner from '../components/MainBanner/MainBanner';
import Categories from '../components/Categories/Categories';
import BestProducts from '../components/BestProducts/BestProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';
import Loading from '../components/Loading/Loading';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('home/produits');
        const data = response.data.data;
        const transformedData = data.map(item => ({
          id: item.codePro,
          image: item.imageUrl,
          name: item.nomPro,
          price: item.prix,
          oldPrice: item.ancienPrix,
          stars: item.etoile
        }));
        setProducts(transformedData);
        // Affichage ou utilisation de la liste transformée
      console.log(transformedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  const bestProducts = products.filter((product) => product.best === true);
  


console.log(products);



  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
  if (loading) {
    return (
      <>
      <MainBanner />
      <Categories />
      <BestProducts bestProducts={products} />
      <Loading />
      <Hero
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
      <FeaturedProducts featuredProducts={_products} />
      <Footer />
      
      <FeaturedProducts featuredProducts={products} />
      <Loading />
      <ClientSlider />
    </>
    );
  }


  return (
    <>
      <MainBanner />
      <Categories />
      <BestProducts bestProducts={products} />
      <Hero
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
      <FeaturedProducts featuredProducts={products} />
      <ClientSlider />
    </>
  );
};

export default HomePage;
