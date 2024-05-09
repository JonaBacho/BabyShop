import React, { useState } from 'react';

const AdminProductDetails = ({ product, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onQuantityChange(product.productCode, quantity + 1); // Pass updated quantity to parent component
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(product.productCode, quantity - 1); // Pass updated quantity to parent component
    }
  };

  return (
    <div className=" container d-flex justify-content-between align-items-center my-4">
      
      <div><strong>Product Code:</strong> {product.productCode}</div>
      <div className='d-flex align-items-center'>
        <strong>Quantity Chosen:</strong>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleDecrease}>-</button>
        {quantity}
        <button className="btn btn-sm btn-primary mx-2" onClick={handleIncrease}>+</button>
      </div>
      <div><strong>Quantity in Stock:</strong> {product.quantityInStock}</div>
    </div>
  );
};

export default AdminProductDetails;
