import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/actualites/banner";
import Title from "../components/actualites/title";
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
      }
    `}
    render={(data) => (
      <Layout>
        <Banner />
        <div class="page-actualites">
          <div class="container">
            <div class="row">
              <Title />
              <div className="blog-grids">
                {data.allWordpressPost.edges.map(({ node }) => (
                  <div key={node.slug} className="grid">
                    <div className="entry-media">
                      {node.featured_media && (
                        <Img
                          src={
                            node.featured_media.localFile.childImageSharp.sizes
                              .src
                          }
                          sizes={
                            node.featured_media.localFile.childImageSharp.sizes
                          }
                          alt="blog_image_one"
                          className="img-fluid"
                        />
                      )}
                    </div>
                    <div className="entry-body">
                      <span className="cat">
                        {node.categories &&
                          node.categories.map(
                            (category) => `${category.name}, `
                          )}
                      </span>
                      <h3>
                        <Link
                          to={`/actualites/${node.slug}`}
                          dangerouslySetInnerHTML={{ __html: node.title }}
                        />
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      <div className="read-more-date">
                        <Link to={`/actualites/${node.slug}`}>Read More..</Link>
                        <span className="date">{node.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Blog;
