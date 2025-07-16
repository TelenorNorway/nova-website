import cx from 'classnames';
//import { button, content } from './styles.css';

const Heading = ({ children, ...props }) => {
    return (
        <button {...props} className={cx(button, props.className)}>
            <span className={content}>
                {children}
            </span>
        </button>
    );
}

export default Heading;
