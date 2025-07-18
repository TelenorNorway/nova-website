import cx from "classnames";
import Header from "../Header";
import Footer from "../Footer";
import Banner from '../ConsentBanner'
import { container } from './styles.css.ts';

const Layout = ({ className, children, ...props }) => {
    return (
        <div className={cx(container, className)} {...props}>
            <Header />
            {children}
            <Footer />
            <Banner />
        </div>
    );
}

export default Layout;
