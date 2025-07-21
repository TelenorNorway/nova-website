import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import GlassmorphicBox from "../GlassmorphicBox";
import styles from "./styles.module.css";

export function cookieConsentGiven() {
  if (!localStorage.getItem("cookie_consent")) {
    return "undecided";
  }
  return localStorage.getItem("cookie_consent");
}

export default function Banner() {
  if (process.env.NODE_ENV != "production") {
    return;
  }
  const posthog = usePostHog();
  const [consentGiven, setConsentGiven] = useState("");

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven());
  }, []);

  useEffect(() => {
    if (consentGiven == "yes") {
      console.log("Opting in to tracking");
      posthog.set_config({
        disable_persistence: false,
        disable_surveys: false,
        persistence: "localStorage+cookie",
      });
      posthog.opt_in_capturing();
      posthog.persistence?.save();
    }
  }, [consentGiven]);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "yes");
    setConsentGiven("yes");
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookie_consent", "no");
    setConsentGiven("no");
  };

  return (
    <div>
      {consentGiven === "undecided" && (
        <GlassmorphicBox className={styles.banner}>
          <p>
            Hi! 👋
            <br />
            We in the <b>Telenor Cloud Platforms team</b> would like to
            understand how you use our website to improve the quality of the
            solution. In order to do so, we use cookies to track your page views
            on the site. By clicking "Accept cookies", you consent to the use of
            cookies. This consent can be revoked at any time by clicking on
            cookie consent in the footer of the page.
          </p>
          <div className={styles.buttons}>
            <button type="button" onClick={handleAcceptCookies}>
              Accept cookies
            </button>
            <span> </span>
            <button type="button" onClick={handleDeclineCookies}>
              Decline cookies
            </button>
          </div>
        </GlassmorphicBox>
      )}
    </div>
  );
}
