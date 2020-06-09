import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MenuList = () => (
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

          <ul className="navbar-nav mr-auto">
          <li key="accueil" className="nav-item">
          <Link to="/" className="nav-link" >
            Accueil
          </Link>
        </li>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} className="nav-item"  >
                <Link
                  to={`/${item.object_slug}`}
                  className="nav-link" >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>


    )}
  />
)

export default MenuList
