import cx from "classnames";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../ConsentBanner";
import { container, innerContainer } from "./styles.css.ts";

const Layout = ({ className, children, ...props }) => {
  return (
    <div className={cx(container, className)} {...props}>
      <div className={innerContainer}>
        <Header />
        {children}
        <Footer />
        <Banner />
      </div>
    </div>
  );
};

export default Layout;
