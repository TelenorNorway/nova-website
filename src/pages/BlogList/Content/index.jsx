import * as blogs from '../../../../blog';
import Blog from '../../../components/Blog';
import { container, h1 } from "./styles.css.ts";

const Content = () => {
    return (
      <section className={container}>
        <h1 className={h1}>The Techy Tech Blog</h1>
        {Object.values(blogs)
          .sort((blog) => blog.metadata.date)
          .map((blog, key) => {
            return (
              <Blog
                key={key}
                blog={blog}
                linkTo={`/blog/${blog.metadata.slug}`}
                truncateContent
              />
            );
          })}
      </section>
    );
}

export default Content;
