import { useStaticQuery, graphql, Link } from "gatsby";
import React from 'react';
import Img from "gatsby-image";

const Visite = () => {

  const data = useStaticQuery(graphql`
    query GetHomevisite {
      wordpressAcfPages(wordpress_id: { eq: 2 }) {
        id
        acf {
          titre_v
          line_3d
          line_360
          line_cyclotamaris

          image_3d {
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
          image_361 {
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
          image_cyclotamaris {
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
  `);

    return (

      <div className="visite-warrp">

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                  <h2>{data.wordpressAcfPages.acf.titre_v}</h2>
              </div>
            </div>
            <div className="col-md-4">
            <a href={data.wordpressAcfPages.acf.line_3d} target="_blank" rel="noreferrer" >
              <span>{data.wordpressAcfPages.acf.titre_v}</span>
            <Img
              src={
                data.wordpressAcfPages.acf.image_3d.localFile
                  .childImageSharp.sizes.src
              }
              sizes={
                data.wordpressAcfPages.acf.image_3d.localFile
                  .childImageSharp.sizes
              }
            />
            </a>
            </div>
            <div className="col-md-4">
            <a href={data.wordpressAcfPages.acf.line_360} target="_blank" rel="noreferrer" >
            <span>{data.wordpressAcfPages.acf.titre_v}</span>
            <Img
              src={
                data.wordpressAcfPages.acf.image_361.localFile
                  .childImageSharp.sizes.src
              }
              sizes={
                data.wordpressAcfPages.acf.image_361.localFile
                  .childImageSharp.sizes
              }
            />
            </a>
            </div>
            <div className="col-md-4">
            <a href={data.wordpressAcfPages.acf.line_cyclotamaris} target="_blank" rel="noreferrer" >
              <span>{data.wordpressAcfPages.acf.titre_v}</span>
            <Img
              src={
                data.wordpressAcfPages.acf.image_cyclotamaris.localFile
                  .childImageSharp.sizes.src
              }
              sizes={
                data.wordpressAcfPages.acf.image_cyclotamaris.localFile
                  .childImageSharp.sizes
              }
            />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Visite;
