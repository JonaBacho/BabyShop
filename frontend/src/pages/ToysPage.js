import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';

import Toybanner from '../assets/images/BannerTOYS.png';

const ToysPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toysProducts = products.filter(
    (product) => product.title === 'toys'
  );

  return (
    <>
      <Banner image={Toybanner} />
      <section className="py-5">
        <div className="container">
          <Title title="KIDS TOYS" />
          <div className="row">
            {toysProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-10 col-md-6 col-lg-4 mx-auto"
                >
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Hero
        subtitleHeading="world of"
        subtitleFooter="bliss"
        offer="adorable"
        title="Where tiny treasures await your sweetest kiss."
        text="Discover enchanting dresses and accessories, made for your little miss!"
      />
      <ClientSlider />
    </>
  );
};

export default ToysPage;
