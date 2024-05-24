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
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';
import Topbar from '../components/Topbar.jsx';


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


const AdminInvoice = () => {
  

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
      <h1 className="my-4">Admin Invoice page</h1>
      <AdminCustomerInfo/>
      <AdminProductDetails product={selectedProduct} onQuantityChange={handleQuantityChange} />
      <AdminArticleSlider product = {selectedProduct}></AdminArticleSlider>
      <AdminProductsTable products={products} onProductSelect={handleProductSelect}/>
      <AdminInvoiceInfo 
        total={total}
        amountToPay={total }
        receivedAmount={0}
        remainder={0}/>
      

      
      
    </div>
  );
};

export default AdminInvoice;
