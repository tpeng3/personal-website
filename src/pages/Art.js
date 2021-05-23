import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import slideshowData from "../data/slideshowData.js"
// import "../styles/art.scss"

export default () => (
  <Layout childKey="art">
    <div id="art">
      <div className="slideshow-container">
        <Slideshow data={slideshowData} />
      </div>
    </div>
  </Layout>
)
