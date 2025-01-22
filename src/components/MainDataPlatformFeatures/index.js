import React from "react"
import * as styles from "./styles.module.css"

const MainDataPlatformFeatures = () => (
  <div>
    <h2>A Modern Data Platform</h2>
    <div className={styles.flexDisplay}>
      <div className={styles.content}>
        <img src="./clouds.png" alt="cloud platforms" className={styles.img} />
        <p className={styles.text}>
          Unified data platform for the Nordics, minimizing data silos and
          accelerating growth
        </p>
      </div>
      <div className={styles.content}>
        <img src="./nordic.png" alt="nordic countries" className={styles.img} />
        <p className={styles.text}>
          Data driven organization with unified data governance and catalog
        </p>
      </div>
      <div className={styles.content}>
        <img src="./sec.png" alt="womp1" className={styles.img} />
        <p className={styles.text}>
          Data democracy, distributed ownership of data products
        </p>
      </div>
    </div>
  </div>
)

export default MainDataPlatformFeatures
