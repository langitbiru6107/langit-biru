import { Link } from "gatsby";
import React from "react";
import Nav from "./Nav";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ title, children }: Props) => {
  return (
    <div className="wrapper">
      <Nav />
      <header>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} LangitBiru6107</footer>
    </div>
  );
};

export default Layout;
