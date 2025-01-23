import * as React from "react"
import LogoDisplay from "../LogoDisplay"
import Footer from "../Footer"
import * as styles from "./styles.module.css"

const Layout = ({ location, children, ...props }) => {
// className="global-wrapper" 
   return (
    <div {...props} className={[styles.main, props.className].join(" ")}>
      <LogoDisplay />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
