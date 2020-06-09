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


function validateForm() {
 var nom = document.forms["custom-post-type"]["nom"].value;
  var prenom = document.forms["custom-post-type"]["prenom"].value;
  var phone = document.forms["custom-post-type"]["phone"].value;
  var cin = document.forms["custom-post-type"]["cin"].value;
    var specialite = document.forms["custom-post-type"]["specialite"].value;
    var myfile = document.forms["custom-post-type"]["myfile"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

	 if (nom== "") {
 $( "#nom" ).addClass( "has-error" );
    return false;
  }
		 if (cin== "") {
 $( "#cin" ).addClass( "has-error" );
    return false;
  }
		 if (prenom== "") {
 $( "#prenom" ).addClass( "has-error" );
    return false;
  }
		 if (phone== "") {
 $( "#phone-input" ).addClass( "has-error" );
    return false;
  }
  if (specialite== "") {
$( "#fonction" ).addClass( "has-error" );
 return false;
}
if (myfile== "") {
$( "#myfile" ).addClass( "has-error" );
return false;
}
}
