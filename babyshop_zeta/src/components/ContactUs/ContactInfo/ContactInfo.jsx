import './ContactInfo.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h4
        className="contact-info__title
      contact-info__title--main mb-5"
      >
        Contact Us
      </h4>
      <h4 className="contact-info__title mb-2">HEADQUARTERS</h4>
      <p className="contact-info__text mb-4">
        Rue Melen
      </p>
      <h4 className="contact-info__title mb-2">PHONE</h4>
      <p className="contact-info__text mb-4">(237) 690 23 45 69</p>
      <h4 className="contact-info__title mb-2">support</h4>
      <p className="contact-info__text mb-4">
        babyshop@gmail.com
        <br />
        babyshophelp@gmail.com
      </p>
    </div>
  );
};

export default ContactInfo;
