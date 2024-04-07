import { Link } from 'react-router-dom';

import './MainBanner.scss';

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="banner__hero">
        <h1 className="banner__title">
          shop here to have
          <br />
          awesome and
          <br />
          happy kids
        </h1>
        <Link to="/products" className="btn btn-black">
          shop now
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
