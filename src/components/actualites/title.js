import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";


const TitleBlog = () => (
    <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Menu Nav" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      console.log(data),
      (
        <div className="col-md-12">
                            <div className="title">
                                <h2>Nos actulaités à la une</h2>
                            </div>
                        </div>
      )
    )}
  />
);

export default TitleBlog;
