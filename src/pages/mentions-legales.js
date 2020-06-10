import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/mentions/banner";
import Paragraph from "../components/mentions/content";

import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="test"
        description="test"
      />
        <Banner />
  <Paragraph />
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
