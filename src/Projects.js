import React, { Fragment } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  width: 50%;
  & h1 {
      position: relative;
      margin: 1.2em 0;
    }
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: 15px 15px;
  & h3 {
    position: relative;
    margin-bottom: 1em;
    font-weight: 400;
    color: rgb(255, 99, 71)
  }
  & .Card--inGrid {
    position: relative;
    border: 3px solid rgba(220, 220, 220, 1);
    border-radius: 5px;
    padding: 2em;
  }
  & .Card p {
    position: relative;
    font-size: 1em;
  }
`;

const Projects = () => {
  const projectsData = require('../Projects.json');
  var projectList = projectsData.map ( (project) => {
    return (
      <article class='Card Card--inGrid' key={project.id}>
        <h3 class='Card-title'>
          <a class='Card-link' href = {project.url} target = '_blank' rel='noopener noreferrer' title='Event manager app'>{project.title}</a>
        </h3>
        <p class='Card-content'>{project.description}</p>
      </article>
    );
  });
  return(
    <Fragment>
      <Header />
      <Main>
        <h1>Projects</h1>
        <Grid>
          {projectList}
        </Grid>
      </Main>
      <Footer />
    </Fragment>
  )
}
export default Projects;
