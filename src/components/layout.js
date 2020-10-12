import React from "react"
import { Link } from "gatsby"

import "../styles/global.scss"

function Layout (props) {

  const ListLink = props => (
    <li>
      <Link to={props.to} className="header-links" activeStyle={{ color: '#333' }}>
        {props.children}
      </Link>
    </li>
  )  

  return (
    <div id="page-container">
      <div id="content-wrap">
          <div className="title"><img src="https://imgur.com/YzY5UEZ.png" alt="Icon"></img></div>
          <div className="header-links-container">
            <nav> <ul>
              <ListLink index={0} to="/">HOME</ListLink>
              <ListLink index={1} to="/about">ABOUT</ListLink>
              <ListLink index={2} to="/webdev/">WEBDEV</ListLink>
              <ListLink index={3} to="/gamedev/">GAMEDEV</ListLink>
            </ul> </nav>
          </div>
        <div>
            {/* <div key={props.childKey? props.childKey : "test"} id={props.childKey}>
             */}
              {props.children}
        </div>
      </div>
    <footer id="footer">© 2019 Tina Peng</footer>
    </div>
  )
}

export default Layout;