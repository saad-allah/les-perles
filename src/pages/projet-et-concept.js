import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/projets/banner";
import Content from "../components/projets/content";
import SEO from "../components/seo";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <script async src={withPrefix("file.js")} type="text/javascript"/>
        </Helmet>

        <SEO title="Projetet concept"     description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
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
