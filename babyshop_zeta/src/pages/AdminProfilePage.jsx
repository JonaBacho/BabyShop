import React, { useState } from 'react';
import './AdminProfilePage.css';
import Topbar from '../components/Topbar.jsx';
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';

const AdminProfilePage = () => {
  // State variable to hold admin data
  const [adminData, setAdminData] = useState({
    managerId: "321000001",
    fullName: "amGood",
    userName: "Yo yoyo",
    role: "4",
    email: "A",
    telephone: "A",
    cityAddress: "Yaounde",
    personalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  });
// State variables for modal and form
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(adminData);

  // Function to handle form submission
  const handleSubmit = () => {
    setAdminData(formData);
    setShowModal(false);
  };

  // Function to handle input changes in the form
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <Topbar />
      <AdminNavbar />
      <div class="student-profile py-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card shadow-sm">
                <div class="card-header bg-transparent text-center">
                  <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
                  <h3>{adminData.userName}</h3>
                </div>
                <div class="card-body">
                  <p class="mb-0"><strong class="pr-1">Manager's ID: </strong>{adminData.managerId}</p>
                  <p class="mb-0"><strong class="pr-1">Full name: </strong>{adminData.fullName}</p>
                  <p class="mb-0"><strong class="pr-1">Role:  </strong>{adminData.role}</p>
                  <p class="mb-0"><strong class="pr-1">Email address: </strong>{adminData.email}</p>
                  <p class="mb-0"><strong class="pr-1">Telephone: </strong>{adminData.telephone}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card shadow-sm">
                <div class="card-header bg-transparent border-0">
                  <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Personal Information</h3>
                </div>
                <div class="card-body pt-0">
                  <p class="mb-0"><strong class="pr-1">City Address </strong>{adminData.cityAddress}</p>
                  <p>{adminData.personalInfo}</p>
                </div>
              </div>
              <div style={{ "height": "26px" }}></div>
              <div class="card shadow-lg">
                <div class="card-header bg-transparent border-0">
                  <h3 class="mb-0"><i class="far fa-clone pr-1"></i>My Description</h3>
                </div>
                <div class="card-body pt-0">
                  <p>{adminData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setShowModal(true)} className='btn btn-grey'>Edit Profile</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <label>Full Name:
                <input type="text" value={formData.fullName} onChange={(e) => handleInputChange(e, 'fullName')} />
              </label>
              <label>Role:
                <input type="text" value={formData.role} onChange={(e) => handleInputChange(e, 'role')} />
              </label>
              <label>Email Address:
                <input type="text" value={formData.email} onChange={(e) => handleInputChange(e, 'email')} />
              </label>
              <label>Telephone:
                <input type="text" value={formData.telephone} onChange={(e) => handleInputChange(e, 'telephone')} />
              </label>
              <label>City Address:
                <input type="text" value={formData.cityAddress} onChange={(e) => handleInputChange(e, 'cityAddress')} />
              </label>
              <label>Personal Info:
                <textarea value={formData.personalInfo} onChange={(e) => handleInputChange(e, 'personalInfo')}></textarea>
              </label>
              <label>Description:
                <textarea value={formData.description} onChange={(e) => handleInputChange(e, 'description')}></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
    
  );
}

export default AdminProfilePage;
