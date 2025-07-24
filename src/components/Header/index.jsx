import React from 'react';
import { Link } from 'react-router-dom';
import { ClientOnly } from 'vite-react-ssg'
import { navbar, logo, logoIcon, navLinks, hamburger } from "./styles.css";
import logoSrc from './img/icon3.png?w=21&h=30&format=webp';
import { routes } from './routes'; 

const NavMobile = React.lazy(() => import('./NavMobile'));

const Heading = () => {
  return (
    <header className={navbar}>
      <Link to="/" className={logo}>
        <img
          className={logoIcon}
          src={logoSrc}
          width={21}
          height={30}
          alt="Telenor's Platform logo"
        />
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
      <ClientOnly>{() => <NavMobile className={hamburger} />}</ClientOnly>
    </header>
  );
};

export default Heading;
