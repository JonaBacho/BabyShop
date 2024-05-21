import React from 'react'
import AdminButtons from "../components/AdminButtons/AdminButtons.jsx";
import AdminCategoryContainer from "../components/AdminCategoryContainer/AdminCategoryContainer.jsx";
import AdminInfoBar from "../components/AdminInfobar/AdminInfobar.jsx";
import AdminNewCategory from "../components/AdminNewCategory/AdminNewCategory.jsx";
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';
import Topbar from '../components/Topbar.jsx';




const categories = [
  { id: 1, name: 'Category 1', image: '/src/assets/images/logo_baby.png', count: 10 },
  { id: 2, name: 'Category 2', image: '/src/assets/images/logo_baby.png', count: 15 },
  { id: 3, name: 'Category 3', image: '/src/assets/images/logo_baby.png', count: 8 },
  // Add more categories as needed
];



const AdminCategoryPage = () => {
  return (
    <div>
      <Topbar/>
      <AdminNavbar/>
      <AdminButtons/>
      <AdminCategoryContainer categories={categories} />
      <AdminNewCategory/>      
    </div>
  );
};

export default AdminCategoryPage;
