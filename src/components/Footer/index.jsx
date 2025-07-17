import { text, links } from "./styles.css";

const Footer = () => {
  return (
    <footer className={text}>
      <p>
        Made with ❤️ by <a href="https://telenor.no">Telenor</a>
      </p>
      <div className={links}>
        <a target="_blank" href="https://www.telenor.com/privacy-notice/">
          Privacy
        </a>
        <a>Cookie consent</a>
        <a
          target="_blank"
          href="https://www.telenor.no/om/jobbitelenor/verdens_beste_utvikleropplevelse/"
        >
          Work with us!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
