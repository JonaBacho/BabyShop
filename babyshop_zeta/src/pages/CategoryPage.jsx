import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product/Product.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/products_actions.js';
import Banner from '../components/Banner/Banner.jsx';
import Title from '../components/Title/Title.jsx';
import Hero from '../components/Hero/Hero.jsx';
import ClientSlider from '../components/ClientSlider/ClientSlider.jsx';
import Toybanner from '../assets/images/BannerTOYS.png';

// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/categories/produits?idCategorie=${id}`);

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
      setLoading(false);

      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        setLoading(true);

      } 
    };

    fetchData();

  }, [id]);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={Toybanner} />
      <h1>Products in Category {id}</h1>
      <section className="py-5">
        <div className="container">
          <Title title="KIDS TOYS" />
          <div className="row">
          {products.map((product) => {
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
      <Footer />
      
    </div>
  );
}

export default CategoryPage;


