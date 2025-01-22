import React from "react";
import * as styles from "./LogoDisplay.module.css"

const LogoDisplay = () => (
    <div className={styles.logoFlex}>
        <img src="/logo.png" alt="Telenor" className={styles.img} />
    </div>
);

export default LogoDisplay;
