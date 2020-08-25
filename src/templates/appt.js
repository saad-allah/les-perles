import React from "react";
import { SEO } from "../components/seo";
import Scripts from "../components/scripts/script";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "./slick.css";
import Download from "../images/download.svg";
import Left from "../images/left-arrow.svg";
import Right from "../images/right-arrow.svg";

const AppPost = ({ data }) => {
  const { wordpressWpAppartement } = data;
  return (
    <Layout>

    <SEO
      title={wordpressWpAppartement.title}
      titlefb={wordpressWpAppartement.yoast.opengraph_title}
      titletwitter={wordpressWpAppartement.yoast.twitter_title}
      description={wordpressWpAppartement.opengraph_description}
      descriptionFb={wordpressWpAppartement.yoast.opengraph_description}
      descriptionTwitter={wordpressWpAppartement.yoast.twitter_description}
      imageFb={wordpressWpAppartement.yoast.opengraph_image}
      imageTwitter={wordpressWpAppartement.yoast.twitter_image}
    />
          <Scripts />
      <div className="banner ">
        <Img
          className="banner-img"
          src={
            data.wordpressAcfPages.acf.banner_img.localFile.childImageSharp
              .sizes.src
          }
          sizes={
            data.wordpressAcfPages.acf.banner_img.localFile.childImageSharp
              .sizes
          }
        />
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title nOm">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfPages.acf.banner_title,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="appart-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title sin">
                <h2>{wordpressWpAppartement.title}</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="navfornested">
                <div className="slide">
                  <div className="wrappero app">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressWpAppartement.acf.appart_featured_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressWpAppartement.acf.appart_featured_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>{wordpressWpAppartement.acf.appart_featured_text}</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="wrappero etage">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressWpAppartement.acf.featured_img_etage
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressWpAppartement.acf.featured_img_etage
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>{wordpressWpAppartement.acf.featured_text_etage}</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="wrappero visite">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressWpAppartement.acf.visite_featured_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressWpAppartement.acf.visite_featured_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>{wordpressWpAppartement.acf.visite_featured_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="slidernested">
                <div className="slide wrap">
                  <div className="childsliderfirst childslider _1s">
                    {wordpressWpAppartement.acf.appartement_image_galerie.map(
                      (item,i) => (
                        <div
                          className="slide"
                          key={i}
                        >
                          <img src={item.appartement.source_url} alt="" />
                        </div>
                      )
                    )}
                  </div>
                  <div className="arrows">
                    <ul>
                      <li className="prev6">
                        <img src={Left} alt="" />
                      </li>
                      <li className="next6">
                        <img src={Right} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="slide wrap">
                  <div className="childsliderthird _2s">
                    {wordpressWpAppartement.acf.etage_image_galerie.map(
                      (item) => (
                        <div className="slide" key={item.etage.localFile.id}>
                          <img src={item.etage.source_url} alt="" />
                        </div>
                      )
                    )}
                  </div>
                  <div className="arrows">
                    <ul>
                      <li className="prev8">
                        <img src={Left} alt="" />
                      </li>
                      <li className="next8">
                        <img src={Right} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="slide wrap">
                  <div className="childslidersec childslider _vis">
                  <div className="slide"
           dangerouslySetInnerHTML={{
             __html: wordpressWpAppartement.acf.code_iframe
           }}
         />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-desc">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text">
                <div className="bold">
                  <p>Type :</p>
                </div>
                <div className="thin margined">
                  <p>{wordpressWpAppartement.acf.type_apt}</p>
                </div>
              </div>
              <div className="text">
                <div className="bold">
                  <p>Superficie habitable  :</p>
                </div>
                <div className="thin margined">
                  <p>{wordpressWpAppartement.acf.superficie_totale}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
            <div className="text">
              <div className="bold">
                <p>Balcon et buaderie :</p>
              </div>
              <div className="thin">
                <p>
                  {wordpressWpAppartement.acf.superficie_balcon___buanderie}
                </p>
              </div>
            </div>
            <div className="text">
              <div className="bold">
                <p>Nombre de chambres :</p>
              </div>
              <div className="thin">
                <p>
                  {wordpressWpAppartement.acf.chambres}
                </p>
              </div>
            </div>

            </div>



          </div>
        </div>
      </div>

      <div className="button-wrapp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a className="buttons"  href={wordpressWpAppartement.acf.pdf.source_url} download >
                <img src={Download} alt="" />
                {wordpressWpAppartement.acf.telecharger}
              </a>
            </div>
            <div className="col-md-12">
              <a className="buttons" href={`/${wordpressWpAppartement.acf.contactez_nous_link}`} target="_blank">
                {wordpressWpAppartement.acf.contactez_nous_button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AppPost;

export const pageQuery = graphql`
  query AppByID($id: String!) {
    wordpressWpAppartement(id: { eq: $id }) {
      id
      title
      slug
      yoast {
        twitter_description
        twitter_image
        twitter_title
        opengraph_title
        opengraph_image
        opengraph_description
        metakeywords
        metadesc
      }

      acf {
        appartement_image_galerie {
          appartement {
            source_url
            alt_text
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
        pdf {
          source_url
        }
        etage_image_galerie {
          etage {
            source_url
            alt_text
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

        code_iframe
        superficie_totale

        superficie_balcon___buanderie
        chambres

        type_apt
        telecharger
        contactez_nous_button
        contactez_nous_link
        appart_featured_img {
          source_url
          alt_text
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
        appart_featured_text
        featured_text_etage
        featured_img_etage {
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
        visite_featured_text
        visite_featured_img {
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
    wordpressAcfPages(wordpress_id: { eq: 20 }) {
      id
      acf {
        banner_title
        banner_img {
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
`;
