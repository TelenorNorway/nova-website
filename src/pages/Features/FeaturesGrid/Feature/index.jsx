import cx from "classnames";
import { glassmorphicBox } from "../../../../commonStyles.css"
import { feature, leftSection, rightSection } from "./styles.css";

const Feature = ({ title, description, image, href = "#" }) => {
    return (
      <a href={href} className={cx(glassmorphicBox, feature)}>
        <div className={leftSection}>{image}</div>
        <div className={rightSection}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    );
}

export default Feature;
