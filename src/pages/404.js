import React from "react"
import {Link } from "gatsby";
import Layout from "../components/layout"
import { SEO } from "../components/seo";
import "../style/404.css";
import Scripts from "../components/scripts/script";
import _404 from "../images/404.png";
const NotFoundPage = () => (
  <Layout>
    <SEO
      title='404'
      titlefb='404'
      titletwitter='404'
      description="404 .. Nous ne  trouvons pas ce ce que vous cherchez"
      descriptionFb="404 .. Nous ne  trouvons pas ce ce que vous cherchez"
      descriptionTwitter="404 .. Nous ne  trouvons pas ce ce que vous cherchez"
      imageFb={_404}
      imageTwitter={_404}
    />
    <div className="flex-center position-r full-height">
            <img src={_404} alt="/" />
            <h1> 404 .. Nous ne <br /> trouvons pas ce ce <br /> que vous cherchez</h1>
            <Link className="button" to="/"><span> Revenir à l'accueil </span></Link>

          </div>
                <Scripts />
  </Layout>
)

export default NotFoundPage
