import React, { useState } from 'react';


const AdminNewCategory = () => {
  
  const [numProducts, setNumProducts] = useState(1);
  const [productInfo, setProductInfo] = useState([
    { name: '', imageLink: '', price: '', quantity: '' },
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
    console.log('Form submitted!', productInfo);
  };

  const handleNumProductsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumProducts(num);
    setProductInfo(Array.from({ length: num }, () => ({ name: '', imageLink: '', price: '', quantity: '' })));
  };

  const handleProductInfoChange = (index, key, value) => {
    const updatedProductInfo = [...productInfo];
    updatedProductInfo[index][key] = value;
    setProductInfo(updatedProductInfo);
  };

  const renderProductFields = () => {
    return Array.from({ length: numProducts }, (_, index) => (
      <div key={index} className="mb-3">
        <h4 className='text-center'>Product {index + 1}</h4>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id={`productName${index}`}
              placeholder="Enter product name"
              value={productInfo[index].name}
              onChange={(e) => handleProductInfoChange(index, 'name', e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              id={`imageLink${index}`}
              placeholder="Enter image link"
              value={productInfo[index].imageLink}
              onChange={(e) => handleProductInfoChange(index, 'imageLink', e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id={`price${index}`}
              placeholder="Enter price"
              value={productInfo[index].price}
              onChange={(e) => handleProductInfoChange(index, 'price', e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              id={`quantity${index}`}
              placeholder="Enter quantity"
              value={productInfo[index].quantity}
              onChange={(e) => handleProductInfoChange(index, 'quantity', e.target.value)}
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container my-4">
      <h1 className="my-4 text-center">Create New Category</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          
          <input type="text" className="form-control " id="categoryName" placeholder="Enter category name" />
        </div>
        <div className="mb-3">
          
          <input className="form-control" id="categoryDescription" rows="3" placeholder="Enter link to category image"></input>

        </div>
        
        
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="numProducts"
            placeholder="Enter number of products"
            value={numProducts}
            onChange={handleNumProductsChange}
          />
        </div>
        {renderProductFields()}
        <div className="row justify-content-center mt-3 col-5">
            <div className="col-auto">
                <button type="submit" className="btn btn-primary">Create Category</button>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-primary">Cancel</button>
            </div>
        </div>
      
      
        
      </form>
    </div>
  );
};

export default AdminNewCategory;
