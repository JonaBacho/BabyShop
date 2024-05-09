import React, { useState } from 'react';

const AdminArticleSlider = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? product.images.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <img
                src={product.images[currentImageIndex]}
                alt={`Product ${currentImageIndex + 1}`}
                className="img-fluid"
              />
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-primary" onClick={handlePrev}>Previous</button>
              <strong><p>{product.productCode} </p></strong>
              <button className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminArticleSlider;
