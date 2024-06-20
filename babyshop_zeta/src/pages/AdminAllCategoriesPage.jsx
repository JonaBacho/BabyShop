import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosClient from '../axios-client.js';
import Banner from '../components/Banner/Banner.jsx';
import productsBanner from '../assets/images/BANNERProduct.png';

import Topbar from '../components/Topbar.jsx';
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';
import AdminAllCategories from '../components/AdminAllCategories/AdminAllCategories.jsx';
import AdminButtons from "../components/AdminButtons/AdminButtons.jsx";
import AdminNewCategory from "../components/AdminNewCategory/AdminNewCategory.jsx";


const AdminAllCategoriesPage = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Category 1',
      image: '/src/assets/images/logo_baby.png',
      count: 10,
    },
    {
      id: 2,
      name: 'Category 2',
      image: '/src/assets/images/logo_baby.png',
      count: 15,
    }
  ]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('produit/categories');
    

        const data = response.data.data;

        const transformedData = data.map(item => ({
          id: item.idCat,
          name: item.nomCat,
          image: item.imageUrl,
          count: item.qte

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
      <Topbar/>
      <AdminNavbar/>
      <AdminButtons/>
      <Banner image={productsBanner} />
      <AdminAllCategories categories={categories} />
      <AdminNewCategory/>      

    </>
  );
};

export default AdminAllCategoriesPage;

