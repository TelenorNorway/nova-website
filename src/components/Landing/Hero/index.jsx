import iconSrc from './img/shippy6.png';
import { hero, heroCopy, heroH1, ctaBtn, codeSnippet, heroIllus, shippy, floatingHeart } from './styles.css';   
import { useState } from 'react';

const codeSnippetString = `# Your app, as simple as:
image: myapp:1.2
routes:
  - url: myapp.example.com
    route: /api`;

const heartColors = ['#ff5a8a', '#ffb3c6', '#ff6f91', '#ff99ac', '#ff477e'];

const Hero = () => {
  const [hearts, setHearts] = useState([]);

  const handleShippyClick = (e) => {
    const createHeart = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const color = heartColors[Math.floor(Math.random() * heartColors.length)];
      const left = 60 + Math.random() * 20; // percent, for some horizontal randomness
      setHearts((prev) => [...prev, { id, color, left }]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 1400);
    }
    createHeart();
  };

  return (
    <section className={hero}>
      <style>{}</style>
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
        {/* Floating hearts */}
        {hearts.map((h) => (
          <span
            key={h.id}
            className={floatingHeart}
            style={{
              left: `${h.left}%`,
              top: '60%',
              fontSize: '2.2rem',
              color: h.color,
              filter: 'drop-shadow(0 2px 6px #0002)'
            }}
          >
            ♥
          </span>
        ))}
        <img
          className={shippy}
          src={iconSrc}
          alt="Shippy the pup smiles at you"
          onClick={handleShippyClick}
        />
      </div>
    </section>
  );
}

export default Hero;
