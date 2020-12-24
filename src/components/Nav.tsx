import { Link } from "gatsby";
import React from "react";

const links = [
  {
    name: "Home",
    slug: "/"
  },
  {
    name: "Blog",
    slug: "/blog"
  }
];

const Nav = () => {
  return (
    <nav className="top-navigation">
      <ul className="top-navigation__menu">
        {links.map(({ name, slug }) => (
          <li key={name} className="top-navigation__menu__list">
            <Link to={slug}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
