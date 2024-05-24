/*import { useSelector } from 'react-redux';

import Gallery from '../Gallery/Gallery';
import SingleProductInfo from './SingleProductInfo/SingleProductInfo';
import Title from '../Title/Title';
import Hero from '../Hero/Hero';
import ClientSlider from '../ClientSlider/ClientSlider';
import Loading from '../Loading/Loading';

const SingleProduct = ({ singleProduct }) => {
  const { loading } = useSelector((state) => state.products);

  const {
    image,
    gallarey,
    id,
    name,
    brand,
    price,
    stars,
    desription,
  } = singleProduct;

  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title={name} />
          <div className="row py-5">
            <div className="col-10 col-md-6 mx-auto">
              <Gallery id={id} image={image} gallarey={gallarey} />
            </div>
            <div className="col-10 col-md-6 mx-auto">
              <SingleProductInfo
                name={name}
                brand={brand}
                price={price}
                stars={stars}
                desription={desription}
                id={id}
              />
            </div>
          </div>
        </div>
      </section>
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      />
      <ClientSlider />
    </>
  );
};

export default SingleProduct;
*/
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photoUrl from './shoes.jpg';
import './SingleProduct.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Stars from '../Stars/Stars';

import { formatPrice } from '../../utils/formatPrice';
import { addToCart } from '../../redux/products/products_actions';


const SingleProduct = ({ codePro, nomPro, prix, qte, description, actif, prixAchat, stars, photos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (selectedIndex) => {
    setCurrentImageIndex(selectedIndex);
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      codePro,
      nomPro,
      prix,
      qte,
      description,
      actif,
      prixAchat,
      stars,
      photos,
    };
    dispatch(addToCart(product));
  };



  return (
    <div className="container single-product-container  my-5 p-4">
      <div className="row " >
      
          <div className="image-gallery d-flex mt-3">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photoUrl}
                alt={`Thumbnail ${index}`}
                className="img-thumbnail"
              />
            ))}
          </div>
        <div className="col-md-6 product-image">
          <Carousel activeIndex={currentImageIndex} onSelect={handleImageChange}>
            {photos.map((photo, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={photoUrl}alt={nomPro  + ' Image ' + (index + 1)} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6 product-info" >
          <h2 className='product-title '>{nomPro}</h2>
          <p className="product-code">Code: {codePro}</p>
          <div className="product-details">
            <p><h4>{description} </h4></p>
            <p><strong>Stock: </strong> {qte}</p>
            <p><strong>Active: </strong> {actif ? 'Yes' : 'No'}</p>
            <Stars stars={stars} />
            <p><strong>Purchase price: </strong> €<h5>{prixAchat.toFixed(2)}</h5></p>
            <button
              onClick={handleAddToCart}
              type="button"
              className="btn btn-black"
            >
              Add To Cart
            </button>
          </div>
          {/* Add "Add to Cart" button or similar functionality here */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
