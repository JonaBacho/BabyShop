import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import {
  Home,
  Dresses,
  Shirts,
  Accessories,
  Toys,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
  Login,
  Signup,
  CashierCategories,
  KeeperCategories,
  CashierStocks,
  KeeperStocks,
  CashierProducts,
  KeeperProducts,
  CashierInvoice,
  NewCategory,
} from './pages';

// components
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';


// scroll to top component
import ScrollToTop from './utils/ScrollToTop';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/dresses" element={<Dresses />}/>
        <Route exact path="/accessories"  element={<Accessories />}/>
          
        <Route exact path="/toys"  element={<Toys />}/>

        <Route exact path="/about"  element={<About />}/>
          
        <Route exact path="/contact"  element={<Contact />}/>
          
        <Route exact path="/cart"  element={<Cart />}/>
          
        <Route exact path="/login"  element={<Login />}/>

        <Route exact path="/signup"  element={<Signup />}/>
          
        <Route path="/products"  element={<AllProducts />}/>

        <Route path="/products/:id" element={<SingleProduct />} />

        <Route exact path="/cashiercategories"  element={<CashierCategories />}/>
          
        <Route exact path="/keepercategories"  element={<KeeperCategories />}/>

        <Route exact path="/cashierstocks"  element={<CashierStocks />}/>
          
        <Route exact path="/keeperstocks"  element={<KeeperStocks />}/>
          
        <Route exact path="/cashierproducts"  element={<CashierProducts />}/>
          
        <Route exact path="/keeperproducts"  element={<KeeperProducts />}/>

        <Route exact path="/cashierinvoice"  element={<CashierInvoice />}/>
          
        <Route exact path="/newcategory"  element={<NewCategory />}/>
          
      
        <Route path="*"  element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
