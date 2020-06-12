import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/galeries/banner";
import Paragraph from "../components/galeries/content";
import Scripts from "../components/scripts/script";

import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
<Scripts/>

        <SEO
        title="Galerie"
          description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
        />
      <Banner
      />
      <div class="page-galerie">
          <div class="container">
              <div class="row">


<Paragraph />

                  <div class="col-md-12 slider-wrapper">
                      <div class="g-slider">
                          <div class="slide">
                              <div class="image">
                                  <img src="https://www.theastro.co/les-perles/assets/images/gal-1.jpg" alt="/"/>
                              </div>
                          </div>
                          <div class="slide">
                              <div class="image">
                                  <img src="https://www.theastro.co/les-perles/assets/images/gal-1.jpg" alt="/"/>
                              </div>
                          </div>
                          <div class="slide">
                              <div class="image">
                                  <img src="https://www.theastro.co/les-perles/assets/images/gal-1.jpg" alt="/"/>
                              </div>
                          </div>
                          <div class="slide">
                              <div class="image">
                                  <img src="https://www.theastro.co/les-perles/assets/images/gal-1.jpg" alt="/"/>
                              </div>
                          </div>
                      </div>
                      <div class="arrows">
                          <ul>
                              <li class="prev3"><img src="https://www.theastro.co/les-perles/assets/images/logos/left.svg" alt="/"/></li>
                              <li class="next3"><img src="https://www.theastro.co/les-perles/assets/images/logos/right.svg" alt="/"/></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <a href="https://www.theastro.co/les-perles/assets/images/gal-2.jpg" data-fancybox="images-1"><div class="sly-wrapper img-1">
                          <div class="overlay"></div>
                          <div class="text">
                              <p>Section A</p>
                          </div>
                      </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <a href="https://www.theastro.co/les-perles/assets/images/gal-3.jpg" data-fancybox="images-2"><div class="sly-wrapper img-2">
                          <div class="overlay"></div>
                          <div class="text">
                              <p>Section A</p>
                          </div>
                      </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <a href="https://www.theastro.co/les-perles/assets/images/gal-4.jpg" data-fancybox="images-3"><div class="sly-wrapper img-3">
                          <div class="overlay"></div>
                          <div class="text">
                              <p>Section A</p>
                          </div>
                      </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <a href="https://www.theastro.co/les-perles/assets/images/gal-5.jpg" data-fancybox="images-4"><div class="sly-wrapper img-4">
                          <div class="overlay"></div>
                          <div class="text">
                              <p>Section A</p>
                          </div>
                      </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <a href="https://www.theastro.co/les-perles/assets/images/gal-6.jpg" data-fancybox="images-5"><div class="sly-wrapper img-5">
                          <div class="overlay"></div>
                          <div class="text">
                              <p>Section A</p>
                          </div>
                      </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <a href="https://www.theastro.co/les-perles/assets/images/gal-7.jpg" data-fancybox="images-6"><div class="sly-wrapper img-6">
                          <div class="overlay"></div>
                          <div class="text">
                              <p>Section A</p>
                          </div>
                      </div></a>
                  </div>

                                </div>
                            </div>
                        </div>

      <div className="dinon"><a href="https://www.theastro.co/les-perles/assets/images/gal-2.jpg" data-fancybox="images-1">
      </a>

    </div>
    <div className="dinon">  <a href="https://www.theastro.co/les-perles/assets/images/gal-3.jpg" data-fancybox="images-2">
    </a>

  </div>
  <div className="dinon"><a href="https://www.theastro.co/les-perles/assets/images/gal-4.jpg" data-fancybox="images-3">
  </a>

  </div>
  <div className="dinon"><a href="https://www.theastro.co/les-perles/assets/images/gal-5.jpg" data-fancybox="images-4">
  </a>

  </div>
  <div className="dinon"><a href="https://www.theastro.co/les-perles/assets/images/gal-6.jpg" data-fancybox="images-5">
  </a>

  </div>
  <div className="dinon"><a href="https://www.theastro.co/les-perles/assets/images/gal-7.jpg" data-fancybox="images-6">
  </a>

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
  }
`;
