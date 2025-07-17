import Header from "../Header/index.jsx";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "../Footer/index.jsx";
import { container } from './styles.css.ts';

const Landing = () => {
    return (
        <div className={container}>
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export default Landing;
