import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/projets/banner";
import Content from "../components/projets/content";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="test"
        description="test"
      />
    <Banner />
      <Content />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
