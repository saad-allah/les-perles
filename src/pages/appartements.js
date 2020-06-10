import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/appartements/banner";
import Titre from "../components/appartements/content";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
      title="test"
        description="test"
      />
        <Banner />
      <div class="appartements">
            <div class="container">
                <div class="row">
  <Titre />
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
