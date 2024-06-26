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
  AllCategories,
  SingleProduct,
  Error,
  Login,
  Signup,
  NewCategory,
  AdminHome,
  AdminCategory,
  AdminProduct,
  AdminSingleProduct,
  AdminInvoice,
  AdminStocks,
  AdminProfile,
  Category,
  Payment,
  AdminLogin,
  AdminAllCategories,

} from './pages';
import AdminNewCategory from './components/AdminNewCategory/AdminNewCategory.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
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

        <Route path="/categories"  element={<AllCategories/>}/>

        <Route path="/categories/:id"  element={<Category/>}/>

        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="/payment" element={<Payment />} />
 
        <Route exact path="/newcategory"  element={<NewCategory />}/>

        <Route exact path="/admin/home"  element={<AdminHome/>}/>

        <Route exact path="/admin/login"  element={<AdminLogin/>}/>

        <Route exact path="/admin/categories"  element={<AdminAllCategories/>}/>

        <Route path="/admin/categories/:id"  element={<AdminCategory/>}/>

        <Route path="/admin/profile"  element={<AdminProfile/>}/>

        <Route exact path="/admin/product"  element={<AdminProduct/>}/>

        <Route exact path="/admin/product/:id"  element={<AdminSingleProduct/>}/>


        <Route exact path="/admin/stocks"  element={<AdminStocks/>}/>


        <Route exact path="/admin/invoice"  element={<AdminInvoice/>}/>
        <Route path="/new-category" element={<AdminNewCategory/>} />

      
        <Route path="*"  element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
