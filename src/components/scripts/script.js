import React from "react";
import { withPrefix } from "gatsby";
export default class Script extends React.Component {

  componentDidMount () {

    const homepageScripts = document.createElement("script")
    homepageScripts.id = "homepageScripts"
    homepageScripts.src = withPrefix("file.js")
    homepageScripts.async = true
    document.body.appendChild(homepageScripts)
  }
  render() {

    return (
<>
</>
    );
  }}
