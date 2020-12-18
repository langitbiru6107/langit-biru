import { Link } from "gatsby";
import React from "react";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ title, children }: Props) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} LangitBiru6107</footer>
    </div>
  );
};

export default Layout;
