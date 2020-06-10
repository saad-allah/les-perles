import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
  <StaticQuery
    query={graphql`
      query GetContentHome {
  wordpressAcfPages(wordpress_id: {eq:  2}) {
    id
    acf {
      home_page_intro
    }
  }
}
    `}
    render={data => (
      console.log(data),
      (
        <div className="section1">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="paragraph">
                        <p>{data.wordpressAcfPages.acf.home_page_intro}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

      )
    )}
  />
);

export default Paragraph;
