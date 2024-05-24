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
import StocksSearchBar from '../components/StocksSearchBar/StocksSearchBar.jsx';
import Topbar from '../components/Topbar.jsx';
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';


const categories = [
  { id: 1, name: 'Category 1', image: '/src/assets/images/logo_baby.png', count: 10 },
  { id: 2, name: 'Category 2', image: '/src/assets/images/logo_baby.png', count: 15 },
  { id: 3, name: 'Category 3', image: '/src/assets/images/logo_baby.png', count: 8 },
  // Add more categories as needed
];
const stocks = [
  { productName: 'Product A', productCode: 'A001', manager: 'John Doe', quantity: 100, action: 'Add', date: '2024-05-10' },
  { productName: 'Product B', productCode: 'B002', manager: 'Jane Doe', quantity: 150, action: 'Remove', date: '2024-05-11' },
  // Add more stock objects as needed
];


const AdminStocks = () => {
  

  const [products, setProducts] = useState([
    { productName: 'Product 1', productCode: 'P001', unitPrice: 10, quantity: 5, images: ['/src/assets/images/logo_baby.png'] },
    { productName: 'Product 2', productCode: 'P002', unitPrice: 15, quantity: 3, images: ['/src/assets/images/logo_baby.png'] },
    { productName: 'Product 3', productCode: 'P003', unitPrice: 20, quantity: 2,images: ['/src/assets/images/logo_baby.png'] },
    { productName: 'Product 4', productCode: 'P004', unitPrice: 12, quantity: 7, images: ['/src/assets/images/logo_baby.png']},
    { productName: 'Product 5', productCode: 'P005', unitPrice: 18, quantity: 4, images: ['/src/assets/images/logo_baby.png']},
  ]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    displayImages(product);
  };
  const handleQuantityChange = (productCode, newQuantity) => {
    const updatedProducts = products.map(product => {
      if (product.productCode === productCode) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  const total = products.reduce((acc, curr) => acc + (curr.quantity * curr.unitPrice), 0);

  return (
    <div>
      <Topbar/>
      <AdminNavbar/>
      <div className='container' style={{ display: 'flex',justifyContent: 'space-between', padding: '10px', }}>
        <StocksSearchBar/>
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">Print out</button>
                
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-primary">Refresh</button>
            </div>
      
        </div>
      </div>
      <AdminStocksTable stocks={stocks} /> 
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

export default AdminStocks;
