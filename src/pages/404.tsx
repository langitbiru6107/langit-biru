import { graphql, PageProps } from "gatsby";
import React from "react";
import { NotFoundPageQuery } from "../../types/gatsby-graphql";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage: React.FC<PageProps<NotFoundPageQuery>> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="404 Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
