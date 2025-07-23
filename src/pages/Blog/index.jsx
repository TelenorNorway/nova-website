import { useParams } from "react-router";
import * as blogs from "../../../blog";
import BlogComponent from "../../components/Blog";
import Layout from "../../components/Layout/index.jsx";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const params = useParams();
  const slug = params.slug;
  const blog = Object.values(blogs).find((blog) => blog.metadata.slug === slug);

  return (
    <Layout>
      <Helmet>
        <meta property="og:title" content={blog.title} />
        <meta property="og:url" content={`http://telenornorway.github.io/nova-website/blog/${slug}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={blog.metadata.description}
        />
        <meta
          property="og:image"
          content={`http://telenornorway.github.io/nova-website${blog.metadata.image}`}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={blog.title} />
        <meta
          name="twitter:description"
          content={blog.metadata.description}
        />
        <meta name="twitter:url" content={`http://telenornorway.github.io/nova-website/blog/${slug}`} />
        <meta
          name="twitter:image"
          content={`http://telenornorway.github.io/nova-website${blog.metadata.image}`}
        />
      </Helmet>
      <BlogComponent blog={blog} />
    </Layout>
  );
};

export default Blog;
