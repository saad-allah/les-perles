import React from "react";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import ShareIcon from "../images/share.svg";
const url = typeof window !== 'undefined' ? window.location.href : '';
export default class Share extends React.Component {
  constructor(props) {
     super(props);
     this.twitter = this.twitter.bind(this);
     this.facebook = this.facebook.bind(this);
   }

   twitter() {
  window.open(`https://twitter.com/share?url=${url}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=600,height=400");
   }
   facebook() {
    window.open(`https://www.facebook.com/sharer.php?u=${url}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=600,height=400");
   }
  render() {

    return (
      <div className="media">

          <img
            src={ShareIcon}
            alt="/"
          />

        <a href="#" onClick={this.twitter}>
          <img
            src={Twitter}
            alt="/"
          />
        </a>
        <a href="#" onClick={this.facebook}>
          <img
            src={Facebook}
            alt="/"
          />
        </a>
      </div>

    );
  }}
