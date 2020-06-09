import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/home/banner";
import Paragraph from "../components/home/content";
import ProjetF from "../components/home/projetF";
import ProjetS from "../components/home/projets";
import Appratements from "../components/home/appratement";
import Galerie from "../components/home/galerie";
import Contact from "../components/home/contact";
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
    <ProjetF />
        <ProjetS />
                <Appratements />
                        <Galerie />
                                      <Contact />

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
