import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Banner from "../components/appartements/banner";
import Titre from "../components/appartements/content";
import Scripts from "../components/scripts/script";
import "../templates/slick.css";

const CategorieApp = ({ data, pageContext: { category } }) => {
  const { wordpressPage } = data;
  const { allWordpressWpAppartement } = data;

  return (
    console.log(allWordpressWpAppartement),
    (
      <Layout>
        <Scripts />
        <SEO
          title={wordpressPage.title}
          titlefb={wordpressPage.yoast.opengraph_title}
          titletwitter={wordpressPage.yoast.twitter_title}
          description={wordpressPage.excerpt}
          descriptionFb={wordpressPage.yoast.opengraph_description}
          descriptionTwitter={wordpressPage.yoast.twitter_description}
          imageFb={wordpressPage.yoast.opengraph_image}
          imageTwitter={wordpressPage.yoast.twitter_image}
        />
        <Banner />
        <div className="appartements">
          <div className="container">
            <div className="row">
              <Titre />

              <>
                <div className="col-md-12">
                  <div className="title small">
                    <h3>Type : {category}</h3>
                  </div>
                </div>

                {allWordpressWpAppartement.edges.map(({ node }, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 solo wrapped-here"
                    key={i}
                  >
                    <div className="img">
                      <img
                        src={
                          node.acf.featured_image.localFile.childImageSharp
                            .resize.src
                        }
                        alt={node.acf.featured_image.alt_text}
                      />
                    </div>
                    <div className="text">
                      <p>
                        <span>Type : </span>
                        <i>
                          {" "}
                          {node.categories &&
                            node.categories.map(
                              (category) => `${category.name} `
                            )}
                        </i>{" "}
                      </p>
                      <p>
                        <span>Superficie totale : </span>
                        {node.acf.superficie_totale}
                      </p>
                      <p>
                        <span>Section : </span> {node.acf.section}
                      </p>
                      <Link
                        className="buttons"
                        to={`/appartements/${node.slug}`}
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};
export default CategorieApp;

export const pageQuery = graphql`
  query GetapptsByCat($id: String) {
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
    allWordpressWpAppartement(
      filter: { categories: { elemMatch: { name: { in: [$id] } } } }
    ) {
      edges {
        node {
          id
          categories {
            name
          }
          acf {
            featured_image {
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
            section
            superficie_totale
            contactez_nous_button
          }
          slug
          title
        }
      }
    }
  }
`;
