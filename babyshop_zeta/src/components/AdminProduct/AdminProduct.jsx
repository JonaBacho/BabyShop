import React, { useState } from 'react';

const AdminProduct = ({ name, image, count }) => {
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
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Quantity: {quantity}</p>
        <div className="btn-group" role="group" aria-label="Quantity">
            <button type="button" className="btn btn-secondary border" onClick= {handleIncrement}>+</button>
            <span className="btn btn-light border">{quantity}</span>
            <button type="button" className="btn btn-secondary border" onClick= {handleDecrement}>-</button>

        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
