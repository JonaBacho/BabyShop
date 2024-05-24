import React, { useState } from 'react';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: '',
    login: '',
    password: ''
  });

  const handleChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Admin Info:', adminInfo);
  };

  return (
    <div className="admin-login-container d-flex justify-content-center align-items-center">
      <div className="admin-login-box p-4">
        <h2 className="text-center mb-4"><span className="logo">Login to BabyShop Dashboard</span> 
          <img src='/src/assets/images/logo_baby.png' style={{ width: '50px', height: 'auto' }}/></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={adminInfo.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="login" className="form-label">Login</label>
            <input type="text" className="form-control" id="login" name="login" value={adminInfo.login} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={adminInfo.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;

