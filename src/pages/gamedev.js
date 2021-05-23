import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import gameData from "../data/gameData.js"
import { Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"

export default () => (
  <Layout childKey="gamedev">
    <Container>
      <Fade>
        {gameData.map(project => (
          <Project info={project} key={project.id} />
        ))}
      </Fade>
    </Container>
  </Layout>
)
