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
                    Telenor Norge er landets største digitale tjenesteleverandør innenfor mobil,
                    bredbånd og TV-tjenester. Hver dag jobber vi for å lede an i digitaliseringen
                    av Norge og utvikle de beste digitale sikkerhetstjenestene for våre kunder.
                </p>
                <p>
                    Telenor Norge har i underkant av 3000 medarbeidere fordelt på 20 kontorer i
                    Norge, og er en del av Telenor Group, som har virksomhet i åtte land. Våre tjenester og produkter
                    bidrar til økt produktivitet og gir tilgang til alt av digitalt innhold. Vår sikkerhets- og
                    beredskapsorganisasjon jobber døgnkontinuerlig med å trygge våre kunder, og vi tar et særlig
                    samfunnsansvar for å skape trygghet for barn og unge på nett. Vår teknologi er en viktig
                    bidragsyter til det grønne skiftet. I tillegg til å kutte egne utslipp, hjelper vi andre til å
                    redusere sine ved bruk av våre tjenester.
                </p>
                <p>
                    Hovedkontoret vårt ligger på Fornebu i Bærum.
                </p>
            </body>
        </div>
    </div>
);

export default AboutTelenor;
