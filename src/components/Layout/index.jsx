import { Head } from 'vite-react-ssg'
import cx from "classnames";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../ConsentBanner";
import { container, innerContainer } from "./styles.css.ts";

const Layout = ({ className, children, ...props }) => {
  return (
    <>
      <Head>
        {/* The default title if not overridden by a page */}
        <title>Telenor's Cloud Platform</title>
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

export default Layout;
