import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';
import Title from '../Title/Title';
import Stores from '../Stores/Stores';

import store1 from '../../assets/images/SHOP1.png';
import store2 from '../../assets/images/SHOP2.png';
import store3 from '../../assets/images/SHOP3.png';
import store4 from '../../assets/images/SHOP4.png';

const ContactUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="CONTACT US" />
        <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <ContactInfo />
          </div>
          <div className="col-10 col-md-9 mx-auto">
            <ContactForm />
          </div>
        </div>
        <div className="pt-5 pb-4">
          <Title title="OUR STORES" />
        </div>
        <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store4} title="new york" />
          </div>
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store2} title="london" />
          </div>
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store3} title="oslo" />
          </div>
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store1} title="Egypt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
