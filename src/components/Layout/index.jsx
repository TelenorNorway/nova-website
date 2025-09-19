import { Head } from "vite-react-ssg";
import cx from "classnames";
import { PostHogProvider } from "posthog-js/react";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../ConsentBanner";
import { container, innerContainer } from "./styles.css.ts";

export default function Layout(props) {
  return (
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        defaults: "2025-05-24",
        capture_exceptions: true,
        debug: import.meta.env.MODE === "development",
        opt_out_capturing_by_default: true,
        disable_surveys: true,
      }}
    >
      <LayoutContent {...props} />
    </PostHogProvider>
  );
}

const LayoutContent = ({ className, children, ...props }) => {
  return (
    <>
      <Head>
        {/* The default title if not overridden by a page */}
        <title>Telenor's Developer Platform</title>
      </Head>
      <div className={cx(container, className)} {...props}>
        <div className={innerContainer}>
          <Header />
          {children}
          <Footer />
          <Banner />
        </div>
      </div>
    </>
  );
};
