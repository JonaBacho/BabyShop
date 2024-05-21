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
import Loading from '../components/Loading/Loading';
import ScrollToTop from '../utils/ScrollToTop';



const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('home/produits');
        const response2 = await axiosClient.get('home/categories');

        const data = response.data.data;
        const data2 = response2.data;

        const transformedData = data.map(item => ({
          id: item.codePro,
          image: item.imageUrl,
          name: item.nomPro,
          price: item.prix,
          oldPrice: item.ancienPrix,
          stars: item.etoile
        }));
        const transformedData2 = data2.map(item => ({
          id: item.idCat,
          image: item.imageUrl,
          name: item.nomCat
          
        }));
        setProducts(transformedData);
        setCategories(transformedData2);

        // Affichage ou utilisation de la liste transformée
      console.log(transformedData);
      setLoading(false);

      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        setLoading(true);

      } 
    };

    fetchData();

  }, []);

  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  const bestProducts = products.filter((product) => product.best === true);


console.log(products);

if (loading) {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <CartSidebar />
    <Sidebar />
    <MainBanner />
    <Categories categories={categories}/>
    <BestProducts bestProducts={products} />
    <Loading />
    <Hero
      subtitleHeading="world of"
      subtitleFooter="bliss"
      offer="adorable"
      title="Where tiny treasures await your sweetest kiss."
      text="Discover enchanting dresses and accessories, made for your little miss!"
    />
    
    <FeaturedProducts featuredProducts={products} />
    <Loading />
  </>
  );
}



  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <MainBanner />
      <Categories categories={categories}/>
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
