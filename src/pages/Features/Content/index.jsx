import Whitepaper from './output.mdx'

import { container, mainSection, h1, box } from "./styles.css";

const Content = () => {
  return (
    <section className={container}>
      <div className={mainSection}>
        <div className={box}>
            
            <Whitepaper /></div>

        <h1 className={h1} id="organizational-transformation">
          Feature #1
        </h1>

        <div className={box}><Whitepaper /></div>
      </div>
      <div>
        We also have a whitepaper which you can download here.
      </div>
    </section>
  );
};

export default Content;
