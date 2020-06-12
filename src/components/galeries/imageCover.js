import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { useLightbox } from 'simple-react-lightbox'
import PropTypes from 'prop-types';

const ImageCover = ({props })=> {
    const { openLightbox } = useLightbox()
  const data = useStaticQuery(graphql`
     query {
    wordpressAcfPages(wordpress_id: {eq:  14}) {
      acf {
        banner_title
         }
       }
     }
   `);

  return (
    <div className="col-md-12">
                        <div className="title">
                            <h2>Galerie</h2>
                              <h1
                       dangerouslySetInnerHTML={{
                         __html: data.wordpressAcfPages.acf.banner_title
                       }}
                     />
                        </div>
                        <div className="desc">
                            <p>Une sélection d'images de nos appartements hat standing. Découvrez votre nouveay bien
                                immobilier de plus prés</p>
                        </div>
                        <button
     onClick={() => openLightbox(props.imageToOpen)}
   >
     Open the lightbox
   </button>
                    </div>
  );
};
ImageCover.propTypes = {
  props: PropTypes.func,
};
export default ImageCover;
