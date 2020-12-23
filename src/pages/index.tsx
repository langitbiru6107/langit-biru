import { graphql, PageProps } from "gatsby";
import React from "react";
import { IndexPageQuery } from "../../types/gatsby-graphql";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import SEO from "../components/SEO";

const BlogIndex: React.FC<PageProps<IndexPageQuery>> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const allBlogPosts = data.allBlogPosts.nodes;
  const allStoryPosts = data.allStoryPosts.nodes;

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <PostItem title="All Blog Updates" posts={allBlogPosts} />
      <PostItem title="All Story Updates" posts={allStoryPosts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }

    allBlogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      ...postDetail
    }

    allStoryPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: DESC }
      filter: { frontmatter: { type: { eq: "story" } } }
    ) {
      ...postDetail
    }
  }

  fragment postDetail on MarkdownRemarkConnection {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        chapter
      }
    }
  }
`;
