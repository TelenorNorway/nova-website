import { useEffect } from "react";
import FeaturesGrid from "./FeaturesGrid";
import Content from "./Content";
import ScrollToTopButton from "./ScrollToTopButton";
import Layout from '../../components/Layout/index.jsx';

const Features = () => {
    useEffect(() => {
        const scrollToHash = () => {
            const { hash } = window.location;
            if (!hash) return;
            const id = decodeURIComponent(hash.slice(1));
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        setTimeout(scrollToHash, 0);
    }, []);
    return (
      <Layout>
        <FeaturesGrid />
        <Content />
        <ScrollToTopButton />
      </Layout>
    );
}

export default Features;
