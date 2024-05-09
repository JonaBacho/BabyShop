import React from 'react';

const AdminInvoiceInfo = ({ total, amountToPay, receivedAmount, remainder }) => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center my-4">
        <div className="col-md-3">
          <strong>Total:</strong> {total}
        </div> {}
        <div className="col-md-3">
          <strong>Amount to Pay:</strong> {amountToPay}
          <input type="text" className="form-control" placeholder="" />
        </div>
        <div className="col-md-3">
          <strong>Received Amount:</strong> {receivedAmount}
          <input type="text" className="form-control" placeholder=".." />

        </div>
        <div className="col-md-3">
          <strong>Remainder:</strong> {remainder}
          <input type="text" className="form-control" placeholder="..." />

        </div>
      </div>
    </div>
  );
};

export default AdminInvoiceInfo;
