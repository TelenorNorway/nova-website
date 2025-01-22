import React from "react"
import * as styles from "./Footer.module.css"
import telenorLogo from "./telenorLogo.png"

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.logoContainer}>
      <img src={telenorLogo} alt="Telenor" className={styles.img} />
    </div>
    <ul className={styles.linksContainer}>
      <li>
        <a href="https://www.telenor.no" target="_blank">
            Telenor.no
        </a>
      </li>
      <li>
        <a href="https://www.telenor.no/om/jobbitelenor/" target="_blank">
          Jobb hos oss
        </a>
      </li>
      <li>Tilgjengelighetserklæring (TODO)</li>
    </ul>
  </footer>
)

export default Footer
