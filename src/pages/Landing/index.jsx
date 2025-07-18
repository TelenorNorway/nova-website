import Header from "../../components/Header/index.jsx";
import Hero from "./Hero/index.jsx";
import Features from "./Features/index.jsx";
import Footer from "../../components/Footer/index.jsx";
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
