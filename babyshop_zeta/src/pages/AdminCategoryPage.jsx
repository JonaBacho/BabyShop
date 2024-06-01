import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner/Banner.jsx';
import Title from '../components/Title/Title.jsx';
import Toybanner from '../assets/images/BannerTOYS.png';

// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';
import AdminProduct from '../components/AdminProduct/AdminProduct.jsx';
import Topbar from '../components/Topbar.jsx';
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';

const AdminCategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([{
    id: '1',
    image: '/src/assets/images/BannerTOYS.png',
    name: 'Yo',
    price: 123,
    oldPrice: 456,
    stars: 5,
    count: 10
  }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/categorie/produits?idCategorie=${id}`);

        const data = response.data.data;

        const transformedData = data.map(item => ({
          id: item.codePro,
          image: item.imageUrl,
          name: item.nomPro,
          price: item.prix,
          oldPrice: item.ancienPrix,
          stars: item.etoile,
          count: 5

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
      <Topbar/>
      <AdminNavbar/>
      <Banner image={Toybanner} />
      <Title title="Products in Category {id}"/>
      <h1> Products in Category {id}</h1>
      <section className="py-5">
        <div className="container">
          <div className="row">
          {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-10 col-md-6 col-lg-4 mx-auto"
                >
                  <AdminProduct product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      
    </div>
  );
}

export default AdminCategoryPage;


