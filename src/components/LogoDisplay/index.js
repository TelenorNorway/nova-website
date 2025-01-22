import React from "react";
import * as styles from "./LogoDisplay.module.css"

const LogoDisplay = () => (
    <div>
        <div>
            <img src="/logo.png" alt="Telenor" className={styles.img} />
        </div>
    </div>
);

export default LogoDisplay;
