import { FiCheck } from 'react-icons/fi';

import aboutImage from '../../assets/images/SHOPPP.png';

import Title from '../Title/Title';

import './AboutInfo.scss';

const AboutInfo = () => {
  return (
    <section className="about py-5">
      <div className="container">
        <Title title="ABOUT US" />
        <div className="row">
          <div className="col-10 col-md-6 mx-auto mb-4 align-self-center">
            <h4 className="about__title">Who We Are?</h4>
            <p className="about__text">
            At babyshop, we are dedicated to providing parents and caregivers with 
            a delightful shopping experience for all their baby needs. As fellow parents ourselves, 
            we understand the joys and challenges of raising a little one, which is why we handpick each product with care and consideration. 
            </p>
            <p className="about__text">
              From adorable clothing and accessories to essential gear and thoughtful gifts, our curated selection ensures that you can find everything you need to nurture and cherish your precious bundle of joy. 
              With a commitment to quality, safety, and affordability, we strive to make parenthood a little bit easier, one delightful discovery at a time. Welcome to our online family – we're here to support you every step of the way on your parenting journey.
            </p>
            <div className="about__icons d-flex align-items-center">
              <div
                className="about_icon d-flex align-items-center mr-md-5
              "
              >
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Prompt and Reliable Delivery
                </span>
              </div>
              <div className="about_icon d-flex align-items-center">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                Personalized Assistance
                </span>
              </div>
            </div>
            <div className="about__icons d-flex align-items-center">
              <div className="about_icon d-flex align-items-center mr-md-5">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                Hassle-Free Returns here
                </span>
              </div>
              <div className="about_icon d-flex align-items-center">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                Continuous Innovation
                </span>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-6 mx-auto align-self-md-center">
            <img src={aboutImage} alt="about us" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
