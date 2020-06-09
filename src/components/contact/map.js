import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Slider from "react-slick";


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
    render={data => (
      console.log(data),
      (
    <>
    map
</>

      )
    )}
  />
);

export default Map;
