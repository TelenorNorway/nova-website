import React from "react";
import * as styles from "./styles.module.css";

const Divider = () => (
    <div className={styles.divider}>
        <div className={[styles.dividerLine, styles.light].join(' ')}></div>
    </div>
)

export default Divider;
