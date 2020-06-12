import { StaticQuery, graphql, Link } from "gatsby";
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
//import Img from "gatsby-image";
const Logo = () => (
    <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          options {
            nav_logo {
              alt_text
              source_url
              localFile {
                id
                size
                childImageSharp {
                  id
                  sizes(maxWidth: 2000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (

        <Link className="navbar-brand" to="/">
          <img className="logo"
            src={
              data.wordpressAcfOptions.options.nav_logo.localFile
                .childImageSharp.sizes.src
            }
            alt={
              data.wordpressAcfOptions.options.nav_logo.alt_text
            }
          />
          </Link>
    )}
  />
);

export default Logo;
