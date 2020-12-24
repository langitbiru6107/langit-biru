import { Link } from "gatsby";
import React from "react";
import { PostDetailFragment } from "../../types/gatsby-graphql";

const PostItemList: React.FC<{
  slug?: string;
  title?: string;
  description?: string;
  date?: string;
  chapter?: number;
}> = ({ slug, title, description, date, chapter }) => (
  <article className="post-item__list">
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
);

const PostItem: React.FC<{
  title: string;
  posts: PostDetailFragment["nodes"];
}> = ({ title, posts }) => {
  return (
    <div className="post-item">
      <h3>{title}</h3>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <>
          {posts.map(({ fields, frontmatter }) => (
            <PostItemList {...{ ...fields, ...frontmatter }} />
          ))}
        </>
      )}
    </div>
  );
};

export default PostItem;
