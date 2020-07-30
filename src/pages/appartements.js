import React from "react";

import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Banner from "../components/appartements/banner";
import Titre from "../components/appartements/content";
import ListApp from "../components/appartements/ListApp";
import ListAppslider from "../components/appartements/ListAppslider";
import { SEO } from "../components/seo";
import Scripts from "../components/scripts/script";
import "../templates/slick.css";

export default ({ data }) => {
  function dedupeCategories(data) {
    const uniqueCategories = new Set();
    // Iterate over all articles
    data.allWordpressWpAppartement.edges.forEach(({ node }) => {
      // Iterate over each category in an article
      node.categories.forEach((category) => {
        uniqueCategories.add(category.name);
      });
    });
    // Create new array with duplicates removed
    return Array.from(uniqueCategories);
  }
  const dedupedCategories = dedupeCategories(data);
  return ((
      <Layout>
        <Scripts />
        <SEO
          title={data.wordpressPage.title}
          titlefb={data.wordpressPage.yoast.opengraph_title}
          titletwitter={data.wordpressPage.yoast.twitter_title}
          description={data.wordpressPage.yoast.metadesc}
          descriptionFb={data.wordpressPage.yoast.opengraph_description}
          descriptionTwitter={data.wordpressPage.yoast.twitter_description}
          imageFb={data.wordpressPage.yoast.opengraph_image.localFile.childImageSharp.resize.src}
          imageTwitter={data.wordpressPage.yoast.twitter_image.localFile.childImageSharp.resize.src}
        />
        <Banner />
        <div className="appartements">
          <div className="container">
            <div className="row">
              <Titre />
            </div>
            {dedupedCategories.map(({ node }, i) => (
              <div key={i} className="row">
                <div className="col-md-12">
                  <div className="title small">
                    <h3>Catégorie : {dedupedCategories[i]}</h3>
                  </div>
                </div>

                {i < 2 && (
              <ListAppslider catName={dedupedCategories[i]} catId={i}/>
                )}
              {i > 1 && (
                <ListApp catName={dedupedCategories[i]}/>
        )}
                </div>

            ))}
          </div>
        </div>
      </Layout>
    )
  );
};
export const pageQuery = graphql`
  query {
    allWordpressWpAppartement(sort: { fields: categories___name }) {
      edges {
        node {
          title
          date(formatString: "MMMM Do, YYYY")
          categories {
            name
          }
        }
      }
    }
    wordpressPage(wordpress_id: { eq: 20 }) {
      id
      title
      yoast {
        twitter_description
        twitter_image {
          source_url
          alt_text
          localFile {
            childImageSharp {
              resize(width: 1214, height: 1214, quality: 100) {
                height
                width
                src
              }
            }
          }
        }
        twitter_title
        opengraph_title
        opengraph_image {
          source_url
          alt_text
          localFile {
            childImageSharp {
              resize(width: 1214, height: 1214, quality: 100) {
                height
                width
                src
              }
            }
          }
        }
        opengraph_description
        metakeywords
        metadesc
      }
    }
  }
`;
