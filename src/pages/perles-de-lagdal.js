import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Banner from "../components/lesperles/banner";
import Paragraph from "../components/lesperles/content";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Perles de lagdal"     description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
        />
      <Banner />
      <div className="vivre">
        <div className="container">
          <div className="row">
            <Paragraph />

            <div className="col-lg-6 col-md-12">
              <div className="grid1">
                <div className="split">
                  <div className="gryff img-1">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressAcfPages.acf.la_place_centrale_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressAcfPages.acf.la_place_centrale_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="text">
                      <p>
                        <span>
                          {data.wordpressAcfPages.acf.la_place_centrale_title}
                        </span>
                      </p>
                      <p>{data.wordpressAcfPages.acf.la_place_centrale_desc}</p>
                    </div>

                    <div className="overlay"></div>
                  </div>
                  <div className="gryff img-2">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressAcfPages.acf.la_place_commerciale_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressAcfPages.acf.la_place_commerciale_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>
                        <span>
                          {
                            data.wordpressAcfPages.acf
                              .la_place_commerciale_title
                          }
                        </span>
                      </p>
                      <p>
                        {data.wordpressAcfPages.acf.la_place_commerciale_desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tall">
                  <div className="gryff img-3">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressAcfPages.acf.le_park_urbain_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressAcfPages.acf.le_park_urbain_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>
                        <span>
                          {data.wordpressAcfPages.acf.le_park_urbain_title}
                        </span>
                      </p>
                      <p>{data.wordpressAcfPages.acf.le_park_urbain_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-md-12">
              <div className="grid2">
                <div className="split">
                  <div className="gryff img-4">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressAcfPages.acf.acima_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressAcfPages.acf.acima_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>
                        <span>{data.wordpressAcfPages.acf.acima_title}</span>
                      </p>
                      <p>{data.wordpressAcfPages.acf.acima_desc}</p>
                    </div>
                  </div>
                  <div className="gryff img-5">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressAcfPages.acf.equipement_hotelier_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressAcfPages.acf.equipement_hotelier_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>
                        <span>
                          {data.wordpressAcfPages.acf.equipement_hotelier_title}
                        </span>
                      </p>
                      <p>
                        {data.wordpressAcfPages.acf.equipement_hotelier_desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wide">
                  <div className="gryff img-6">
                    <Img
                      className="banner-img"
                      src={
                        data.wordpressAcfPages.acf.promenade_pietonne_img
                          .localFile.childImageSharp.sizes.src
                      }
                      sizes={
                        data.wordpressAcfPages.acf.promenade_pietonne_img
                          .localFile.childImageSharp.sizes
                      }
                    />
                    <div className="overlay"></div>
                    <div className="text">
                      <p>
                        <span>
                          {data.wordpressAcfPages.acf.promenade_pietonne_title}
                        </span>
                      </p>
                      <p>
                        {data.wordpressAcfPages.acf.promenade_pietonne_desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="gryff img-7">
                <Img
                  className="banner-img"
                  src={
                    data.wordpressAcfPages.acf.le_coeur_dilot_plante_img.localFile
                      .childImageSharp.sizes.src
                  }
                  sizes={
                    data.wordpressAcfPages.acf.le_coeur_dilot_plante_img.localFile
                      .childImageSharp.sizes
                  }
                />
                <div className="overlay"></div>
                <div className="text">
                  <div className="text">
                    <p>
                      <span>
                        {data.wordpressAcfPages.acf.le_coeur_dilot_plante_title}
                      </span>
                    </p>
                    <p>{data.wordpressAcfPages.acf.le_coeur_dilot_desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="gryff img-8">
                <Img
                  className="banner-img"
                  src={
                    data.wordpressAcfPages.acf.les_lots_de_terrain_img.localFile
                      .childImageSharp.sizes.src
                  }
                  sizes={
                    data.wordpressAcfPages.acf.les_lots_de_terrain_img.localFile
                      .childImageSharp.sizes
                  }
                />
                <div className="overlay"></div>
                <div className="text">
                  <div className="text">
                    <p>
                      <span>
                        {data.wordpressAcfPages.acf.les_lots_de_terrain_title}
                      </span>
                    </p>
                    <p>{data.wordpressAcfPages.acf.les_lots_de_terrain_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

    wordpressAcfPages(wordpress_id: { eq: 12 }) {
      id
      acf {
        la_place_centrale_title
        la_place_centrale_desc
        la_place_centrale_img {
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

        la_place_commerciale_title
        la_place_commerciale_desc
        la_place_commerciale_img {
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

        le_park_urbain_title
        le_park_urbain_desc
        le_park_urbain_img {
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

        acima_title
        acima_desc
        acima_img {
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

        equipement_hotelier_title
        equipement_hotelier_desc
        equipement_hotelier_img {
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

        promenade_pietonne_title
        promenade_pietonne_desc
        promenade_pietonne_img {
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

        le_coeur_dilot_plante_title
        le_coeur_dilot_desc
        le_coeur_dilot_plante_img {
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

        les_lots_de_terrain_title
        les_lots_de_terrain_desc
        les_lots_de_terrain_img {
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
