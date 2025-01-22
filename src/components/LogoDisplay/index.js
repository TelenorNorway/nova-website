import React from "react";
import * as styles from "./LogoDisplay.module.css"
import backgroundTexture from "./backgroundTextureDark.mp4"

const LogoDisplay = () => (
    <div className={styles.logoContainer}>
        <video autoPlay muted loop className={styles.video}>
            <source src={backgroundTexture} type="video/mp4" />
        </video>
        <div className={styles.logoFlex}>
            <img src="/logoWhite.png" alt="Telenor" className={styles.img} />
        </div>
    </div>
);

export default LogoDisplay;
