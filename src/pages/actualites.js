import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/actualites/banner";
import Title from "../components/actualites/title";
import { SEO } from "../components/seo";
const Blog = () => (
  <StaticQuery
    query={graphql`
      query BlogAllPostQuery {
        allWordpressPost(sort: { fields: [date], order: DESC }) {
          edges {
            node {
              date(formatString: "DD, MMM YYYY")
              title
              excerpt
              author {
                name
              }
              categories {
                id
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    id
                    sizes(maxWidth: 1000) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              slug
            }
          }
        }
        wordpressPage(wordpress_id: { eq: 39 }) {
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
    `}
    render={(data) => (
      <Layout>
        <SEO
          title={data.wordpressPage.title}
          titlefb={data.wordpressPage.yoast.opengraph_title}
          titletwitter={data.wordpressPage.yoast.twitter_title}
          description={data.wordpressPage.yoast.metadesc}
          descriptionFb={data.wordpressPage.yoast.opengraph_description}
          descriptionTwitter={data.wordpressPage.yoast.twitter_description}
          imageFb={data.wordpressPage.yoast.opengraph_image}
          imageTwitter={data.wordpressPage.yoast.twitter_image}
        />
        <Banner />
        <div className="page-actualites">
          <div className="container">
            <div className="row">
              <Title />

              {data.allWordpressPost.edges.map(({ node }, i) => (
                <React.Fragment key={i}>
                  {i === 0 && (
                    <>
                      <div className="col-md-6 bottom">
                        <div className="img">
                          {node.featured_media && (
                            <Img
                              src={
                                node.featured_media.localFile.childImageSharp
                                  .sizes.src
                              }
                              sizes={
                                node.featured_media.localFile.childImageSharp
                                  .sizes
                              }
                              alt={node.title}
                              className="img-fluid"
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 bottom">
                        <div className="text">
                          <h3>{node.title}</h3>
                          <p className="date">
                            <span>Publié le {node.date}</span>
                          </p>
                          <p
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />
                          <Link
                            className="button"
                            to={`/actualites/${node.slug}`}
                          >
                            En savoir plus
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                  {i > 0 && (
                    <div className="col-lg-4 col-md-6 col-12" key={i}>
                      <div className="rav">
                        <div className="image">
                          {node.featured_media && (
                            <Img
                              src={
                                node.featured_media.localFile.childImageSharp
                                  .sizes.src
                              }
                              sizes={
                                node.featured_media.localFile.childImageSharp
                                  .sizes
                              }
                              alt={node.title}
                              className="img-fluid"
                            />
                          )}
                        </div>
                        <div className="text">
                          <h3>{node.title}</h3>
                          <p className="date">
                            <span>Publié le {node.date}</span>
                          </p>
                          <div
                            className="snippet"
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />

                          <Link
                            className="button"
                            to={`/actualites/${node.slug}`}
                          >
                            En savoir plus
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Blog;
