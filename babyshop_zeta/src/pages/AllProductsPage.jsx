import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions.js';
import axiosClient from '../axios-client.js';

import Banner from '../components/Banner/Banner.jsx';
import AllProducts from '../components/AllProducts/AllProducts.jsx';
import image_product from './shoes.jpg';


import productsBanner from '../assets/images/BANNERProduct.png';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const AllProductsPage = () => {
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
    },
    {
        id: 5,
        image: image_product,
        name: "Product 5",
        price: 99.99,
        oldPrice: 109.99,
        stars: 4.7
    },
    {
        id: 6,
        image: image_product,
        name: "Product 6",
        price: 39.99,
        oldPrice: 49.99,
        stars: 4.3
    },
    {
        id: 7,
        image: image_product,
        name: "Product 7",
        price: 59.99,
        oldPrice: 69.99,
        stars: 4.6
    },
    {
        id: 8,
        image: image_product,
        name: "Product 8",
        price: 69.99,
        oldPrice: 79.99,
        stars: 4.4
    },
    {
        id: 9,
        image: image_product,
        name: "Product 9",
        price: 89.99,
        oldPrice: 99.99,
        stars: 4.1
    },
    {
        id: 10,
        image: image_product,
        name: "Product 10",
        price: 109.99,
        oldPrice: 119.99,
        stars: 4.9
    }
];
    const [products, setProducts] = useState(_products);
    const [loading, setLoading] = useState(true);
    
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('all/produits');
    
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

  }, []);
 


console.log(products);


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={productsBanner} />
      <AllProducts products={products} />
    </>
  );
};

export default AllProductsPage;
