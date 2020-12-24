import { Link } from "gatsby";
import React from "react";
import { PostDetailFragment } from "../../types/gatsby-graphql";
import PostItemList from "./PostItemList";

const PostItem: React.FC<{
  title: string;
  posts: PostDetailFragment["nodes"];
  slug?: string;
}> = ({ title, posts, slug }) => {
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

      {slug && (
        <div className="post-item__more">
          <Link to={slug}>See more</Link>
        </div>
      )}
    </div>
  );
};

export default PostItem;
