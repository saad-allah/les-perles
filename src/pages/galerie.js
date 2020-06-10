import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/galeries/banner";
import Paragraph from "../components/galeries/content";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="test"
        description="test"
      />
      <Banner
      />
      <div class="page-galerie">
          <div class="container">
              <div class="row">


<Paragraph />





              </div>
          </div>
      </div>

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
