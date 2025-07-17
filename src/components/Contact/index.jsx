import Header from "../Header";
import Footer from "../Footer";
import { container } from './styles.css.ts';
import Content from "./Content";

const Landing = () => {
    return (
        <div className={container}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Landing;
