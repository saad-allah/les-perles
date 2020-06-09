import React from "react";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
const BlogPost = ({ data }) => {
  const { wordpressPost } = data;
  return (
    <Layout>
        <SEO title={wordpressPost.title} description={wordpressPost.excerpt} />


      <div className="banner">
              <div className="overlay"></div>
                {wordpressPost.featured_media === null ? (
                  <h1>No featured media</h1>
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
                        <div className="media">
                            <a href=""><img src="https://theastro.co/les-perles/assets/images/logos/like.svg" alt=""/></a>
                            <a href=""><img src="https://theastro.co/les-perles/assets/images/logos/share.svg" alt=""/></a>
                            <a href=""><img src="https://theastro.co/les-perles/assets/images/logos/twitter.svg" alt="/"/></a>
                            <a href=""><img src="https://theastro.co/les-perles/assets/images/logos/facebook.svg" alt="/"/></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="user">
                        <div className="img"></div>
                        <div className="text">
                            <p>{wordpressPost.author.name}</p>
                            <p><span>Publié le {wordpressPost.date}</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                  <div className="block" dangerouslySetInnerHTML={{ __html: wordpressPost.content }} />
                </div>


                <div className="col-md-12">
                    <div className="user-cred">
                        <p> <span>Auteur :</span>{wordpressPost.author.name}</p>
                        <p> <span>Categorie :</span> {wordpressPost.categories &&
                          wordpressPost.categories.map(category => `${category.name}, `)}</p>
                    </div>
                </div>
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
      content
      categories {
          name
        }
      author {
  name
}

      date(formatString: "DD/MM/YYYY")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
