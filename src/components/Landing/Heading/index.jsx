import cx from 'classnames';
import headerImg from './img/header.png';
import { header, headerItem, img, verticalCenter, imgContainer, textContainer } from './styles.css';
import Button from '../../Button';

const Heading = () => {
    return (
      <div className={header}>
        <div className={cx(headerItem, imgContainer)}>
          <img src={headerImg} alt="Nova Logo" className={img} />
        </div>
        <div className={cx(headerItem, textContainer)}>
          <div className={verticalCenter}>
            <h1>Telenor's Cloud Platform</h1>
            <p>
              The sweet symphony of multiplatform and cutting edge Technologies
            </p>
            <div>
              <Button>Let's Talk!</Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Heading;
