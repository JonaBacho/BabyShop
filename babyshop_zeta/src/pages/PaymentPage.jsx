import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './PaymentPage.css';
// components
import Navbar from '../components/Navbar/Navbar.jsx'
import CartSidebar from '../components/CartSidebar/CartSidebar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';

const PaymentPage = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cartItems.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cartItems, totalPrice, setTotalPrice]);

  const [clientInfo, setClientInfo] = useState({
    name: '',
    password: '',
    city: '',
    mobile: '',
    whatsapp: '',
    deliveryPoint: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: '',
    comment: '',
    paymentDate: ''
  });

  const [discount, setDiscount] = useState(0);

  const handleClientInfoChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleDiscountChange = (e) => {
    setDiscount(Number(e.target.value));
  };

  const totalPriceAfterDiscount = totalPrice - discount;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the payment submission
  };

  return (
    <>
        <ScrollToTop />
        <Navbar />
        <CartSidebar />
        <Sidebar />
        <div className="container">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="payment-form">
            <h2>Client Information</h2>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={clientInfo.name} onChange={handleClientInfoChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={clientInfo.password} onChange={handleClientInfoChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" name="city" value={clientInfo.city} onChange={handleClientInfoChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="text" className="form-control" id="mobile" name="mobile" value={clientInfo.mobile} onChange={handleClientInfoChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="whatsapp" className="form-label">WhatsApp Number</label>
                <input type="text" className="form-control" id="whatsapp" name="whatsapp" value={clientInfo.whatsapp} onChange={handleClientInfoChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="deliveryPoint" className="form-label">Delivery Point</label>
                <input type="text" className="form-control" id="deliveryPoint" name="deliveryPoint" value={clientInfo.deliveryPoint} onChange={handleClientInfoChange} />
              </div>
            </div>
            
            
            
            
            

            <h2>Payment Information</h2>
            <div className="row">
              <div className="col-md-4 mb-3">
              <label>Payment Method</label>
              <select className="form-control" name="paymentMethod" value={paymentInfo.paymentMethod} onChange={handlePaymentInfoChange}>
                <option value="">Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="momo">MoMo</option>
                <option value="om">OM</option>
                <option value="visa">Visa Card</option>
              </select>
              </div>
              
              
              <div className="col-md-4 mb-3">
                <label>Date of Payment</label>
                <input type="date" className="form-control" name="paymentDate" value={paymentInfo.paymentDate} onChange={handlePaymentInfoChange} />
              </div>
              
            </div>
            <div className="form-group">
              
            </div>
            <div className="form-group">
              <label>Comment</label>
              <textarea className="form-control" name="comment" value={paymentInfo.comment} onChange={handlePaymentInfoChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Pay</button>
          </form>
        </div>

        <div className="col-lg-4">
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="img-fluid" />
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.qty}</p>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${(item.price * item.qty).toFixed(2)}</p>
                </div>
              </div>
            ))}
            
            <div className="total-price">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
              <div className="form-group">
                <label>Discount</label>
                <input type="number" className="form-control" value={discount} onChange={handleDiscountChange} />
              </div>
              <h3>Price to Pay: ${totalPriceAfterDiscount.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    </>
   
  );
};

export default PaymentPage;

