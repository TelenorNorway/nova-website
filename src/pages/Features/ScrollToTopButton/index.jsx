import React from 'react';
import { link } from './styles.css.ts';

const ScrollToTopButton = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <a
        href="#"
        className={link}
        aria-label="Scroll to top"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "" : "none",
        }}
      >
        ↑
      </a>
    );
};

export default ScrollToTopButton;
