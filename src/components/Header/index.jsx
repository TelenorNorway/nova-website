import { Link } from 'react-router-dom';
import { navbar, logo, logoIcon, navLinks, hamburger } from "./styles.css";
import NavMobile from './NavMobile';
import logoSrc from './img/icon3.png';
import { routes } from './routes'; 

const Heading = () => {
  return (
    <header className={navbar}>
      <Link to="/" className={logo}>
        <img className={logoIcon} src={logoSrc} />
        Telenor's Platform
      </Link>
      <nav className={navLinks}>
        {routes.map((route) =>
          route.to ? (
            <Link key={route.title} to={route.to}>
              {route.title}
            </Link>
          ) : (
            <a key={route.title} href={route.href}>
              {route.title}
            </a>
          )
        )}
      </nav>
      <NavMobile className={hamburger} />
    </header>
  );
};

export default Heading;
