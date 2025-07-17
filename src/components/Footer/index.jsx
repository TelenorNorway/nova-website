import { text, links } from './styles.css';

const Footer = () => {
    return (
      <footer className={text}>
        <p>
          Made with ❤️ by <a href="https://telenor.no">Telenor</a>
        </p>
        <div className={links}>
          <a href="https://www.telenor.com/privacy-notice/">Privacy</a> <a>Cookie
          Consent</a>
        </div>
      </footer>
    );
}

export default Footer;
