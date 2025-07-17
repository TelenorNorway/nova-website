import { container, features, feature, featureIcon, featureHeading, featureParagraph } from './styles.css';

const Feature = ({ icon, heading, children }) => (
    <div className={feature}>
        <div className={featureIcon}>{icon}</div>
        <h3 className={featureHeading}>{heading}</h3>
        <p className={featureParagraph}>{children}</p>
    </div>
);

const Features = () => {
    return (
        <section className={container} id="features" style={{ paddingTop: 0 }}>
            <div className={features}>
                <Feature icon="🚀" heading="Zero‑to‑prod in minutes">
                    Get your applications to customers quickly and reliably
                </Feature>
                <Feature icon="🔒" heading="Move fast and feel safe">
                    As a company managing critical infrastructure, Telenor has a proven security posture
                </Feature>
                <Feature icon="📡" heading="Catalyst for organizational transformation">
                    Transform how your organization approaches software development
                </Feature>
            </div>
        </section>
    );
};

export default Features;
