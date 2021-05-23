import React from "react"
import Layout from "../components/layout"
import Links from "../components/links"
import { Container, Row, Col, Image } from "react-bootstrap"
import Fade from "react-reveal/Fade"

export default () => (
  <Layout childKey={"about"}>
    <Fade>
      <Container>
        <Row>
          <Col sm={4}>
            <div className="py-3">
              <Image
                src="https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/published/img-9514.jpg?1525277055"
                alt="Selfie"
                fluid
                rounded
              />
            </div>
          </Col>
          <Col sm={8}>
            <div className="py-3">
              <p>
                Hello! Thanks for taking the time to check out my humble and
                possibly outdated portfolio site.
                <br></br>
                <br></br>
                I'm a <b>full time web developer</b> based in the Bay Area with
                a love and appreciation for UI/UX and working with modern
                frontend tools! This site is for cataloguing my personal
                projects, please contact me if you would like a copy of my
                resume and past work experiences.
                <br></br>
                <br></br>
                Graduate <b>University of California, Santa Cruz</b> with a
                Bachelor's degree in both Computer Science and Computer Science:
                Game Design. It's strange to admit the latter degree was a happy
                accident. I keep game design as a hobby since it lets me to
                dual-wield my passions for both digital art and programming. A
                lot of my personal games explore silly and lighthearted,
                character-centric narratives starring queer casts.
                <br></br>
                <br></br>
                Feel free to reach out to me if you're interested in my work or
                just want to chat. Regardless, have a nice day!
              </p>
              <Links color="#ccc"></Links>
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  </Layout>
)
