import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
      position: relative;
      margin: 1.2em 0;
    }
`;

const Grid = styled.div`
  position: relative;
  display: grid;
    display: -ms-grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  gap: 15px 15px;
  & h3 {
    position: relative;
    margin-bottom: 1em;
    font-weight: 400;
    color: rgb(255, 99, 71)
  }
  & .card-inGrid {
    border: 3px solid rgba(220, 220, 220, 1);
    border-radius: 5px;
    padding: 2em;
  }
  & .card-inGrid p {
    font-size: 1em;
  }
`;

const Projects = () => {
  var projectsData = require('../projects.json');
  var projectList = projectsData.map ( (project) => {
    return (
      <article className = 'card-inGrid' key={ project.id }>
        <h3 className = 'card-title'>
          <a className = 'card-link' href = { project.url } target = '_blank' rel = 'noopener noreferrer' title = 'Event manager app'> {project.title }</a>
        </h3>
        <p className = 'card-content'>{ project.description }</p>
      </article>
    );
  });
  return(
    <>
      <Header />
      <Main>
        <h1>Projects</h1>
        <Grid>
          {projectList}
        </Grid>
      </Main>
      <Footer />
    </>
  )
}
export default Projects;
