import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { container } from './styles.css.ts';
import Content from "./Content/index.jsx";

const Features = () => {
    return (
        <div className={container}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Features;
