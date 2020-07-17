const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://cdn.osmbuildings.org/mapbox-gl/0.44.1/mapbox-gl.js")
    addScript("https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js")
    addScript("https://unpkg.com/suncalc@1.8.0")
    addScript("https://unpkg.com/gl-matrix@2.3.2/dist/gl-matrix-min.js")
  }
}
