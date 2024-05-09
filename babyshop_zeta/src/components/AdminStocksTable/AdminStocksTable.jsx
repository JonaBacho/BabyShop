import React from 'react';

const AdminStocksTable = ({ stocks }) => {
  return (
    <div className="container table-responsive my-4">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Manager</th>
            <th>Quantity</th>
            <th>Action</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.productName}</td>
              <td>{stock.productCode}</td>
              <td>{stock.manager}</td>
              <td>{stock.quantity}</td>
              <td>{stock.action}</td>
              <td>{stock.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminStocksTable;
