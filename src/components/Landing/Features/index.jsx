import cx from "classnames";
import { hero, features, feature, featureIcon, featureHeading, featureParagraph } from './styles.css';

const Features = () => {
    return (
        <section className={hero} id="features" style={{ paddingTop: 0 }}>
            <div className={features}>
                <div className={feature}>
                    <div className={featureIcon}>📡</div>
                    <h3 className={featureHeading}>Plug‑and‑play K8s</h3>
                    <p className={featureParagraph}>Deploy and manage clusters with a single command.</p>
                </div>
                <div className={feature}>
                    <div className={featureIcon}>🚀</div>
                    <h3 className={featureHeading}>Zero‑to‑prod in minutes</h3>
                    <p className={featureParagraph}>Get your applications running quickly and reliably.</p>
                </div>
                <div className={feature}>
                    <div className={featureIcon}>📊</div>
                    <h3 className={featureHeading}>Ops insight</h3>
                    <p className={featureParagraph}>Gain deep visibility into your workloads and costs.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
