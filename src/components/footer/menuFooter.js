
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import MenuList from "../menu/menuFooterSec";
const MenuFooter = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          options {
            facebook_icon {
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
            facebook_link
            google_plus_icon {
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
            google_plus_link
            instagram_link
            instagram_icon {
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
            twitter_link
            twitter_icon {
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
            footer_text
            titre_menu_1
            titre_menu_2
            titre_menu_3
            adresse_footer
            footer_logo {
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
        wordpressWpApiMenusMenusItems(name: { eq: "Menu Nav" }) {
          items {
            title
            object_slug
          }
        }

      }
    `}
    render={data => (

        <div className="footer">
      <footer>
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-6"></div>
               <div className="col-lg-2 col-md-4 col-12 indexed">
                  <div className="footer-title">
                    <p>{data.wordpressAcfOptions.options.titre_menu_1}</p>
                  </div>
                  <div className="footer-text">
                     <ul>

                        <li key="accueil" >
                        <Link to="/"  >
                          Accueil
                        </Link>
                      </li>
                          {data.wordpressWpApiMenusMenusItems.items.map(item => (
                            <li key={item.object_slug}  >
                              <Link
                                to={`/${item.object_slug}`}
                                 >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-2 col-md-4 col-12 indexed">
                  <div className="footer-title">
                       <p>{data.wordpressAcfOptions.options.titre_menu_2}</p>
                  </div>
                  <div className="footer-text">
<MenuList />
                  </div>
               </div>
               <div className="col-lg-2 col-md-4 col-12 indexed">
                  <div className="footer-title">
                      <p>{data.wordpressAcfOptions.options.titre_menu_3}</p>
                  </div>
                  <div className="footer-text">
                     <ul>
                       <a href="#">
                         {data.wordpressAcfOptions.options.adresse_footer}
                       </a>
                     </ul>
                     <div className="icons">
                       {data.wordpressAcfOptions.options.facebook_link === "" ? (
                         <></>
                       ) : (
                         <a href={data.wordpressAcfOptions.options.facebook_link} target="_blank">
                           <img
                             src={
                               data.wordpressAcfOptions.options.facebook_icon.localFile
                                 .childImageSharp.sizes.src
                             }
                             alt={
                               data.wordpressAcfOptions.options.facebook_icon.alt_text
                             }
                           />
                         </a>
                       )}
                       {data.wordpressAcfOptions.options.twitter_link === "" ? (
                         <></>
                       ) : (
                         <a href={data.wordpressAcfOptions.options.twitter_link} target="_blank">
                           <img
                             src={
                               data.wordpressAcfOptions.options.twitter_icon.localFile
                                 .childImageSharp.sizes.src
                             }
                             alt={
                               data.wordpressAcfOptions.options.twitter_icon.alt_text
                             }
                           />
                         </a>
                       )}

                       {data.wordpressAcfOptions.options.instagram_link === "" ? (
                         <></>
                       ) : (
                         <a href={data.wordpressAcfOptions.options.instagram_link} target="_blank">
                           <img
                             src={
                               data.wordpressAcfOptions.options.instagram_icon.localFile
                                 .childImageSharp.sizes.src
                             }
                             alt={
                               data.wordpressAcfOptions.options.instagram_icon.alt_text
                             }
                           />
                         </a>
                       )}

                       {data.wordpressAcfOptions.options.google_plus_link === "" ? (
                         <></>
                       ) : (
                         <a href={data.wordpressAcfOptions.options.google_plus_link} target="_blank">
                           <img
                             src={
                               data.wordpressAcfOptions.options.google_plus_icon.localFile
                                 .childImageSharp.sizes.src
                             }
                             alt={
                               data.wordpressAcfOptions.options.google_plus_icon.alt_text
                             }
                           />
                         </a>
                       )}

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   </div>
    )}
  />
)

export default MenuFooter
