
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MenuFooter = () => (
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

        <div className="footer">
      <footer>
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-6"></div>
               <div className="col-lg-2 col-md-4 col-12 indexed">
                  <div className="footer-title">
                     <p>Perles de L'agdal</p>
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
                     <p>Agréments</p>
                  </div>
                  <div className="footer-text">
                     <ul>
                        <li><Link to="pdc.html">Pol de confidetialité RGPD</Link></li>
                        <li><Link to="sitemap.html">Sitemap</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-2 col-md-4 col-12 indexed">
                  <div className="footer-title">
                     <p>Contactez nous</p>
                  </div>
                  <div className="footer-text">
                     <ul>
                        <li><Link to="">Lorem 01 - ipsum dolor sit</Link></li>
                     </ul>
                     <div className="icons">
                        <Link to=""><img src="https://www.theastro.co/les-perles/assets/images/logos/twitter.svg" alt="/"/></Link>
                        <Link to=""><img src="https://www.theastro.co/les-perles/assets/images/logos/facebook.svg" alt="/"/></Link>
                        <Link to=""><img src="https://www.theastro.co/les-perles/assets/images/logos/google.svg" alt="/"/></Link>
                        <Link to=""><img src="https://www.theastro.co/les-perles/assets/images/logos/instagram.svg" alt="/"/></Link>
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
