import { Link } from "gatsby";
import React from "react";

export type PostDetail = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    chapter: number;
  };
};

const PostItem = ({ title, posts }: { title: string; posts: PostDetail[] }) => {
  return (
    <div className="post-item">
      <h2>{title}</h2>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <>
          {posts.map(
            ({
              fields: { slug },
              frontmatter: { title, description, date, chapter }
            }) => (
              <article key={slug} className="post-item__list">
                <h2>
                  <Link to={slug}>
                    {chapter !== null && `Chapter ${chapter} : `}
                    {title}
                  </Link>
                </h2>
                {date && <time>{date}</time>}
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: description
                    }}
                  />
                </section>
              </article>
            )
          )}
        </>
      )}
    </div>
  );
};

export default PostItem;
