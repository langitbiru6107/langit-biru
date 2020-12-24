import { graphql, PageProps } from "gatsby";
import React from "react";
import { IndexPageQuery } from "../../types/gatsby-graphql";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import SEO from "../components/SEO";

const IndexPage: React.FC<PageProps<IndexPageQuery>> = ({ data }) => {
  const blogPosts = data.blogPosts.nodes;
  const storyPosts = data.storyPosts.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <PostItem title="Blog Updates" posts={blogPosts} slug="/blog" />
      <PostItem
        title="Story Updates"
        posts={storyPosts}
        slug="/unofficial-love"
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
      limit: 3
    ) {
      ...postDetail
    }

    storyPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: DESC }
      filter: { frontmatter: { type: { eq: "story" } } }
      limit: 3
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
