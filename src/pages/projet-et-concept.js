import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="test"
        description="test"
      />   
   page projet-et-concept
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
