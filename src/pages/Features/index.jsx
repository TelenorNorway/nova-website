import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { container } from './styles.css.ts';
import FeaturesGrid from "./FeaturesGrid";
import Content from "./Content";

const Features = () => {
    return (
        <div className={container}>
            <Header />
            <FeaturesGrid />
            <Content />
            <Footer />
        </div>
    );
}

export default Features;
