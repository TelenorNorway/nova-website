import { Link } from 'react-router-dom';
import { hero, heroCopy, heroH1, ctaBtn, codeSnippet, heroIllus } from './styles.css';   
import CodeBlock from '../../../components/CodeBlock';
import Shippy from '../../../components/Shippy';

const codeSnippetString = `# Your database, as simple as:
apiVersion: azure.tnnova.io/v1alpha1
kind: PostgreSQLServer
metadata:
  name: my-db
spec:
  compute:
    size: Small`;

const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroCopy}>
        <h1 className={heroH1}>
          The&nbsp;cloud‑native platform for Kubernetes
        </h1>
        <Link to="/features" className={ctaBtn}>Get Started</Link>
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
