import cx from 'classnames';
import {wrapper} from './styles.css';

const Heading = () => {
    return (
      <div className={wrapper}>
        <div>
          <Heading />
        </div>
        <div>
          <div>
            <Feature 
              title="Telenor's Cloud Platform"
              description="The sweet symphony of multiplatform and cutting edge Technologies"
            />
          </div>
        </div>
      </div>
    );
}

const Feature = ({ logo, title, description }) => {
  return (
    <div>
      <img src={logo} alt="Feature Logo" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Heading;
