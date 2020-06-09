import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const ProjetF = () => (
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
        <div className="split">
                <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                      <div className="row">
                          <div className="col-lg-7 col-md-7  order-0">
                              <div className="image">
                                  <img src="https://www.theastro.co/les-perles/assets/images/1.jpg" alt="/"/>
                                  <img className="shape-r" src="https://www.theastro.co/les-perles/assets/images/logos/r.svg" alt="/"/>
                              </div>
                          </div>
                          <div className="col-lg-5 col-md-5 order-1">
                              <div className="text">
                                  <div className="title">
                                      <h2>Projet et concept</h2>
                                  </div>
                                  <div className="text">
                                      <p>Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des
                                          appartements  R+6
                                          R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de
                                          vie à
                                          la
                                          fois reposants et pratiques</p>
                                        <Link className="button" to="">Maquette Orbitale</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
                </div>
            </div>

      )
    )}
  />
);

export default ProjetF;
