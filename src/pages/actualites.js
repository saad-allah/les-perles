import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/actualites/banner";
import Title from "../components/actualites/title";
import SEO from "../components/seo";
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
        <SEO
        title="Actualites"
          description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
        />
        <Banner />
        <div className="page-actualites">
          <div className="container">
            <div className="row">
              <Title />


                {data.allWordpressPost.edges.map(({ node }, i) => (
                  <>
                  {i === 0 && <>
                       <div className="col-md-6 bottom">
                                        <div className="img">
                                          {node.featured_media && (
                                            <Img
                                              src={
                                                node.featured_media.localFile.childImageSharp.sizes
                                                  .src
                                              }
                                              sizes={
                                                node.featured_media.localFile.childImageSharp.sizes
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
                                            <p className="date"><span>Publié le {node.date}</span></p>
                                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                              <Link className="button"   to={`/actualites/${node.slug}`}>En savoir plus</Link>
                                        </div>
                                    </div>
                 </>}
                 {i > 0 && <>
                   <div className="col-lg-4 col-md-6 col-12">
                   <div className="rav">
                       <div className="image">
                         {node.featured_media && (
                           <Img
                             src={
                               node.featured_media.localFile.childImageSharp.sizes
                                 .src
                             }
                             sizes={
                               node.featured_media.localFile.childImageSharp.sizes
                             }
                             alt={node.title}
                             className="img-fluid"
                           />
                         )}
                       </div>
                       <div className="text">
                           <h3>{node.title}</h3>
                           <p className="date"><span>Publié le {node.date}</span></p>
                       <div className="snippet" dangerouslySetInnerHTML={{ __html: node.excerpt }} />

                             <Link className="button"   to={`/actualites/${node.slug}`}>En savoir plus</Link>
                       </div>
                   </div>
               </div>

                   </>}
                  </>


                ))}

            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Blog;
