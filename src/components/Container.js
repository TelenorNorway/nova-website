import React from "react";
import * as styles from "./Container.module.css";

const Container = ({ children, ...props }) => (
    <div {...props} className={[styles.main, props.className].join(" ")}>
        <div className={styles.innerContainer}>
            {children}
        </div>
    </div>
);

export default Container;
