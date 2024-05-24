import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminProduct from '../AdminProduct/AdminProduct.jsx';

const AdminProductContainer = ({ products }) => {
  const [visible, setVisible] = useState(6);
  const { loading } = useSelector((state) => state.products);

  const showMoreProducts = () => {
    setVisible((oldValue) => oldValue + 3);
  };
  return (
    
    <div className="container">
      <h1 className="text-center my-4">Product Container</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.slice(0, visible).map((product) => {
            return (
              <div
                key={product.id}
                className="col"
              >
                <AdminProduct {...product} />
              </div>
            );
          })}
      </div>
      {visible === products.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: 'center' }}
              className="col-10 mx-auto pt-3"
            >
              <button onClick={showMoreProducts} className="btn btn-grey">
                show more
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default AdminProductContainer;
