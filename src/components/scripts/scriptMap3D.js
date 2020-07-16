import React from "react";
import { withPrefix } from "gatsby";
export default class Script extends React.Component {

  componentDidMount () {
    const mapScripts3D = document.createElement("script")
    mapScripts3D.id = "mapScripts3D"
    mapScripts3D.src = withPrefix("file2.js")
    mapScripts3D.async = true
    document.body.appendChild(mapScripts3D)
  }
  componentWillUnmount () {
      var mapScripts = document.querySelector('#mapScripts3D');
    document.body.removeChild(mapScripts);
}
  render() {

    return (
<>
</>
    );
  }}
