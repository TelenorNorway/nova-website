import GlassmorphicBox from '../../../components/GlassmorphicBox';
import { Rocket, Lock, SatelliteDish } from "lucide-react";
import { container, features, feature, featureIcon, featureHeading, featureParagraph } from './styles.css';

const Feature = ({ icon, heading, children }) => (
    <GlassmorphicBox className={feature}>
        <div className={featureIcon}>{icon}</div>
        <h3 className={featureHeading}>{heading}</h3>
        <p className={featureParagraph}>{children}</p>
    </GlassmorphicBox>
);

const Features = () => {
    return (
        <section className={container} id="features" style={{ paddingTop: 0 }}>
            <div className={features}>
                <Feature icon={<Rocket width={48} height={48} />} heading="Zero‑to‑prod in minutes">
                    Get your applications to customers quickly and reliably
                </Feature>
                <Feature icon={<Lock width={48} height={48} />} heading="Move fast and feel safe">
                    As a company managing critical infrastructure, Telenor has a proven security posture
                </Feature>
                <Feature icon={<SatelliteDish width={48} height={48} />} heading="Catalyst for organizational transformation">
                    Transform how your organization approaches software development
                </Feature>
            </div>
        </section>
    );
};

export default Features;
