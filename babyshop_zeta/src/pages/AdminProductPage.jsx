import React from 'react'
import AdminButtons from "../components/AdminButtons/AdminButtons.jsx";
import AdminCategory from "../components/AdminCategory/AdminCategory.jsx";
import AdminCategoryContainer from "../components/AdminCategoryContainer/AdminCategoryContainer.jsx";
import AdminCustomerInfo from "../components/AdminCustomerInfo/AdminCustomerInfo.jsx";
import AdminInfoBar from "../components/AdminInfobar/AdminInfobar.jsx";
import AdminNewCategory from "../components/AdminNewCategory/AdminNewCategory.jsx";
import AdminStocksTable from "../components/AdminStocksTable/AdminStocksTable.jsx";
import AdminProductsTable from "../components/AdminProductsTable/AdminProductsTable.jsx";
import AdminProductDetails from "../components/AdminProductDetails/AdminProductDetails.jsx";
import { useState } from 'react';
import AdminArticleSlider from "../components/AdminArticleSlider/AdminArticleSlider.jsx";
import AdminInvoiceInfo from "../components/AdminInvoiceInfo/AdminInvoiceInfo.jsx";
import AdminProductContainer from '../components/AdminProductContainer/AdminProductContainer.jsx';

const products = [
  { id: 1, name: 'Category 1', image: '/src/assets/images/logo_baby.png', count: 10 },
  { id: 2, name: 'Category 2', image: '/src/assets/images/logo_baby.png', count: 15 },
  { id: 3, name: 'Category 3', image: '/src/assets/images/logo_baby.png', count: 8 }
];



const AdminProductPage = () => {  
  return (
    <div>
      <AdminInfoBar/>
      <div class="container-md ">
      <button type="button" className="btn btn-primary btn-lg">Print out</button>
      <button type="button" className="btn btn-primary btn-lg">Refresh</button>
      </div>
      
      <AdminProductContainer products={products} />
      <nav className = "container my-4" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>   
    </div>
  );
};

export default AdminProductPage;
