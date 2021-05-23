import React, { Component } from "react"
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaItchIo,
} from "react-icons/fa"
import { IconContext } from "react-icons"
import "../styles/links.scss"

class Links extends Component {
  render() {
    return (
      <div className="links-container">
        <IconContext.Provider
          value={{
            className: "react-icons",
            size: "1.4em",
            style: { color: this.props.color },
          }}
        >
          <a href="https://twitter.com/shuttlefrog">
            <FaTwitter />
          </a>
          <a href="https://github.com/tpeng3">
            <FaGithub />
          </a>
          <a href="https://shuttlefrog.itch.io/">
            <FaItchIo />
          </a>
          <a href="https://linkedin.com/in/tpeng3">
            <FaLinkedin />
          </a>
          <a href="mailto:tina2015p@gmail.com">
            <FaEnvelope />
          </a>
        </IconContext.Provider>
      </div>
    )
  }
}

export default Links
