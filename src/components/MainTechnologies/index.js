import React from "react"
import * as styles from "./MainFeatures.module.css"

const MainFeatures = () => (
  <div>
    <h2>Cutting-edge Technologies</h2>
    <div className={styles.flexDisplay}>
      <div className={styles.content}>
        <img src="./clouds.png" alt="cloud platforms" className={styles.img} />
        <p className={styles.text}>
         Nova is a modern platform that leverages the latest in cloud-native technologies to provide a scalable, reliable, and efficient platform.
        </p>
      </div>
      <div className={styles.content}>
        <img src="./nordic.png" alt="nordic countries" className={styles.img} />
        <p className={styles.text}>
          The Nova platform embraces GitOps ensuring that our infrastructure and applications are always in sync with our codebase. We maintain popular open source GitOps components and architectures.
        </p>
      </div>
      <div className={styles.content}>
        <img src="./sec.png" alt="womp1" className={styles.img} />
        <p className={styles.text}>
          Golang
        </p>
      </div>
    </div>
  </div>
)

export default MainFeatures
