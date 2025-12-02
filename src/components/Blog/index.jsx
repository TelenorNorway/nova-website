import cx from "classnames";
import { Link } from "react-router-dom";
import authors from "../../../blog/authors.js";
import GlassmorphicBox from "../GlassmorphicBox";
import {
  blogBox,
  subtext,
  img,
  blogText,
  truncate,
  readMore,
  metadata,
  date,
  authorBox,
  authorImage,
  authorDetails,
  authorName,
} from "./styles.css.ts";

const Blog = ({ blog, linkTo, truncateContent, ...props }) => {
  const blogAuthors = blog.metadata.authors
    .map((author) => authors[author])
    .filter(Boolean);
  const blogDate = new Date(blog.metadata.date);
  const Blog = blog.default;

  const blogContent = (
    <>
      {blog.metadata.image && (
        <img
          src={blog.metadata.image}
          alt={blog.metadata.title}
          className={img}
        />
      )}
      <div className={cx(blogText, { [truncate]: truncateContent })}>
        <h2 className={subtext}>{blog.metadata.title}</h2>
        <Blog />
      </div>
    </>
  );

  return (
    <section {...props}>
      <article>
        <GlassmorphicBox className={blogBox}>
          {!!linkTo ? <Link to={linkTo}>{blogContent}</Link> : blogContent}
          {!!linkTo && (
            <Link to={linkTo} className={readMore}>
              Read more
            </Link>
          )}
          <div className={metadata}>
            <div>
              {!!blogAuthors &&
                blogAuthors.map((author) => (
                  <Author key={author} author={author} />
                ))}
            </div>
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
          </div>
        </GlassmorphicBox>
      </article>
    </section>
  );
};

const Author = ({ author }) => {
  return (
    <a className={authorBox} href={author.link}>
      <img src={author.image} alt={author.name} className={authorImage} />
      <div className={authorDetails}>
        <span className={authorName}>{author.name}</span>
        <span>{author.role}</span>
      </div>
    </a>
  );
};

export default Blog;
