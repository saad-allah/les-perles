import React from "react";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
const AppGalerie = ({ data }) => {
  const { wordpressWpAppartement } = data;
  return (
    <Layout>
      <SEO title={wordpressWpAppartement.title} description={wordpressWpAppartement.excerpt} />

        <div className="banner ">
        <Img
          className="banner-img"
          src={
            data.wordpressAcfPages.acf.banner_img.localFile.childImageSharp.sizes.src
          }
          sizes={
            data.wordpressAcfPages.acf.banner_img.localFile.childImageSharp.sizes
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
                                  <div className="overlay"></div>
                                  <div className="text">
                                      <p>Appartements</p>
                                  </div>
                              </div>
                          </div>
                          <div className="slide">
                              <div className="wrappero etage">
                                  <div className="overlay"></div>
                                  <div className="text">
                                      <p>Etage</p>
                                  </div>
                              </div>
                          </div>
                          <div className="slide">
                              <div className="wrappero visite">
                                  <div className="overlay"></div>
                                  <div className="text">
                                      <p>Visite virtuelle</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-9">
                      <div className="slidernested">
                          <div className="slide wrap">
                              <div className="childsliderfirst childslider">
                                  <div className="slide">
                                      <img src="https://theastro.co/les-perles/assets/images/4.jpg" alt=""/>
                                  </div>
                                  <div className="slide">
                                      <img src="https://theastro.co/les-perles/assets/images/4.jpg" alt=""/>
                                  </div>
                                  <div className="slide">
                                      <img src="https://theastro.co/les-perles/assets/images/4.jpg" alt=""/>
                                  </div>
                              </div>
                              <div className="arrows">
                                  <ul>
                                      <li className="prev6"><img src="https://theastro.co/les-perles/assets/images/logos/left.svg" alt=""/></li>
                                      <li className="next6"><img src="https://theastro.co/les-perles/assets/images/logos/right.svg" alt=""/></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="slide wrap">
                              <div className="childslidersec childslider">
                                  <div className="slide">
                                      <img src="https://theastro.co/les-perles/assets/images/5.jpg" alt=""/>
                                  </div>
                                  <div className="slide">
                                      <img src="https://theastro.co/les-perles/assets/images/5.jpg" alt=""/>
                                  </div>
                                  <div className="slide">
                                      <img src="https://theastro.co/les-perles/assets/images/5.jpg" alt=""/>
                                  </div>
                              </div>
                              <div className="arrows">
                                  <ul>
                                      <li className="prev7"><img src="https://theastro.co/les-perles/assets/images/logos/left.svg" alt=""/></li>
                                      <li className="next7"><img src="https://theastro.co/les-perles/assets/images/logos/right.svg" alt=""/></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="slide wrap">
                              <div className="childsliderthird">
                                  <div className="slide">
                                      <div className="wrpr">
                                          <div className="child">
                                              <p>H</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="slide">
                                      <div className="wrpr">
                                          <div className="child">
                                              <p>H</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="slide">
                                     <div className="wrpr">
                                      <div className="child"></div>
                                      <p>H</p>
                                     </div>
                                  </div>
                              </div>
                              <div className="arrows">
                                  <ul>
                                      <li className="prev8"><img src="https://theastro.co/les-perles/assets/images/logos/left.svg" alt=""/></li>
                                      <li className="next8"><img src="https://theastro.co/les-perles/assets/images/logos/right.svg" alt=""/></li>
                                  </ul>
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
                      <p>{wordpressWpAppartement.acf.superficie_totale}</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="bold">
                            <p>Superficie totale :</p>
                        </div>
                        <div className="thin margined">
                    <p>{wordpressWpAppartement.acf.superficie_totale}</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="bold">
                            <p>Superficie habitale :</p>
                        </div>
                        <div className="thin margined">
                      <p>{wordpressWpAppartement.acf.superficie_habitale}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="text">
                        <div className="bold">
                            <p>Superficie balcon &amp; buanderie :</p>
                        </div>
                        <div className="thin">
                        <p>{wordpressWpAppartement.acf.superficie_balcon___buanderie}</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="bold">
                            <p>Localisation :</p>
                        </div>
                        <div className="thin">
                          <p>{wordpressWpAppartement.acf.localisation}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="wrapper start">
                        <img src="https://www.theastro.co/les-perles/assets/images/logos/bed.svg" alt=""/>
                      <p>{wordpressWpAppartement.acf.chambres}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="wrapper center">
                        <img src="https://www.theastro.co/les-perles/assets/images/logos/house.svg" alt=""/>
                        <p>{wordpressWpAppartement.acf.immeuble}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="wrapper end">
                        <img src="https://www.theastro.co/les-perles/assets/images/logos/ahgg.svg" alt=""/>
                          <p>{wordpressWpAppartement.acf.section}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="button-wrapp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <a className="buttons" href="" download>
                            <img src="https://www.theastro.co/les-perles/assets/images/logos/download.svg" alt=""/>
                          {wordpressWpAppartement.acf.telecharger}
                        </a>
                    </div>
                    <div className="col-md-12">
                        <Link className="buttons" to="/contact">
                          {wordpressWpAppartement.acf.contactez_nous_button}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  );
};
export default AppGalerie;

export const pageQuery = graphql`
  query GalerieByID($id: String!) {
    wordpressWpAppartement(id: { eq: $id }) {
      id
      title
      slug
      acf {
        superficie_totale
        superficie_habitale
        superficie_balcon___buanderie
        localisation
        chambres
        immeuble
        section
        telecharger
        contactez_nous_button
        contactez_nous_link
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
    wordpressAcfPages(wordpress_id: {eq:  20}) {
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
