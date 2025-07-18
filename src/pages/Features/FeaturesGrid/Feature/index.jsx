import GlassmorphicBox from "../../../../components/GlassmorphicBox";
import { feature, leftSection, rightSection } from "./styles.css";

const Feature = ({ title, description, image, href = "#" }) => {
    return (
      <GlassmorphicBox href={href} className={feature}>
        <div className={leftSection}>{image}</div>
        <div className={rightSection}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </GlassmorphicBox>
    );
}

export default Feature;
