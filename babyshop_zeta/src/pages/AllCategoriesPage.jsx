import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosClient from '../axios-client.js';

import { fetchProducts } from '../redux/products/products_actions.js';

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
import AllCategories from '../components/AllCategories/AllCategories.jsx';
import SingleProduct from '../components/SingleProduct/SingleProduct.jsx';

const AllCategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const productData = {
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
    };
    
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('all/categories');
    

        const data = response.data.data;

        const transformedData = data.map(item => ({
          id: item.idCat,
          image: item.imageUrl,
          name: item.nomCat
        }));
    
        setCategories(transformedData);

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

console.log(categories);


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Banner image={productsBanner} />
      <AllCategories categories={categories} />
    </>
  );
};

export default AllCategoriesPage;

