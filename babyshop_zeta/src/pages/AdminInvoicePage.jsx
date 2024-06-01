import React from 'react'
import { useState } from 'react';
import AdminCustomerInfo from "../components/AdminCustomerInfo/AdminCustomerInfo.jsx";
import AdminProductsTable from "../components/AdminProductsTable/AdminProductsTable.jsx";
import AdminProductDetails from "../components/AdminProductDetails/AdminProductDetails.jsx";
import AdminArticleSlider from "../components/AdminArticleSlider/AdminArticleSlider.jsx";
import AdminInvoiceInfo from "../components/AdminInvoiceInfo/AdminInvoiceInfo.jsx";
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';

import Topbar from '../components/Topbar.jsx';
import AdminInvoice from '../components/AdminIvoice/AdminInvoice.jsx';





const AdminInvoicePage = () => {
  const dummyInvoices = [
    {
      id: 1,
      customerName: 'John Doe',
      avatar: '/src/assets/images/logo_baby.png',
      amountPaid: 100,
      date: '2024-05-28',
      status: 'pending'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      avatar: '/src/assets/images/logo_baby.png',
      amountPaid: 200,
      date: '2024-05-27',
      status: 'approved'
    },
    {
      id: 12,
      customerName: 'Alice Johnson',
      avatar: '/src/assets/images/logo_baby.png',
      amountPaid: 150,
      date: '2024-05-26',
      status: 'declined'
    },
    {
      customerName: 'Bob Williams',
      avatar: '/src/assets/images/logo_baby.png',
      amountPaid: 300,
      date: '2024-05-25',
      status: 'pending'
    }
  ];
  return (
    <div>
      <Topbar/>
      <AdminNavbar/>
      <h1 className="my-4">Admin Invoice page</h1>
      <AdminInvoice invoices={dummyInvoices}/>
  
      

      
      
    </div>
  );
};

export default AdminInvoicePage;
