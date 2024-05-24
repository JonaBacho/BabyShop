import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaChartLine, FaThList, FaFileInvoice } from 'react-icons/fa';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const [active, setActive] = useState('');

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-around">
            <li className="nav-item">
              <NavLink 
                className={`nav-link ${active === 'home' ? 'active' : ''}`} 
                to="/admin/home" 
                onClick={() => handleClick('home')}
              >
                <FaHome className="me-2" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={`nav-link ${active === 'products' ? 'active' : ''}`} 
                to="/admin/product" 
                onClick={() => handleClick('products')}
              >
                <FaBoxOpen className="me-2" /> Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={`nav-link ${active === 'stocks' ? 'active' : ''}`} 
                to="/admin/stocks" 
                onClick={() => handleClick('stocks')}
              >
                <FaChartLine className="me-2" /> Stocks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={`nav-link ${active === 'categories' ? 'active' : ''}`} 
                to="/admin/category" 
                onClick={() => handleClick('categories')}
              >
                <FaThList className="me-2" /> Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={`nav-link ${active === 'invoice' ? 'active' : ''}`} 
                to="/admin/invoice" 
                onClick={() => handleClick('invoice')}
              >
                <FaFileInvoice className="me-2" /> Invoice
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

