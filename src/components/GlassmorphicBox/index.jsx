import cx from "classnames";
import { glassmorphicBox } from "./styles.css.ts";
import { Link } from 'react-router';

const GlassmorphicBox = ({ className, children, href, to, ...props }) => {
    if (href) {
        return (
            <a href={href} className={cx(glassmorphicBox, className)} {...props}>
                {children}
            </a>
        );
    } else if (to) {
        return (
            <Link to={to} className={cx(glassmorphicBox, className)} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <div className={cx(glassmorphicBox, className)} {...props}>
            {children}
        </div>
    );
}

export default GlassmorphicBox;
