import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import { container } from './styles.css.ts';

const Landing = () => {
    return (
        <div className={container}>
            <Header />
            <Hero />
            <Features />
        </div>
    );
}

export default Landing;
