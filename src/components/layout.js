import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div
      key={`loader`}
      id="___loader"
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 5555,
      }}
   >
  <img src="/lesperles-logo.png" className="logo" alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'/>
   </div>
        <Header siteTitle={data.site.siteMetadata.title} />

          <main>{children}</main>
          <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
