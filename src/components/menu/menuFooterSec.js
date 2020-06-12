import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MenuList = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "footer second menu" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (

      <ul>
        {data.wordpressWpApiMenusMenusItems.items.map((item) => (
          <li key={item.object_slug}>
            <Link to={`/${item.object_slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>


    )}
  />
)

export default MenuList
