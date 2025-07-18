import { Link } from 'react-router';

import OrganizationalTransContent from './organizationalTrans.mdx';
import SelfService from './selfService.mdx';
import Security from './security.mdx';
import CloudNative from './cloudNative.mdx';
import GitOps from './gitops.mdx';
import DataPlatform from './dataPlatform.mdx';
import MultiCloud from './multiCloud.mdx';
import OperationalModel from './operationalModel.mdx';

import GlassmorphicBox from "../../../components/GlassmorphicBox";
import { container, mainSection, h1, section, footnote, contactUs } from "./styles.css";

const Content = () => {
  return (
    <section className={container}>
      <div className={mainSection}>
        <Section
          title="Organizational Transformation"
          article={<OrganizationalTransContent />}
          id="organizational-transformation"
        />

        <Section
          title="Self-Service Infrastructure"
          article={<SelfService />}
          id="self-service-infrastructure"
        />

        <Section
          title="Built-in Security"
          article={<Security />}
          id="devsecops"
        />

        <Section
          title="Cloud Native"
          article={<CloudNative />}
          id="cloud-native"
        />

        <Section title="GitOps Automation" article={<GitOps />} id="gitops" />

        <Section
          title="Data & AI Platform"
          article={<DataPlatform />}
          id="data-ai-platform"
        />

        <Section
          title="Multi-Cloud Ready"
          article={<MultiCloud />}
          id="multi-cloud"
        />

        <Section
          title="Operational Model"
          article={<OperationalModel />}
          id="operational-model"
        />
      </div>
      <div className={footnote}>
        We can also provide a more detailed whitepaper about the platform.
        Contact us and we will send you a copy
      </div>
      <Link to="/contact" className={contactUs}>
        Contact us!
      </Link>
    </section>
  );
};

const Section = ({ title, id, article }) => {
  return (
    <article className={section}>
      <h1 className={h1} id={id}>
        {title}
      </h1>

      <GlassmorphicBox>{article}</GlassmorphicBox>
    </article>
  );
};

export default Content;
