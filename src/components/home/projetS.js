import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const ProjetS = () => (
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
      <div className="col-lg-5 col-md-5 col-12">
          <div className="title">
              <h2>Vivre dans le perles de l'agdal</h2>
          </div>
          <div className="text">
              <p>Bénéficiant d'une situation privilégiée à Rabat, la résidence Les Perles de l'Agdal est
                  compsée
                  d'appartements Haus Standing et qui intègre des espaces verts au coeur de son aménagement
              </p>
              <Link className="button" to="/">En savoir plus</Link>
          </div>
      </div>

      <div className="col-lg-7 col-md-7 col-12">
          <div className="image">
              <img src="https://www.theastro.co/les-perles/assets/images/2.jpg" alt="/" / >
              <img className="shape-a" src="https://www.theastro.co/les-perles/assets/images/logos/a.svg" alt="/"/>
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

export default ProjetS;
