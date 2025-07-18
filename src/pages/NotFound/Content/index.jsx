import Shippy from "../../../components/Shippy";
import { container, h1, mainSection } from "./styles.css";

const Content = () => {
const handleGoBack = (e) => {
    e.preventDefault();
    window.history.back();
};

return (
    <section className={container}>
        <div
            className={mainSection}
            style={{ position: "relative", overflow: "visible" }}
        >
            <Shippy variation="confused" />
            <h1 className={h1}>Ruff! Are you lost?</h1>
            <div>
                <span>
                    Shippy tried to fetch this page, but it ran off!
                    <br />
                    Let's try to{" "}
                    <a href="#" onClick={handleGoBack}>
                        go back
                    </a>
                    , or head back to the{" "}
                    <a href="/">homepage</a>.
                </span>
            </div>
        </div>
    </section>
);
};

export default Content;
