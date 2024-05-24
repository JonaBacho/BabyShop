import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/products_actions.js';
import Banner from '../components/Banner/Banner.jsx';
import Title from '../components/Title/Title.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Toybanner from '../assets/images/BannerTOYS.png';

// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SingleProduct from '../components/SingleProduct/SingleProduct.jsx';

// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';
import Product from '../components/Product/Product.jsx';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { singleProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(6);
  const showMoreProducts = () => {
    setVisible((oldValue) => oldValue + 3);
  };
  const _products = [
    {
        id: 1,
        image: image_product,
        name: "Product 1",
        price: 29.99,
        oldPrice: 39.99,
        stars: 4.5
    },
    {
        id: 2,
        image: image_product,
        name: "Product 2",
        price: 49.99,
        oldPrice: 59.99,
        stars: 4.2
    },
    {
        id: 3,
        image: image_product,
        name: "Product 3",
        price: 19.99,
        oldPrice: 24.99,
        stars: 4.8
    },
    {
        id: 4,
        image: image_product,
        name: "Product 4",
        price: 79.99,
        oldPrice: 89.99,
        stars: 4.0
    }]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/produits/details?codePro=${id}`);
        const response2 = await axiosClient.get(`/produits/details?codePro=${id}`); //to get products of thesame category

        const data = response.data.data;
        const data2 = response2.data.data;


        const transformedData = data.map(item => ({
          id: item.codePro,
          image: item.imageUrl,
          name: item.nomPro,
          price: item.prix,
          oldPrice: item.ancienPrix,
          codePro: 'ABC123',
          nomPro: 'Awesome Product',
          prix: 19.99,
          qte: 10,
          description: 'This is a great product you will love!',
          actif: true,
          prixAchat: 12.50,
          stars: 4,
          photos: [
            'https://www.freepik.com/free-photo/interior-kids-room-decoration-with-clothes_18271252.htm#fromView=search&page=1&position=1&uuid=2318a3f1-b957-43c0-b345-9ae59205d995',
            '../assets/images/BANNERProduct.png',
          ],
        }));
        const transformedData2 = data2.map(item => ({
          id: item.codePro,
          image: item.imageUrl,
          name: item.nomPro,
          price: item.prix,
          oldPrice: item.ancienPrix,
          
        }));
        
        setProduct(transformedData);
        setSimilarProducts(transformedData2);


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
  //setSimilarProducts(_products);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={Toybanner} />
      <h1>Product {id}</h1>

      <SingleProduct {...product}/>
      
      <Hero
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
      <section className="py-5">
        <div className="container">
          <Title title="PRODUCTS OF THESAME CATEGORY" />
          <div className="row">
            {similarProducts.map((product) => {
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
      <section className="py-5">
      <div className="container">
        <Title title="PRODUCTS OF THESAME CATEGORY" />
        <div className="row">
          {similarProducts.slice(0, visible).map((product) => {
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
        {visible === similarProducts.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: 'center' }}
              className="col-10 mx-auto pt-3"
            >
              <button onClick={showMoreProducts} className="btn btn-grey">
                show more
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
      <Footer />
      
    </div>
  );
}

export default SingleProductPage;

