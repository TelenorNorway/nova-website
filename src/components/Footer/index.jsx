import { usePostHog } from "posthog-js/react";
import { text, links } from "./styles.css";

const Footer = () => {
  const posthog = usePostHog();
  const handleRevertConsent = () => {
    posthog.opt_out_capturing();
    localStorage.removeItem("cookie_consent");
    console.log("Cookie consent reverted");
    window.location.reload();
  };

  return (
    <footer className={text}>
      <p>
        Made with ❤️ by <a href="https://telenor.no">Telenor</a>
      </p>
      <div className={links}>
        <a target="_blank" href="https://www.telenor.com/privacy-notice/">
          Privacy
        </a>
        <a onClick={handleRevertConsent}>Cookie consent</a>
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
