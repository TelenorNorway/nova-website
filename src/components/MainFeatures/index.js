import React from "react";
import * as styles from "./MainFeatures.module.css"

const MainFeatures = () => (
    <div className={styles.flexDisplay}>
        <div className={styles.content}>
            <img src="./clouds.png" alt="cloud platforms" className={styles.img} />
            <p className={styles.text}>The Nova platforms runs on Azure and GCP allowing you flexibility between the different cloud providers</p>
        </div>
        <div className={styles.content}>
            <img src="./nordic.png" alt="nordic countries" className={styles.img} />
            <p className={styles.text}>Nova is used in all the nordic countries running tens of thousands of workloads!</p>
        </div>
        <div className={styles.content}>
            <img src="./sec.png" alt="womp1" className={styles.img} />
            <p className={styles.text}>Nova is built on Telenors best practice security principles, such as defendable architecture </p>
        </div>
    </div>
);

export default MainFeatures;
