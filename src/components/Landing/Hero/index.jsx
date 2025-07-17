import CodeBlock from '../../CodeBlock';
import Shippy from '../../Shippy';
import { hero, heroCopy, heroH1, ctaBtn, codeSnippet, heroIllus } from './styles.css';   

const codeSnippetString = `# Your app, as simple as:
image: my_container:1.2.0
routes:
  - url: myapp.example.com
    route: /api`;

const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroCopy}>
        <h1 className={heroH1}>
          The&nbsp;cloud‑native platform for Kubernetes.
        </h1>
        <button className={ctaBtn}>Get Started</button>
      </div>
      <div className={heroIllus} style={{ position: 'relative', overflow: 'visible' }}>
        <div>
          <CodeBlock code={codeSnippetString} language="yaml" className={codeSnippet} />
        </div>
        <Shippy />
      </div>
    </section>
  );
}

export default Hero;
