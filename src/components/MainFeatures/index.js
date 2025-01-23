import React from "react"
import * as styles from "./MainFeatures.module.css"

const MainFeatures = () => (
    <div>
        <h2>Telenor's cloud platform</h2>
        <div className={styles.flexDisplay}>
            <div className={styles.content}>
                <div className={styles.imgcontainer}>
                    <img src="./clouds.png" alt="cloud platforms" className={styles.img} />
                </div>
                <div className={styles.txtcontainer}>
                    <p className={styles.text}>
                        The Nova platforms runs on Azure and GCP allowing you flexibility
                        between the different cloud providers
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.imgcontainer}>
                    <img src="./nordic.png" alt="nordic countries" className={styles.img} />
                </div>
                <div className={styles.txtcontainer}>
                    <p className={styles.text}>
                        Nova is used in all the nordic countries running thousands of
                        workloads!
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.imgcontainer}>
                    <img src="./sec.png" alt="womp1" className={styles.img} />
                </div>
                <div className={styles.txtcontainer}>
                    <p className={styles.text}>
                        Nova is built on Telenors security principles
                    </p>
                </div>

            </div>
        </div>
    </div>
)

export default MainFeatures
