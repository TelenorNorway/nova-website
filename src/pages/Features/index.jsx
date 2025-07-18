import FeaturesGrid from "./FeaturesGrid";
import Content from "./Content";
import ScrollToTopButton from "./ScrollToTopButton";
import Layout from '../../components/Layout/index.jsx';

const Features = () => {
    return (
      <Layout>
        <FeaturesGrid />
        <Content />
        <ScrollToTopButton />
      </Layout>
    );
}

export default Features;
