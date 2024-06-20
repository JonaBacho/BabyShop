import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/products/products_actions';
import cartEmptyImg from '../assets/images/cart-empty.jpg';
import { formatPrice } from '../utils/formatPrice';
import Hero from '../components/Hero/Hero.jsx';
import './../components/CartSidebar/CartPage.css'

// components
import Navbar from '../components/Navbar/Navbar.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Footer from '../components/Footer/Footer.jsx';


// scroll to top component
import ScrollToTop from '../utils/ScrollToTop.js';





const CartPage = ( ) => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    console.log('Current Cart State:', cart);
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);


  return (
    <div >
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <div className="cart-page container my-4">
      <h2>Your Cart</h2>
      
        
        <div className="cart-page__content">
          <div className="cart-sidebar__footer">
            Total: {totalPrice.toFixed(2)}{' '}
          </div>
          {cart.length > 0 ? (
            
            cart.map((item) => {
              return (
                <>
                <Link to="/payment" className="btn btn-primary mx-10" style={{"text-align":"center"}}>Get to Payment</Link>
                <div key={item.codePro} className="cart-page__products">
                  <div className="cart-page__product-image-container">
                    <img
                      className="cart-page__product-image"
                      src={item.image}
                      alt="product"
                    />
                  </div>
                  <div className="cart-page__product-info">
                    <p className="cart-page__product-name">{item.name}</p>
                    <div className="cart-page__prices">
                      <p className="cart-page__product-qty">{item.qty} X</p>
                      <p className="cart-page__product-price">
                        {item.price}
                      </p>
                      <p className="cart-page__delete">
                      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                      </p>
                    </div>
                  </div>
                </div>
                

                </>
                
                
              );
            }
          )
          ) : (
            <div className="cart-sidebar__empty-image-container">
              <img
                className="cart-sidebar__empty-image"
                src={cartEmptyImg}
                alt="cart is empty"
                style={{width :'500px'}}
              />
            </div>
          )}
        </div>
      
    </div>
      <Hero
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
      <Footer/>
    </div>
    

  );
};

export default CartPage;
