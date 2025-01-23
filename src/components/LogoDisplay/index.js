import React from "react";
import * as styles from "./LogoDisplay.module.css"
import { Link } from "gatsby"
import backgroundTexture from "./backgroundTextureDark.mp4"

const LogoDisplay = () => (
    <div className={styles.logoContainer}>
        <video autoPlay muted loop className={styles.video}>
            <source src={backgroundTexture} type="video/mp4" />
        </video>
        <Link to="/" className={styles.logoFlex}>
            <img src="/logoWhite.png" alt="Telenor" className={styles.img} />
            <img src="/telenorsmall.png" alt="Telenor" className={styles.imgSmall} />        </Link>
    </div>
);

export default LogoDisplay;
