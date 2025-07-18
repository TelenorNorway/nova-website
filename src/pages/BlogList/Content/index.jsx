import { Link } from 'react-router';
import * as blogs from '../../../../blog';
import GlassmorphicBox from '../../../components/GlassmorphicBox';
import { container, h1, subtext, img, blogText, date, readMore } from "./styles.css.ts";

const Content = () => {
    return (
        <section className={container}>
            <h1 className={h1}>The Techy Tech Blog</h1>
            {Object.keys(blogs).map((key) => {
                const blog = blogs[key];
                const blogDate = new Date(blog.metadata.date);
                const Blog = blog.default;
                return (
                  <article key={key}>
                    <GlassmorphicBox to={`/blog/${blog.metadata.slug}`}>
                      {blog.metadata.image && (
                        <img
                          src={blog.metadata.image}
                          alt={blog.metadata.title}
                          className={img}
                        />
                      )}
                      <div className={blogText}>
                        <h2 className={subtext}>{blog.metadata.title}</h2>
                        <Blog />
                      </div>
                      <Link
                        to={`/blog/${blog.metadata.slug}`}
                        className={readMore}
                      >
                        Read more
                      </Link>
                      <time
                        className={date}
                        dateTime={blogDate.toISOString().slice(0, 10)}
                      >
                        {blogDate.toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </GlassmorphicBox>
                  </article>
                );
            })}
        </section>
    );
}

export default Content;
