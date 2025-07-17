import Shippy from '../../Shippy';
import { hero, heroCopy, heroH1, ctaBtn, codeSnippet, heroIllus } from './styles.css';   

const codeSnippetString = `# Your app, as simple as:
image: myapp:1.2
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
          <pre className={codeSnippet}>
            <code>{codeSnippetString}</code>
          </pre>
          {/*<pre className={codeSnippet}><code>kubectl apply -f mast.yaml</code></pre>*/}
        </div>
        <Shippy />
      </div>
    </section>
  );
}

export default Hero;
