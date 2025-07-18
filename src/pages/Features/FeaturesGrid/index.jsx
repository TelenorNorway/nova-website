import {
  SatelliteDish,
  Hammer,
  LockKeyhole,
  GitCompareArrows,
  ChartNoAxesColumnIncreasing,
  Cloud,
} from "lucide-react";

import { container, leftSection, h1, subtext, featuresGrid } from "./styles.css";
import Feature from "./Feature";

const FeaturesGrid = () => {
  return (
    <section className={container}>
      <div className={leftSection}>
        <h1 className={h1}>Features that spark joy</h1>
        <p className={subtext}>
          Which feature in Telenor's platform do you want to learn about today?
        </p>

        <div className={featuresGrid}>
          <Feature
            title="Organizational Transformation"
            description="Transform your organization with Telenor"
            href="#organizational-transformation"
            image={<SatelliteDish />}
          />
          <Feature
            title="Built-in DevSecOps"
            description="Security baked in every step"
            href="#devsecops"
            image={<LockKeyhole />}
          />
          <Feature
            title="GitOps Automation"
            description="Version-controlled deployments"
            href="#gitops"
            image={<GitCompareArrows />}
          />
          <Feature
            title="Data & AI Platform"
            description="From dbt to Vertex AI"
            href="#data-ai-platform"
            image={<ChartNoAxesColumnIncreasing />}
          />
          <Feature
            title="Multi-Cloud Ready"
            description="Azure & GCP by your side"
            href="#multi-cloud"
            image={<Cloud />}
          />
          <Feature
            title="Self-Service Infrastructure"
            description="Provision apps & data in minutes"
            href="#self-service-infrastructure"
            image={<Hammer />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
