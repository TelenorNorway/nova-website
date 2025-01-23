import React from "react";
import * as styles from "./AboutTelenor.module.css"


const AboutTelenor = () => (
    <div className={styles.base}>
        <div className={styles.content}>
            <img src="./aboutTelenor.jpg" className={styles.img} />
        </div>
        <div className={styles.content}>
            <body className={styles.text}>
                <h1>About Telenor</h1>
                <p>
                    Telenor is the country's largest digital service provider within mobile,
                    broadband and TV services. Every day we work to lead the way in digitalisation
                    and develop the best digital security services for our customers.
                </p>
                <p>
                    Telenor has just under 3,000 employees spread over 20 offices in
                    Norway, and is part of the Telenor Group, which has operations in eight countries. Our services and products
                    contributes to increased productivity and provides access to all digital content. Our security and
                    emergency response organization works 24/7 to keep our customers safe, and we take special care of
                    social responsibility to create safety for children and young people online. Our technology is an important
                    contributor to the green shift. In addition to cutting our own emissions, we help others to
                    reduce their when using our services.
                </p>
                <p>
                    Our headquarters is located at Fornebu in Bærum.
                </p>
            </body>
        </div>
    </div>
);

export default AboutTelenor;
