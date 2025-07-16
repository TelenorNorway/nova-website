import iconSrc from './img/shippy6.png';
import { hero, heroCopy, heroH1, ctaBtn, codeSnippet, heroIllus, spire } from './styles.css';   

const codeSnippetString = `# my-app.yaml
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
        <div className={heroIllus}>
          <div>
            <pre className={codeSnippet}>
              <code>{codeSnippetString}</code>
            </pre>
            {/*<pre className={codeSnippet}><code>kubectl apply -f mast.yaml</code></pre>*/}
          </div>
          <img
            className={spire}
            src={iconSrc}
            alt="Shippy the pup smiles at you"
          />
        </div>
      </section>
    );
}

export default Hero;
