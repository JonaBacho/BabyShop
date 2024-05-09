import React from 'react';
import AdminCategory from '../AdminCategory/AdminCategory.jsx';

const AdminCategoryContainer = ({ categories }) => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Category Container</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map(category => (
          <div key={category.id} className="col">
            <AdminCategory {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategoryContainer;
