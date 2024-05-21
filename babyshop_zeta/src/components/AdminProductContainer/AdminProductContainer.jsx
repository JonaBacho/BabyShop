import React from 'react';
import AdminProduct from '../AdminProduct/AdminProduct.jsx';

const AdminProductContainer = ({ products }) => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Product Container</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <AdminProduct {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductContainer;
