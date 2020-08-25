import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Cycle from "../../images/day-dark-cycle.svg";
import Full from "../../images/full-screen.svg";
import Upmap from "../../images/upmap.svg";
import Dwnmap from "../../images/dwnmap.svg";
import Outmap from "../../images/zoom-outmap.svg";
import Inmap from "../../images/zoom-inmap.svg";

const ParagraphProjet = () => (
  <StaticQuery
    query={graphql`
      query GetContentProjets
      {
        wordpressPage(wordpress_id: {eq:  10}) {
           content
        }
      }

    `}
    render={data => (
      (
        <div className="map-wrapper">
             <div id="map">
               <div className="maptop">
                 <span className="controle-btn show"><img src={Cycle} id="show" alt="alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'" />
                   <div id="kimono-sunAnimatorMenu" className="dropup open">
                     <div id="kimono-sunAnimator" role="menu" className="dropdown-menu dropdown-menu-left">
                       <div className="kimono-dropdownTitle">
                         <div className="kimono-fakeCloseBtn"><i className="md md-close" /></div>
                       </div>
                       <div className="kimono-sunAnimatorActions">
                         <div id="kimono-sunPositionAnimation">
                           <div id="kimono-sky" />
                           <div id="kimono-sunPosition" />
                           <svg id="kimono-sunSvg" width={220} height={90} viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                             <path d="M 7,90 a 64 43 0 0 1 213,0" stroke="rgba(255,255,255,0.7)" strokeWidth={1} fill="none" id="kimono-theMotionPath" /></svg>
                           <svg width={220} height={90} viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                             <path d="M 7,90 a 64 43 0 0 1 213,0" stroke="rgba(255,255,255,0.1)" strokeWidth={1} fill="none" />
                           </svg>
                           <div className="kimono-ground" />
                           <div className="kimono-line line1" />
                           <div className="kimono-line line2" />
                           <div className="kimono-line line3" />
                           <div className="kimono-line line4" />
                           <div className="kimono-line line5" />
                           <div className="kimono-line line6" />
                           <div className="kimono-line line7" />
                           <div className="kimono-line line8" />
                           <div className="kimono-line line9" />
                           <div className="kimono-line line10" />
                           <div className="kimono-line line11" />
                         </div>
                       </div>
                       <div className="time-control warpp range-slider">
                         <div className="form-group">
                           <input type="date" className="form-control dates" name="date" id="firstDate" />
                         </div>
                          <br/>
                         <input id="time" className="range-slider__range" type="range" min={0} max={23} /> <span id="time-text" />

                       </div>
                     </div>
                   </div></span>
                 <span className="controle-btn fullScreen"><img src={Full} alt="alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'" /></span>
               </div>
               <div className="controle-main">
                 <span className="controle-btn">
                   <div className="map-container" title="Rotate the map in 3D, you can redirect the camera by pressing and holding the right click (or Ctrl and left click) and moving the mouse.">
                     <button className="map-center" type="button">
                       <div className="map-container-needle" id="needle" />
                     </button>

                   </div>
                 </span>
                 <span className="controle-btn up"><img src={Upmap} alt="alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'" /></span>
                 <span className="controle-btn down"><img src={Dwnmap} alt="alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'" /></span>
                 <span className="controle-btn zoomout"><img src={Outmap} alt="alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'" /></span>
                 <span className="controle-btn zoomin"><img src={Inmap} alt="alt='Portail, Immobilier, Maroc, Casablanca, El Jadida, Rabat, Marrakech, Tanger, Appartement, Location, Achat, propriété, résidence fermée,appartements R+6 R+8'" /></span>
               </div>
             </div>
           </div>

      )
    )}
  />
);

export default ParagraphProjet;
