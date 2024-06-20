import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const AdminCategory = ({ id, name, image, count }) => {
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
      <Link to={`/admin/categories/${id}`}>
        <img src={image} className="card-img-top" alt={name} />
                    
        </Link>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Quantity: {quantity}</p>
        <div className="btn-group" role="group" aria-label="Quantity">
          <span className="btn btn-light border">{quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
