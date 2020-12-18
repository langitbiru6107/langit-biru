import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
