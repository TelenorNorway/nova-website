import cx from 'classnames';
import iconSrc from './img/icon3.png';
import { hero, heroCopy, heroH1, ctaBtn, codeSnippet, heroIllus, spire } from './styles.css';   

const Hero = () => {
    return (
        <section className={hero}>
            <div className={heroCopy}>
                <h1 className={heroH1}>The&nbsp;cloud‑native platform for Kubernetes.</h1>
                <button className={ctaBtn}>Get Started</button>
                {/*<pre className={codeSnippet}><code>kubectl apply -f mast.yaml</code></pre>*/}
            </div>
            <div className={heroIllus}>
                <img className={spire} src={iconSrc} />
            </div>
        </section>
    );
}

export default Hero;
