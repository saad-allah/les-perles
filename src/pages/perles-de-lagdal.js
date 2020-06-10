import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/lesperles/banner";
import Paragraph from "../components/lesperles/content";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="test"
        description="test"
      />
    <Banner />
      <div className="vivre">
          <div className="container">
              <div className="row">
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
