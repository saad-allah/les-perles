import { StaticQuery, graphql } from "gatsby";
import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "#FE938C"
  },
  caption: {
    captionFontFamily: "Montserrat, sans-serif",
    captionFontSize: "18px",
    captionContainerPadding: "20px 10px",
    captionColor: "#FE938C",
    captionFontWeight: 700,
    captionTextTransform: "uppercase"
  },
  settings: {
    overlayColor: "rgba(93, 87, 107, 0.9)",
    lightboxTransitionSpeed: 0.6,
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    autoplaySpeed: 3000,
    hideControlsAfter: false
  },
  progressBar: {
    height: "3px",
    fillColor: "#FE938C",
    backgroundColor: "rgba(43, 45, 66, 0.9)"
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsPosition: "right",
    thumbnailsOpacity: 0.4,
    thumbnailsAlignment: "space-between",
    thumbnailsSize: ["130px", "100px"]
  }
};

const GalerieG = () => (

  <StaticQuery
    query={graphql`
      query GetContentGaleriess
      {
        wordpressPage(wordpress_id: {eq:  14}) {
           content
        }
      }

    `}
    render={data => (
      console.log(data),
      (
  <>
  <SimpleReactLightbox >
    <SRLWrapper options={options}>
      <a href="https://theastro.co/les-perles/assets/images/gal-2.jpg" data-attribute="SRL">
   <img src="https://theastro.co/les-perles/assets/images/gal-2.jpg" alt="Umbrella" />
 </a>
 <a href="https://theastro.co/les-perles/assets/images/gal-3.jpg" data-attribute="SRL">
   <img src="https://theastro.co/les-perles/assets/images/gal-3.jpg" alt="Whatever" />
 </a>

         </SRLWrapper>


  </SimpleReactLightbox>
  <SimpleReactLightbox >
    <SRLWrapper>

 <a href="https://theastro.co/les-perles/assets/images/gal-4.jpg" data-attribute="SRL">
<img src="https://theastro.co/les-perles/assets/images/gal-4.jpg" alt="Umbrella" />
</a>
<a href="https://theastro.co/les-perles/assets/images/gal-4.jpg" data-attribute="SRL">
<img src="https://theastro.co/les-perles/assets/images/gal-4.jpg" alt="Whatever" />
</a>
         </SRLWrapper>


  </SimpleReactLightbox>
  </>

      )
    )}
  />
);

export default GalerieG;
