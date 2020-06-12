import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout-index";
import Banner from "../components/home/banner";
import Paragraph from "../components/home/content";
import ProjetF from "../components/home/projetF";
import ProjetS from "../components/home/projetS";
import Appratements from "../components/home/appratement";
import Galerie from "../components/home/galerie";
import Contact from "../components/home/contact";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
      title="Accueil"
        description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
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
