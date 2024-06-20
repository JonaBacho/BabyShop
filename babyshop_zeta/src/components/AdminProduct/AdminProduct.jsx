import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import Stars from '../Stars/Stars';
import './AdminProduct.scss'


const AdminProduct = ({  product }) => {
  const [quantity, setQuantity] = useState(product.count);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    
    
    <div className="card text-center">
      <Link to={`/admin/product/${product.id}`}><img src={product.image} className="card-img-top" alt={product.name} style={{"height":"200 px"}} /></Link>
      <div className="card-body d-flex flex-column align-items-center">
      <h5 className="card-title">{product.name}</h5>
        <p className="card-text"><strong>Quantity: {quantity}</strong></p>
        <div className="btn-group" role="group" aria-label="Quantity">
            <button type="button" className="btn btn-light border" onClick= {handleIncrement}>+</button>
            <span className="btn btn-light border">{quantity}</span>
            <button type="button" className="btn btn-light border" onClick= {handleDecrement}>-</button>

        </div>
        <div className="product__footer-prices">
          <span>
            <span className="product__footer-price">
              {product.price}
            </span>
            <span className="product__footer-price--old">
              {product.oldPrice}
            </span>
          </span>
          {/* stars component */}
          <Stars stars={product.stars} />
        </div>
      </div>
    </div>
  
  );
};

export default AdminProduct;
