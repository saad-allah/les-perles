import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Map = () => (
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
    render={(data) => (
      <>
        <div className="map">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div id="mapContact"></div>
                <div id="menu"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

export default Map;
