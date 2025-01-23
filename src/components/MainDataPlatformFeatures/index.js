import React from "react"
import * as styles from "./styles.module.css"
import dataplatform from './dataplatform.png'
import dataDrivenOrg from './dataDrivenOrg.png'
import dataDemocracy from './dataDemocracy.png'

const MainDataPlatformFeatures = () => (
  <div>
    <h2>A Modern Data Platform</h2>
    <div className={styles.flexDisplay}>
      <div className={styles.content}>
        <img src={dataplatform} alt="Unified data platform illustration" className={styles.img} />
        <p className={styles.text}>
          Unified data platform for the Nordics, minimizing data silos and
          accelerating growth
        </p>
      </div>
      <div className={styles.content}>
        <img src={dataDrivenOrg} alt="Data driven org illustration" className={styles.img} />
        <p className={styles.text}>
          Data driven organization with unified data governance and catalog
        </p>
      </div>
      <div className={styles.content}>
        <img src={dataDemocracy} alt="Data democracy illustration" className={styles.img} />
        <p className={styles.text}>
          Data democracy, distributed ownership of data products
        </p>
      </div>
    </div>
  </div>
)

export default MainDataPlatformFeatures
