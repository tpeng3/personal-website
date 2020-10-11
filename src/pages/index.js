import React from "react"
import Layout from "../components/layout"
import Links from "../components/links"
import {Container, Row, Col, Button} from 'react-bootstrap'
import Slideshow from "../components/slideshow"
import webData from "../data/webData.js"
import gameData from "../data/gameData.js"
import Fade from 'react-reveal/Fade';

const introStyle = {
  backgroundColor: "#73DFCB",
  width: "100%",
  textAlign: "center"
}

const btnStyle = {
  margin: "1em"
}

const webPrev = webData.slice(0, 3);
const gamePrev = gameData.slice(0, 3);

export default () => (
  <Layout childKey="index">
    <Fade>
    <div style={introStyle}>
      <Container>
          <div className="intro-text mx-auto py-5">
              <h1>TINA PENG</h1>
              <h3>Web Developer, Game Designer, Digital Artist</h3>
              <p>Hello! This is a personal website to showcase my projects and work.</p>
              <Links color="#fff"></Links>
          </div>
      </Container>
    </div>
      <Container>
        <Row className="text-center my-3">
          <Col sm={6} className="py-3">
            <Button href="/webdev" style={btnStyle} variant="info">Web Dev</Button>
            <Slideshow data={webPrev} /> 
          </Col>
          <Col sm={6} className="py-3">
            <Button href="/gamedev" style={btnStyle} variant="info">Game Dev</Button>
            <Slideshow data={gamePrev} /> 
          </Col>
        </Row>
      </Container>
    </Fade>
  </Layout>
)