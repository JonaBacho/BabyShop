import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleProduct from '../components/SingleProduct/SingleProduct.jsx';

import { fetchSingleProduct } from '../redux/products/products_actions.js';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const SingleProductPage = () => {
  const { singleProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <SingleProduct singleProduct={singleProduct} />
      <Footer />

    </>
  );
};

export default SingleProductPage;
