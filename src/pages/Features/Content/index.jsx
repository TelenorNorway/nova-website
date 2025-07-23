import React, { useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import image from "./img/image6.png";
import image5 from "./img/image5.png";
import image7 from "./img/image7.png";
import image8 from "./img/image8.png";
import image9 from "./img/image9.png";
import image10 from "./img/image10.png";
import image11 from "./img/image11.png";
import image12 from "./img/image12.png";

import GlassmorphicBox from "../../../components/GlassmorphicBox";
import {
  mainSection,
  h1,
  footnote,
  contactUs,
  contentContainer,
  leftPanel,
  rightPanel,
  drawer,
  plus,
  plusSymbol,
  plusSymbolActive,
} from "./styles.css";

const Content = () => {
  return (
    <section>
      <div className={mainSection}>
        <Section
          title="Organizational Transformation"
          id="organizational-transformation"
          image={image}
          description={
            <>
              <h2>Build Better, Ship Faster</h2>
              <p>
                Telenor's Platform isn’t just a platform - it’s a mindset shift.
                By embracing GitOps, DevSecOps, and self-service principles,
                your organization cultivates a high-trust, high-velocity
                engineering culture. With Telenor's Platform as your foundation,
                you’re not just accelerating delivery - you’re building the
                future of cloud-native resilience and inTelenor's Platformtion.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="GitOps-Driven Control">
              Telenor's Platform empowers teams with version-controlled
              infrastructure and application delivery. Changes are transparent,
              auditable, and reversible - enabling safer, faster deployments at
              scale.
            </Drawer>
            <Drawer title="DevSecOps by Design">
              Woven into the core of the platform, Telenor's Platform promotes
              proactive threat mitigation, compliance automation, and
              secure-by-default practices from day one.
            </Drawer>
            <Drawer title="Developer Self-Service">
              Give your teams the autonomy to spin up environments, deploy
              services, and manage infrastructure without waiting on ops.
              Telenor's Platform puts power in their hands - safely.
            </Drawer>
            <Drawer title="Effortless Scalability">
              Telenor's Platform adapts to your needs, whether you're serving
              ten users or ten million. Its scalable architecture ensures
              consistent performance and reliability at every stage.
            </Drawer>
            <Drawer title="A Joyful Developer Experience">
              From intuitive interfaces to seamless integrations, Telenor's
              Platform removes the obstacles that slow down development - so
              your teams can stay in the zone and ship with confidence.
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="Self-Service Infrastructure"
          id="self-service-infrastructure"
          image={image5}
          description={
            <>
              <h2>Unlock Developer Agility with Secure Self-Service</h2>
              <p>
                As organizations race to embrace the cloud, many hit a wall: how
                do you stay fast and stay in control? Traditional IT gatekeeping
                slows teams down and stifles inTelenor's Platformtion. Telenor's
                Platform solves this by delivering a cloud platform built around{" "}
                <b>secure self-service</b> - empowering teams to move quickly
                while staying aligned with governance, security, and
                cost-efficiency goals. By giving engineers the autonomy to
                manage resources within clear guardrails, Telenor's Platform
                helps you accelerate delivery, improve operational efficiency,
                and boost developer satisfaction - without compromising control.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Speed as a Competitive Advantage">
              <h3>Reduce friction between idea and execution</h3>
              <p>
                Telenor's Platform lets developers provision infrastructure
                instantly within policy-defined boundaries. That means:
              </p>

              <ul>
                <li>Shorter time-to-value</li>
                <li>Less reliance on centralized Ops teams</li>
                <li>Higher inTelenor's Platformtion velocity</li>
              </ul>
            </Drawer>
            <Drawer title="Operational Efficiency and Cost Control">
              <h3>Say goodbye to bottlenecks and ballooning budgets</h3>
              <p>
                Manual provisioning and ticket queues are expensive - in time
                and money. Telenor's Platform’s self-service model includes:
              </p>
              <ul>
                <li>Quotas and policy-driven access</li>
                <li>Cost visibility and guardrails baked in</li>
                <li>Fewer tickets and less shadow IT</li>
              </ul>
            </Drawer>
            <Drawer title="Security and Compliance at Scale">
              <h3>Self-service doesn’t mean chaos</h3>
              <p>
                Telenor's Platform embeds guardrails that enforce security and
                compliance, ensuring every deployment aligns with org-wide
                policies. Core features include:
              </p>
              <ul>
                <li>
                  <b>Policy-as-Code</b> for programmable security rules
                </li>
                <li>
                  <b>RBAC</b> to manage permissions cleanly and safely
                </li>
                <li>
                  <b>Mature templates</b> to standardize secure deployments
                </li>
              </ul>
            </Drawer>
            <Drawer title="Developer Experience">
              <h3>Frictionless workflows that retain top talent</h3>
              <p>
                Engineers thrive when they can move fast without red tape.
                Telenor's Platform enhances the developer journey with:
              </p>
              <ul>
                <li>Intuitive UIs for managing resources</li>
                <li>GitOps-based pipelines for easy deployments</li>
                <li>Built-in observability for debugging and insights</li>
              </ul>
              <p>
                The result? Higher productivity, lower burnout, and stronger
                engineering culture - backed by industry research like the 2024
                DORA report.
              </p>
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="Built-in Security"
          id="devsecops"
          image={image7}
          description={
            <>
              <h2>Security and Privacy You Can Trust</h2>
              <p>
                In a cloud-native world, protecting your data, applications, and
                infrastructure isn’t optional - it’s mission-critical. Telenor's
                Platform is built with security and privacy at its core, using a
                multi-layered defense strategy grounded in industry best
                practices and the operational rigor of Telenor. From encryption
                to incident response, Telenor's Platform gives you the
                confidence to build, scale, and inTelenor's Platformte - without
                compromising safety.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Defense-in-Depth by Design">
              <h3>Security isn’t an add-on - it’s a foundation</h3>
              <p>
                Telenor's Platform includes multiple integrated security layers
                to proactively defend against threats:
              </p>
              <ul>
                <li>
                  <b>Identity & Access Management (IAM)</b>: Enforces
                  fine-grained permissions so only the right people access the
                  right systems.
                  <b>End-to-End Data Protection:</b> Ensures data is encrypted
                  both at rest and in transit.
                  <b>Network Security:</b> Shields distributed systems from
                  unauthorized traffic.
                  <b>Compliance & Auditing:</b> Maintains regulatory adherence
                  through automated checks and MFA.
                  <b>Monitoring & Incident Response:</b> Enables fast detection
                  and containment of threats.
                </li>
              </ul>
            </Drawer>
            <Drawer title="Built on Telenor's Defendable Architecture">
              <h3>Proven, enterprise-grade security from day one</h3>
              <p>
                Telenor’s deep experience in managing critical infrastructure
                forms the foundation for Telenor's Platform’s security posture.
                Telenor's Platform follows Telenor’s Defendable Architecture
                principles, delivering:
              </p>
              <ul>
                <li>
                  <b>Strong Encryption Standards</b> to protect data integrity
                </li>
                <li>
                  <b>Routine Disaster Recovery Drills</b> to ensure platform
                  resilience
                </li>
                <li>
                  <b>Penetration Testing & 24/7 SOC Oversight</b> for threat
                  prevention
                </li>
                <li>
                  <b>Defined Incident Response Playbooks</b> for rapid
                  containment
                </li>
              </ul>
            </Drawer>
            <Drawer title="Privacy-First Principles">
              <h3>Data privacy is more than compliance - it’s a promise</h3>
              <p>
                Telenor's Platform takes a holistic approach to privacy by
                embedding protections into every layer:
              </p>
              <ul>
                <li>
                  <b>Data Residency & Sovereignty:</b> You stay in control of
                  where your data lives
                </li>
                <li>
                  <b>Strong Encryption Practices:</b> Protect your data in
                  transit and at rest
                </li>
                <li>
                  <b>Granular Access Controls:</b> Prevent unauthorized access
                  with identity-driven policies
                </li>
                <li>
                  <b>GDPR Compliance:</b> Align with legal standards to avoid
                  regulatory risk
                </li>
                <li>
                  <b>Transparent Processing:</b> Build trust with clear privacy
                  policies and accountability
                </li>
                <li>
                  <b>Audit-Ready Framework:</b> Regular assessments to minimize
                  risk
                </li>
                <li>
                  <b>Data Minimization:</b> Only collect and retain what’s
                  necessary
                </li>
              </ul>
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="Cloud Native"
          id="cloud-native"
          image={image8}
          description={
            <>
              <h2>Embrace Cloud‑Native Freedom</h2>
              <p>
                Cloud‑native isn’t just a buzzword - it’s a mindset. By
                combining microservice architecture, containerization, and
                DevSecOps, Telenor's Platform unleashes flexible, scalable, and
                secure applications that thrive in any environment. Build fast,
                scale effortlessly, and sleep soundly knowing security travels
                with every deploy.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Microservice Architecture">
              <h3>Small, independent services that play big together</h3>
              <p>
                Break monoliths into bite‑sized components you can develop,
                deploy, and scale on their own - boosting agility and fault
                isolation.
              </p>
            </Drawer>
            <Drawer title="Containers Everywhere">
              <h3>Package once, run anywhere</h3>
              <p>
                Each microservice ships with all its dependencies, ensuring
                consistent behavior from laptop to production.
              </p>
            </Drawer>
            <Drawer title="Elastic Scalability">
              <h3>Grow (or shrink) on demand</h3>
              <p>
                Automatic right‑sizing keeps performance high and costs in check
                as traffic ebbs and flows.
              </p>
            </Drawer>
            <Drawer title="DevSecOps Built‑In">
              <h3>Security woven through the entire lifecycle</h3>
              <p>
                Shift‑left practices, automated policy checks, and continuous
                monitoring harden every stage from code to runtime.
              </p>
            </Drawer>
            <Drawer title="Rapid Iteration & Agility">
              <h3>Ship features at the speed of ideas</h3>
              <p>
                CI/CD pipelines and container‑based workflows cut cycle times,
                so teams can experiment, test, and release faster.
              </p>
            </Drawer>
            <Drawer title="Resilience by Design">
              <h3>Isolate faults, protect uptime</h3>
              <p>
                When one service stumbles, the rest keep running - safeguarding
                user experience and revenue.
              </p>
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="GitOps Automation"
          id="gitops"
          image={image9}
          description={
            <>
              <h2>Ship with Confidence through GitOps</h2>
              <p>
                GitOps puts both your code and infrastructure in Git
                repositories, creating a single source of truth. Every change -
                from feature branches to cluster tweaks - follows the same
                automated, version‑controlled pipeline, boosting reliability and
                speed across your entire delivery flow.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Visibility and Traceability">
              <h3>Know exactly who changed what, when, and why</h3>
              <p>
                All modifications live in Git history, eliminating mystery
                scripts and late‑night troubleshooting sessions.
              </p>
            </Drawer>
            <Drawer title="Instant Rollbacks">
              <h3>Fix issues in a few clicks, not a few hours</h3>
              <p>
                Reverting to a last‑known‑good state is as simple as rolling
                back a commit, minimizing downtime and stress.
              </p>
            </Drawer>
            <Drawer title="Declarative Infrastructure">
              <h3>Define your desired state in code</h3>
              <p>
                Infrastructure is described in Git, so you can version, review,
                and roll back changes just like application code.
              </p>
            </Drawer>
            <Drawer title="Streamlined Collaboration">
              <h3>Dev and Ops unite under one workflow</h3>
              <p>
                Working from a shared repository removes handoffs, accelerates
                feedback loops, and keeps everyone on the same page.
              </p>
            </Drawer>
            <Drawer title="Security by Design">
              <h3>Every change is reviewed before production</h3>
              <p>
                Pull requests, automated checks, and audit trails bake
                compliance and governance into your release process from day
                one.
              </p>
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="Data & AI Platform"
          id="data-ai-platform"
          image={image10}
          description={
            <>
              <h2>Unlock Data and AI Excellence with Telenor's Platform</h2>
              <p>
                Telenor's Platform weaves best‑in‑class DataOps, analytics, and
                machine‑learning tools into one seamless platform. From
                reproducible data transformations to production‑grade AI, your
                teams get everything they need to turn raw data into real‑time
                insights and intelligent products - minus the complexity.
              </p>
              <p>
                It's time to make smarter decisions and more intelligent
                products.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Consistent Data Transformations">
              <h3>
                dbt and Dataform keep pipelines reproducible and trustworthy
              </h3>
              <p>
                Model your data once, test it automatically, and share clean,
                documented datasets across every team.
              </p>
            </Drawer>
            <Drawer title="Seamless Data Integration">
              <h3>AirByte moves data wherever it needs to go</h3>
              <p>
                Hundreds of pre‑built connectors sync sources to your warehouse
                with minimal setup and zero hand‑rolled ETL scripts.
              </p>
            </Drawer>
            <Drawer title="Orchestrated Workflows">
              <h3>Cloud Composer coordinates every step</h3>
              <p>
                Schedule and monitor DAGs that span ingestion, transformation,
                and ML training - all from a single control plane.
              </p>
            </Drawer>
            <Drawer title="Interactive Analytics & BI">
              <h3>BigQuery plus Looker deliver insight on demand</h3>
              <p>
                Query petabyte‑scale datasets in seconds, then explore them in
                intuitive dashboards that drive smarter decisions.
              </p>
            </Drawer>
            <Drawer title="End‑to‑End AI Lifecycle">
              <h3>Vertex AI accelerates model building and deployment</h3>
              <p>
                Automated data labeling, hyperparameter tuning, and managed
                serving let you ship ML to production without babysitting
                infrastructure.
              </p>
            </Drawer>
            <Drawer title="Faster Time‑to‑Value">
              <h3>
                One cohesive environment equals less overhead, more impact
              </h3>
              <p>
                By unifying data and AI tooling under Telenor's Platform, teams
                iterate quickly, reduce maintenance toil, and surface insights
                that propel the business forward.
              </p>
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="Multi-Cloud Ready"
          id="multi-cloud"
          image={image11}
          description={
            <>
              <h2>One Platform, Endless Cloud Freedom</h2>
              <p>
                Telenor's Platform lets you run workloads on Azure and Google
                Cloud without the usual headaches. By unifying dev workflows,
                IaC, security, CI/CD, and observability, it delivers a seamless
                multi‑cloud experience that keeps governance tight and overhead
                low.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Multi‑Cloud Flexibility">
              <h3>Pick the best cloud for your workload</h3>
              <p>
                Move apps between Azure and Google Cloud on your terms – no
                vendor lock‑in, no rewrites.
              </p>
            </Drawer>
            <Drawer title="Unified Developer Experience">
              <h3>Same smooth workflow, whichever cloud you choose</h3>
              <p>
                Deployment workflows, templates, and CLIs stay consistent, so
                teams can focus on code, not cloud idiosyncrasies.
              </p>
            </Drawer>
            <Drawer title="Infrastructure as Code Everywhere">
              <h3>One repo, two clouds, zero drift</h3>
              <p>
                GitOps and IaC abstractions ensure environments are reproducible
                and governed across providers.
              </p>
            </Drawer>
            <Drawer title="Centralized Security & Compliance">
              <h3>Guardrails that travel with your workloads</h3>
              <p>
                Shared DevSecOps pipelines, RBAC, and policy checks keep
                standards intact whether you deploy to Azure or GCP.
              </p>
            </Drawer>
            <Drawer title="End‑to‑End CI/CD Pipelines">
              <h3>Build once, deploy anywhere</h3>
              <p>
                Automated pipelines handle container builds, tests, and rollouts
                consistently.
              </p>
            </Drawer>
            <Drawer title="Observability Under One Roof">
              <h3>Unified dashboards for logs, metrics, and traces</h3>
              <p>
                Visiblility with the same tools that let you troubleshoot and
                optimize without juggling multiple monitoring tools.
              </p>
            </Drawer>
          </ContentDrawers>
        </Section>

        <Section
          title="Operational Model"
          id="operational-model"
          image={image12}
          description={
            <>
              <h2>
                Telenor's Platform’s Operating Model: Built for Continuous
                Evolution
              </h2>
              <p>
                Telenor's Platform isn’t just a platform - it’s a living
                ecosystem. Our operating model is refined every quarter to match
                Telenor’s dynamic landscape and keep developers in flow. Six
                interconnected pillars - Platform Development, Service Delivery,
                People & Organization, Technology & Architecture, Performance
                Management, and Governance - work together so you can ship
                cloud‑native applications faster, safer, and with less friction.
              </p>
            </>
          }
        >
          <ContentDrawers>
            <Drawer title="Platform Development">
              <h3>Community‑driven features, product mindset</h3>
              <p>
                We treat Telenor's Platform as a product: capturing demands,
                prioritizing by value, and releasing in a steady DevSecOps
                cadence. Quarterly intake sessions ensure the roadmap reflects
                both strategic goals and day‑to‑day developer pain points.
              </p>
            </Drawer>
            <Drawer title="Community First">
              <h3>Regular syncs with execs and devs</h3>
              <p>
                Continuous dialogue and open voting keep priorities transparent
                and balanced between business outcomes and real‑world needs.
              </p>
            </Drawer>
            <Drawer title="Agile & DevSecOps by Default">
              <h3>Iterate early, deliver often</h3>
              <p>
                A groomed backlog and cross‑functional collaboration turn
                demands into incremental releases - so users see value fast and
                often.
              </p>
            </Drawer>
            <Drawer title="Reusable Components">
              <h3>Build once, share everywhere</h3>
              <p>
                Scalable, modular architecture means new features become
                platform building blocks others can adopt, boosting efficiency
                and reducing duplicate work.
              </p>
            </Drawer>
            <Drawer title="“You Build It, You Run It”">
              <h3>Shared ownership drives quality</h3>
              <p>
                Teams who create services on Telenor's Platform own them in
                production, fostering accountability and a sustainable,
                high‑performing ecosystem.
              </p>
            </Drawer>
            <Drawer title="Transparent Roadmaps">
              <h3>Vote, track, and trust the journey</h3>
              <p>
                An open roadmap lets every user see what’s coming, cast votes,
                and follow progress - creating a culture of collaboration and
                continuous improvement.
              </p>
            </Drawer>
          </ContentDrawers>
        </Section>
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

const Section = ({ title, id, image, description, children }) => {
  return (
    <section>
      <h1 className={h1} id={id}>
        {title}
      </h1>

      <img src={image} />
      <div className={contentContainer}>
        <GlassmorphicBox className={leftPanel}>{description}</GlassmorphicBox>
        <GlassmorphicBox className={rightPanel}>{children}</GlassmorphicBox>
      </div>
    </section>
  );
};

const ContentDrawers = ({ children }) => {
  // Accepts Drawer children, but we want to control their open/close state
  // We'll clone each Drawer and inject open/close state and toggle handler
  const [openIndex, setOpenIndex] = useState(null);

  // Only accept array of children
  const drawerChildren = React.Children.toArray(children);

  return (
    <div>
      {drawerChildren.map((child, idx) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, {
          isOpen: openIndex === idx,
          onToggle: () => setOpenIndex(openIndex === idx ? null : idx),
          key: idx,
        });
      })}
    </div>
  );
};

const Drawer = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className={drawer + " drawer-expandable" + (isOpen ? " open" : "")}>
      <button
        className="drawer-toggle"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="drawer-title">{title}</span>
        <span className={plus}>
          <span
            className={cx(plusSymbol, { [plusSymbolActive]: isOpen })}
          ></span>
          <span
            className={cx(plusSymbol, { [plusSymbolActive]: isOpen })}
          ></span>
        </span>
      </button>
      <div
        className="drawer-content"
        style={{
          maxHeight: isOpen ? 500 : 0,
          padding: isOpen ? "16px 16px 32px 16px" : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(.4,0,.2,1), opacity 0.2s",
        }}
      >
        {isOpen && <div>{children}</div>}
      </div>
    </div>
  );
};

export default Content;
