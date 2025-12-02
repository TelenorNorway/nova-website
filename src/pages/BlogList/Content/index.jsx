import cx from "classnames";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import * as blogs from "../../../../blog";
import {
  container,
  hero,
  heroEyebrow,
  heroTitle,
  heroDescription,
  searchWrapper,
  searchInput,
  searchButton,
  blogGrid,
  blogPreview,
  blogImage,
  previewContent,
  previewDate,
  previewTitle,
  previewDescription,
  tagFilters,
  tagHeading,
  tagList,
  tagButton,
  tagButtonActive,
  emptyState,
} from "./styles.css.ts";
import GlassmorphicBox from "../../../components/GlassmorphicBox/index.jsx";

const Content = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const normalizedQuery = query.trim().toLowerCase();
  const selectedTag = searchParams.get("tag") ?? "";
  const normalizedSelectedTag = selectedTag.trim().toLowerCase();
  const hasFilters = Boolean(query || selectedTag);

  const availableTags = useMemo(() => {
    const tagSet = new Set();
    Object.values(blogs).forEach((blog) => {
      (blog.metadata.tags ?? []).forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, []);

  const posts = useMemo(() => {
    const sortedPosts = Object.values(blogs).sort(
      (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
    );

    if (!normalizedQuery && !normalizedSelectedTag) {
      return sortedPosts;
    }

    return sortedPosts.filter((post) => {
      const haystack = [
        post.metadata.title,
        post.metadata.description,
        ...(post.metadata.tags ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


      const matchesQuery = haystack.includes(normalizedQuery);
      if (!matchesQuery) {
        return false;
      }

      if (!normalizedSelectedTag) {
        return true;
      }

      const postTags =
        post.metadata.tags?.map((tag) => tag.toLowerCase()) ?? [];
      return postTags.includes(normalizedSelectedTag);
    });
  }, [normalizedQuery, normalizedSelectedTag]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set("q", value);
    } else {
      nextParams.delete("q");
    }

    setSearchParams(nextParams, { replace: true });
  };

  const handleTagClick = (tag) => {
    const nextParams = new URLSearchParams(searchParams);

    if (!tag || tag === selectedTag) {
      nextParams.delete("tag");
    } else {
      nextParams.set("tag", tag);
    }

    setSearchParams(nextParams, { replace: true });
  };

  const emptyDescriptionParts = [
    query && `keyword "${query}"`,
    selectedTag && `tag "${selectedTag}"`,
  ].filter(Boolean);

  return (
    <section className={container}>
      <header className={hero}>
        <span className={heroEyebrow}>Blog</span>
        <h1 className={heroTitle}>The Cloud Tech Blog</h1>
        <p className={heroDescription}>
          Stories and learnings from the teams building Telenor&rsquo;s cloud
          platform. Dive into engaging stories, engineering spotlights, and best
          practices from the crews running critical infrastructure at scale.
        </p>
      </header>

      <form
        className={searchWrapper}
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className={searchInput}
          type="search"
          name="q"
          placeholder="Search articles"
          aria-label="Search articles"
          value={query}
          onChange={handleSearchChange}
          autoComplete="off"
        />
        <button className={searchButton} type="submit" aria-label="Search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12.5 11h-.79l-.28-.27a5 5 0 1 0-.71.71l.27.28v.79L15 16.25 16.25 15l-3.75-4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      {availableTags.length > 0 && (
        <div className={tagFilters}>
          <span className={tagHeading}>Filter by tag</span>
          <div className={tagList}>
            <button
              type="button"
              className={cx(tagButton, {
                [tagButtonActive]: !selectedTag,
              })}
              onClick={() => handleTagClick("")}
              aria-pressed={!selectedTag}
            >
              All topics
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={cx(tagButton, {
                  [tagButtonActive]: selectedTag === tag,
                })}
                onClick={() => handleTagClick(tag)}
                aria-pressed={selectedTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {posts.length > 0 ? (
        <div className={blogGrid}>
          {posts.map((post) => {
            const date = new Date(post.metadata.date);
            return (
              <GlassmorphicBox
                key={post.metadata.slug}
                to={`/blog/${post.metadata.slug}`}
                className={blogPreview}
              >
                {post.metadata.image && (
                  <img
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    className={blogImage}
                    loading="lazy"
                  />
                )}
                <div className={previewContent}>
                  <time
                    className={previewDate}
                    dateTime={date.toISOString().slice(0, 10)}
                  >
                    {date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className={previewTitle}>{post.metadata.title}</h2>
                  <p className={previewDescription}>
                    {post.metadata.description}
                  </p>
                </div>
              </GlassmorphicBox>
            );
          })}
        </div>
      ) : (
        hasFilters && (
          <p className={emptyState}>
            {emptyDescriptionParts.length > 0
              ? `No articles match the ${emptyDescriptionParts.join(
                  " and "
                )}.`
              : "No articles match your filters."}
          </p>
        )
      )}
    </section>
  );
};

export default Content;
