import * as blogs from '../../../../blog';
import Blog from '../../../components/Blog';
import { container, h1, blogClass } from "./styles.css.ts";

const Content = () => {
    return (
      <section className={container}>
        <h1 className={h1}>The Cloud Tech Blog</h1>
        {Object.values(blogs)
          .sort((blog) => blog.metadata.date)
          .map((blog, key) => {
            return (
              <Blog
                key={key}
                blog={blog}
                linkTo={`/blog/${blog.metadata.slug}`}
                className={blogClass}
                truncateContent
              />
            );
          })}
      </section>
    );
}

export default Content;
