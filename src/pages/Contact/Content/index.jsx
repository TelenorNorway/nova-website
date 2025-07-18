import cx from "classnames";
import { glassmorphicBox  } from "../../../commonStyles.css"
import { MessageCircleMore } from "lucide-react";

import Shippy from "../../../components/Shippy";
import { container, leftSection, h1, box, rightSection } from "./styles.css";

const Content = () => {
  return (
    <section className={container}>
      <div className={leftSection}>
        <h1 className={h1}>
          Get in touch! <MessageCircleMore size={55} strokeWidth={1.5} />
        </h1>

        <div className={cx(glassmorphicBox, box)}>
          We would love to talk with you!<br />
          There are a few ways to get in touch with us
          <div>
            <h2>Offentlig PaaS Slack</h2>
            <p>
              Reach out via the{" "}
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
          <div>
            <h2>LinkedIn</h2>
            <p>
              Contact our Product Lead{" "}
              <a target="_blank" href="https://www.linkedin.com/in/eliihen/">
                Eline Henriksen
              </a>{" "}
              on LinkedIn.
            </p>
          </div>
          <div>
            <h2>Internal Slack</h2>
            <p>
              If you are Telenor internal, use the{" "}
              <a href="https://thedoozers.slack.com/archives/C01Q23VMRU3">
                #nova-support
              </a>{" "}
              Slack channel.
            </p>
          </div>
        </div>
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
