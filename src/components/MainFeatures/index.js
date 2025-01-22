import React from "react";
import * as styles from "./MainFeatures.module.css"

const MainFeatures = () => (
    <div className={styles.flexDisplay}>
        <div className={styles.content}>
            <img src="./womp1.png" alt="womp1" className={styles.img} />
            <p>meow meow :3</p>
        </div>
        <div className={styles.content}>
            <img src="./womp1.png" alt="womp1" className={styles.img} />
            <p>meow meow :3</p>
        </div>
        <div className={styles.content}>
            <img src="./womp1.png" alt="womp1" className={styles.img} />
            <p>meow meow :3</p>
        </div>
    </div>
);

export default MainFeatures;

