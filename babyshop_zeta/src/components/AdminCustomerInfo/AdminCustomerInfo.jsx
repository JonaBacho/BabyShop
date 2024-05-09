import React from 'react';
import { FaUser, FaLock, FaPhone, FaCreditCard, FaMoneyBillWaveAlt, FaHandHoldingUsd } from 'react-icons/fa';
import { FiPercent } from 'react-icons/fi';

const AdminCustomerInfo = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><FaUser /></span>
            </div>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><FaPhone /></span>
            </div>
            <input type="tel" className="form-control" placeholder="Customer's phone" />
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><FaCreditCard /></span>
            </div>
            <select className="form-control">
              <option value="A">Cash </option>
              <option value="B">Mobile money</option>
              <option value="C">Orange money</option>
              <option value="D">Visa card</option>
            </select>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><FiPercent /></span>
            </div>
            <input type="text" className="form-control" placeholder="Reduction percentage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomerInfo;
