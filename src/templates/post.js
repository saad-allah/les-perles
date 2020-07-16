import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import ShareList from "../components/share";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
const BlogPost = ({ data }) => {
  const { wordpressPost } = data;
  const { allWordpressPost } = data;



  return (
    <Layout>
      <SEO
        title={wordpressPost.title}
        titlefb={wordpressPost.yoast.opengraph_title}
        titletwitter={wordpressPost.yoast.twitter_title}
        description={wordpressPost.excerpt}
        descriptionFb={wordpressPost.yoast.opengraph_description}
        descriptionTwitter={wordpressPost.yoast.twitter_description}
        imageFb={wordpressPost.featured_media.localFile.childImageSharp.resize.src}
        imageTwitter={wordpressPost.featured_media.localFile.childImageSharp.resize.src}
      />
      <div className="banner banner-blog">
        <div className="overlay"></div>
        {wordpressPost.featured_media === null ? (
          <></>
        ) : (
          <Img className='w100h100'
                             fluid={wordpressPost.featured_media.localFile.childImageSharp.fluid}
                           />
        )}
      </div>
      <div className="actualites-singlec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>{wordpressPost.title}</h2>
<ShareList />
              </div>
            </div>

            <div className="col-md-12">
              <div className="user">
                <div className="img">
                  <img
                    src={wordpressPost.author.simple_local_avatar.wordpress_96}
                  />
                </div>
                <div className="text">
                  <p>{wordpressPost.author.name}</p>
                  <p>
                    <span>Publié le {wordpressPost.date}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="block"
                dangerouslySetInnerHTML={{ __html: wordpressPost.content }}
              />
            </div>

            <div className="col-md-12">
              <div className="user-cred">
                <p>
                  <span>Auteur : </span>
                  {wordpressPost.author.name}
                </p>
                <p>
                  <span>Categorie : </span>
                  {wordpressPost.categories &&
                    wordpressPost.categories.map(
                      (category) => `${category.name} `
                    )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-actualites rel">
        <div className="container">
          <div className="row">
            {allWordpressPost.edges.map(({ node }, i) => (
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
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link className="button" to={`/actualites/${node.slug}`}>
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      yoast {
        twitter_description
        twitter_image
        twitter_title
        opengraph_title
        opengraph_image
        opengraph_description
        metakeywords
        metadesc
      }
      content
      excerpt
      categories {
        name
      }
      author {
        name
        simple_local_avatar {
          wordpress_96
        }
      }

      date(formatString: "DD/MM/YYYY")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1140, height: 395, quality: 100) {
              src
            }
          }
        }
      }
    }

    allWordpressPost(limit: 3, filter: { id: { ne: $id } }) {
      edges {
        node {
          id
          title
          slug
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
          date(formatString: "DD/MM/YYYY")
          excerpt
        }
      }
    }
  }
`;
