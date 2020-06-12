import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import Banner from "../components/appartements/banner";
import Titre from "../components/appartements/content";
import ListApp1 from "../components/appartements/ListApp1";
import ListApp2 from "../components/appartements/ListApp2";
import ListApp3 from "../components/appartements/ListApp3";
import ListApp4 from "../components/appartements/ListApp4";
import SEO from "../components/seo";
import "../templates/slick.css";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <script async src={withPrefix("file.js")} type="text/javascript"/>
        </Helmet>

      <SEO
      title="Appartement"
        description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
      />
        <Banner />
      <div className="appartements">
            <div className="container">
                <div className="row">
  <Titre />
    <ListApp1 />
      <ListApp2 />
        <ListApp4/>
          <ListApp3 />
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
