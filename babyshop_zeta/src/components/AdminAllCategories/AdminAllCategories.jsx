import { useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../Title/Title';
import AdminCategory from '../AdminCategory/AdminCategory.jsx';



const AdminAllCategories = ({ categories }) => {
  const [visible, setVisible] = useState(6);
  const { loading } = useSelector((state) => state.products);

  const showMoreCategories = () => {
    setVisible((oldValue) => oldValue + 3);
  };

  return (
    <section className="py-5">
      <div className="container">
        <Title title="ALL OUR CATEGORIES" />
        <div className="row">
          {categories.slice(0, visible).map((category) => {
            return (
              <div
                key={category.id}
                className="col-10 col-md-6 col-lg-4 mx-auto"
              >
                    <AdminCategory {...category} />
                
              </div>
            );
          })}
        </div>
        {visible === categories.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: 'center' }}
              className="col-10 mx-auto pt-3"
            >
              <button onClick={showMoreCategories} className="btn btn-grey">
                show more
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminAllCategories;
