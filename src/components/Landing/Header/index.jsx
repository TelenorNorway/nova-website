import cx from "classnames";
import { navbar, logo, logoIcon, navLinks } from "./styles.css";
import logoSrc from './img/icon3.png';

const Heading = () => {
  return (
    <header className={navbar}>
      <a href="#" className={logo}>
        <img className={logoIcon} src={logoSrc} />
        Telenor's Platform
      </a>
      <nav className={navLinks}>
        <a href="#features">Features</a>
        <a href="#docs">Documentation</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Heading;
