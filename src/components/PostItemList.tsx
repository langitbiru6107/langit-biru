import { Link } from "gatsby";
import React from "react";

const PostItemList: React.FC<{
  slug?: string;
  title?: string;
  description?: string;
  date?: string;
  chapter?: number;
}> = ({ slug, title, description, date, chapter }) => (
  <article className="post-item-list">
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

export default PostItemList;
