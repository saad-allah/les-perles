import { StaticQuery, graphql, Link } from "gatsby";
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
//import Img from "gatsby-image";
const Logo = () => (
    <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(name: { eq: "Menu Na" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      <Link to="/" className="logo navbar-brand">
        <img
          src="https://www.theastro.co/les-perles/assets/images/logos/lesperles-logo.svg"
          alt="test"
        />
      </Link>
    )}
  />
);

export default Logo;
