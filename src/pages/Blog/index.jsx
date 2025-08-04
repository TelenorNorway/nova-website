import { useParams } from "react-router-dom";
import * as blogs from "../../../blog";
import BlogComponent from "../../components/Blog";
import Layout from "../../components/Layout/index.jsx";
import { Head } from 'vite-react-ssg'


const Blog = () => {
  const params = useParams();
  const slug = params.slug;
  const blog = Object.values(blogs).find((blog) => blog.metadata.slug === slug);

  return (
    <Layout>
      <Head>
        <title>{`${blog.metadata.title} | The Techy Tech Blog`}</title>
        <meta property="og:title" content={blog.metadata.title} />
        <meta property="og:url" content={`https://cloud.telenor.no/blog/${slug}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={blog.metadata.description}
        />
        <meta
          property="og:image"
          content={`https://cloud.telenor.no${blog.metadata.image}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metadata.title} />
        <meta
          name="twitter:description"
          content={blog.metadata.description}
        />
        <meta name="twitter:url" content={`https://cloud.telenor.no/blog/${slug}`} />
        <meta
          name="twitter:image"
          content={`https://cloud.telenor.no${blog.metadata.image}`}
        />
      </Head>
      <BlogComponent blog={blog} />
    </Layout>
  );
};

export default Blog;
