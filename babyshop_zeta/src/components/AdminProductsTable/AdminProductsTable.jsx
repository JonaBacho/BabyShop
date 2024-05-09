import React from 'react';

const AdminProductsTable = ({ products, onProductSelect }) => {
  const handleProductSelect = (product) => {
    onProductSelect(product);
  };
  return (
    <div className="container table-responsive my-4">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} onClick={() => handleProductSelect(product)} style={{ cursor: 'pointer' }}>
              <td>{product.productName}</td>
              <td>{product.productCode}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantity}</td>
              <td>{product.quantity * product.unitPrice}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsTable;
