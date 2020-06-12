import React from "react";
import { graphql,Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/projets/banner";
import Content from "../components/projets/content";
import SEO from "../components/seo";
import Scripts from "../components/scripts/script";
import Scripts3D from "../components/scripts/scriptMap3D";
export default ({ data }) => {
  return (
    <Layout>
<Scripts />
<Scripts3D />
        <SEO title="Projetet concept"     description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
          />
    <Banner />
      <Content />
        <div className="map-wrapper">
          <div id="map">
            <div className="maptop">
              <span className="controle-btn zoomout"><img src="https://theastro.co/les-perles/assets/images/logos/full-screen.svg" alt="/" /></span>
              <span className="controle-btn zoomin"><img src="https://theastro.co/les-perles/assets/images/logos/day-dark-cycle.svg" alt="/" /></span>
            </div>
            <div className="controle-main">
              <span className="controle-btn">
                <div className="map-container" title="Rotate the map in 3D, you can redirect the camera by pressing and holding the right click (or Ctrl and left click) and moving the mouse.">
                  <button className="map-center" type="button">
                    <div className="map-container-needle" id="needle" />
                  </button>
                  <button className="rotate-left" type="button" /><button className="rotate-right" type="button" />
                </div>
              </span>
              <span className="controle-btn up"><img src="https://theastro.co/les-perles/assets/images/logos/upmap.svg" alt="/" /></span>
              <span className="controle-btn down"><img src="https://theastro.co/les-perles/assets/images/logos/dwnmap.svg" alt="/" /></span>
              <span className="controle-btn zoomout"><img src="https://theastro.co/les-perles/assets/images/logos/zoom-outmap.svg" alt="/" /></span>
              <span className="controle-btn zoomin"><img src="https://theastro.co/les-perles/assets/images/logos/zoom-inmap.svg" alt="/" /></span>
            </div>
          </div>
          <div className="warpp range-slider">
          <label>  <input id="day" type="range" className="range-slider__range" min={1} max={365} /> <span id="day-text" /></label>
          <label>  <input id="time" className="range-slider__range" type="range" min={0} max={86400} /> <span id="time-text" /></label>
          </div>
        </div>
        <div className="projet-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wrapped-here">
                <div className="slider-concepts">


                  {data.allWordpressWpAppartement.edges.map(({ node }, i) => (
      <div className="slide">
          <div className="wrapour">
          <div className="img">
              <img src="https://theastro.co/les-perles/assets/images/gal-1.jpg" alt="/"/>

          </div>
          <div className="text">
              <p><span>Type : </span> F2A </p>
              <p><span>Superficie totale : </span>{node.acf.superficie_totale}</p>
              <p><span>Section : </span> {node.acf.section}</p>

          </div>
      </div>
        </div>
           ))}
                </div>
              </div>
            </div>
          </div>
          <div className="arrows">
            <ul>
              <li className="prevLast"><img src="https://theastro.co/les-perles/assets/images/logos/arrow-leftb.svg" alt="/" /></li>
              <li className="nextLast"><img src="https://theastro.co/les-perles/assets/images/logos/arrow-rightb.svg" alt="" /></li>
            </ul>
          </div>
        </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
    allWordpressWpAppartement(limit: 5) {
      edges {
        node {
          id
          acf {
            featured_image {
              source_url
              alt_text
              localFile {
              childImageSharp {
                   resize(width: 180, height: 180) {
                  height
                  width
                  src
                }
              }
            }
            }
            section
            superficie_totale
            contactez_nous_button
          }
          slug
          title
        }
      }
    }

  }

`;
