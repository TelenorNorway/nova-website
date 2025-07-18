import React from 'react';
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { container } from './styles.css.ts';
import FeaturesGrid from "./FeaturesGrid";
import Content from "./Content";
import ScrollToTopButton from "./ScrollToTopButton";

const Features = () => {
    return (
        <div className={container}>
            <Header />
            <FeaturesGrid />
            <Content />
            <ScrollToTopButton />
            <Footer />
        </div>
    );
}

export default Features;
