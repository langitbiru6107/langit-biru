import React from "react";
import Nav from "./Nav";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <Nav />
      <header>
        <h1>Langit Biru</h1>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} LangitBiru6107</footer>
    </div>
  );
};

export default Layout;
