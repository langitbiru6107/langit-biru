import { Link } from "gatsby";
import React from "react";

const Pagination: React.FC<{
  numPages: number;
  page: number;
  slug: string;
}> = ({ numPages, page, slug }) => {
  return (
    <nav className="pagination">
      <ul className="pagination__paging">
        {Array.from({ length: numPages }).map((_, index) => (
          <li
            key={`page${index}`}
            className={`pagination__paging__list ${
              page === index + 1 ? "current" : ""
            }`}
          >
            <Link to={`/${slug}/${index === 0 ? "" : `${index + 1}`}`}>
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
