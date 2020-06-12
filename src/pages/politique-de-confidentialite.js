import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/pdc/banner";
import Paragraph from "../components/pdc/content";

import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Politique de confidentialite"     description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
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
