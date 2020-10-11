import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import webData from "../data/webData.js"
import {Container} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

export default () => (
  <Layout childKey="webdev">
    <Container>
      <Fade>
      {webData.map(project =>
          <Project 
          info={project}
          key={project.id}
          /> )
      }
        </Fade>
    </Container>
  </Layout>
)