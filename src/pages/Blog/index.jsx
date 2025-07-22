import { useParams } from 'react-router';
import * as blogs from '../../../blog';
import BlogComponent from "../../components/Blog";
import Layout from "../../components/Layout/index.jsx";
import { container } from "./styles.css.ts";

const Blog = () => {
    const params = useParams();

    const slug = params.slug;
    const blog = Object.values(blogs).find(blog => blog.metadata.slug === slug);
    return (
        <Layout className={container}>
            <BlogComponent blog={blog} />
        </Layout>
    );
}

export default Blog;
