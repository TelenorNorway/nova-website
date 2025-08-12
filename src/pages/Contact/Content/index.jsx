import { MessageCircleMore, Slack, Linkedin } from "lucide-react";

import Shippy from "../../../components/Shippy";
import {
  container,
  leftSection,
  h1,
  box,
  rightSection,
  logoAndText,
  logo,
  text,
} from "./styles.css";
import GlassmorphicBox from "../../../components/GlassmorphicBox";

const Content = () => {
  return (
    <section className={container}>
      <div className={leftSection}>
        <h1 className={h1}>
          Get in touch! <MessageCircleMore size={55} strokeWidth={1.5} />
        </h1>

        <GlassmorphicBox className={box}>
          We would love to talk with you!
          <br />
          There are a few ways to get in touch with us
          <div className={logoAndText}>
            <div className={logo}>
              <Slack />
            </div>
            <div className={text}>
              <h2>Offentlig PaaS Slack</h2>
              <p>
                If you are in the public sector, reach out via the{" "}
                <a href="https://offentlig-paas-no.slack.com/archives/C08ALK1JVT4">
                  #telenor
                </a>{" "}
                <em>Offentlig PaaS</em> Slack channel.
              </p>
              <p>
                Click here for info on{" "}
                <a target="_blank" href="https://offentlig-paas.no/">
                  how to join.
                </a>
              </p>
            </div>
          </div>
          <div className={logoAndText}>
            <div className={logo}>
              <Linkedin />
            </div>
            <div className={text}>
              <h2>LinkedIn</h2>
              <p>
                Contact our Head of Cloud Platforms{" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mats-andr%C3%A9-b%C3%A6kkelund-2b16a63/"
                >
                  Mats André Bækkelund
                </a>{" "}
                or our Product Lead{" "}
                <a target="_blank" href="https://www.linkedin.com/in/eliihen/">
                  Eline Henriksen
                </a>{" "}
                on LinkedIn.
              </p>
            </div>
          </div>
          <div className={logoAndText}>
            <div className={logo}>
              <Slack />
            </div>
            <div className={text}>
              <h2>Internal Slack</h2>
              <p>
                If you are Telenor internal, please use the #nova-support Slack
                channel.
              </p>
            </div>
          </div>
        </GlassmorphicBox>
      </div>
      <div
        className={rightSection}
        style={{ position: "relative", overflow: "visible" }}
      >
        <Shippy variation="radio" />
      </div>
    </section>
  );
};

export default Content;
