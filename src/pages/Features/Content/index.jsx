import { MessageCircleMore } from "lucide-react";
import Whitepaper from './output.mdx'

import { container, leftSection, heroH1, box } from "./styles.css";

const Content = () => {
  return (
    <section className={container}>
      <div className={leftSection}>
        <h1 className={heroH1}>
          Get in touch! <MessageCircleMore size={55} strokeWidth={1.5} />
        </h1>

        <div className={box}><Whitepaper /></div>
      </div>
    </section>
  );
};

export default Content;
