import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminProduct = ({  id, image, name, price,oldPrice, stars, count }) => {
  const [quantity, setQuantity] = useState(count);

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
      <Link to={`/admin/product/${id}`}><img src={image} className="card-img-top" alt={name} /></Link>
      <div className="card-body d-flex flex-column align-items-center">
      <Link to={`/admin/product/${id}`}><h5 className="card-title">{name}</h5></Link>
        <p className="card-text"><strong>Quantity: {quantity}</strong></p>
        <div className="btn-group" role="group" aria-label="Quantity">
            <button type="button" className="btn btn-light border" onClick= {handleIncrement}>+</button>
            <span className="btn btn-light border">{quantity}</span>
            <button type="button" className="btn btn-light border" onClick= {handleDecrement}>-</button>

        </div>
      </div>
    </div>
  
  );
};

export default AdminProduct;
