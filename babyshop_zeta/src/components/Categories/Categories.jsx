import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Category from './Category/Category';

import dresses from '../../assets/images/categories/babydress.png';
import accessories from '../../assets/images/categories/accesories.png';
import toys from '../../assets/images/categories/toy.png';

const Categories = ({categories}) => {
  return (
    <>
      <section className="py-5 section-bg">
        <div className="container">
          <Title title="BROWSE OUR CATEGORIES" />
          <div className="row">
          {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="col-6 col-md-4 mb-4 mb-md-0 mx-auto"
                >
                  <Link to="/dresses">
                    <Category image={category.image} title={category.name} />
                  </Link>
                </div>
              );
            })}
            
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
