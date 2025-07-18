import Hero from "./Hero/index.jsx";
import Features from "./Features/index.jsx";
import Layout from "../../components/Layout/index.jsx";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};

export default Landing;
