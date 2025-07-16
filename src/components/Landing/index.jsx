import Heading from "./Heading";
import Features from "./Features";
import { container } from './styles.css.ts';

const Landing = () => {
    return (
        <div className={container}>
            <Heading />
            <hr />
            <Features />
        </div>
    );
}

export default Landing;
