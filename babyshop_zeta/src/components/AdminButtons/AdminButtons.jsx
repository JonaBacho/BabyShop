import React from 'react';
import { FaPlus } from 'react-icons/fa'; // Assuming you have installed react-icons

const AdminButtons = () => {

  const handleRefresh = () => {
    console.log('Refresh button clicked');
    // Add your refresh logic here
  };

  const handleCreateCategory = () => {
    console.log('Create new category button clicked');
    // Add your create category logic here
    window.location.href = '/new-category';
  };

  return (
    <div className="btn-group my-2" role="group" aria-label="Button Group">
      <button type="button" className="btn btn-primary mr-5" onClick={handleRefresh}>Refresh</button>
      <button type="button" className="btn btn-primary" onClick={handleCreateCategory}>
        Create New Category <FaPlus className="ms-1" />
      </button>
    </div>
  );
};

export default AdminButtons;
