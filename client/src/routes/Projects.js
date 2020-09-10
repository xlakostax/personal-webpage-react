import Footer from '../components/Footer'
import Header from '../components/Header'
import Soon from "../components/soon"
import React, {
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';

import firebaseConf from '../Firebase';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
      position: relative;
      margin: 1.2rem 0;
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
    margin-bottom: 1rem;
    font-weight: 400;
    color: rgba(70, 130, 180)
  }
  & .card-inGrid {
    border: 3px solid rgba(220, 220, 220, 1);
    border-radius: 5px;
    padding: 2rem;
  }
  & .card-inGrid p {
    font-size: 1rem;
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const updateList = () => {
    /* Create a reference to projects in the Firebase Database.
    The reference represents a specific location in the Database,
    and can be used for reading or writing data to that Database location. */
    // const projectsRef = firebaseConf.database().ref();
    const projectsRef = firebaseConf.database().ref("projects");
    /* Firebase offers several different event types for reading data.

    child_added

    This event type will be triggered once for every message and every time
    a new message is added to the Database.  */
    // projectsRef.on( 'child_added', ( snapshot ) => {

    projectsRef.on( 'value', ( snapshot ) => {
      /* snapshot.val() contains an object of objects from the Database:
      { {}, {}, ... , {} } */
      let obj = snapshot.val();
      // console.log( "obj: ", obj )
      // for (let key in obj.projects) {
      //    obj[ key ]['id'] = key;
      //    console.log("key: ", key)
      // }

      let projects = [];
      for (let key in obj) {
          projects.push( obj[ key ] )
      }
      // console.log( "typeof projects: ", typeof projects )
      // console.log("projects: ", projects)

      setProjects([...projects])
      // console.log( "projects: ", projects )
    });
  }

  useEffect(() => {
    updateList()
  }, [])

  let projectList = projects.map ( (project) => {
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
        {/* <Grid>
          {projectList}
        </Grid> */}
        <Soon />
      </Main>
      <Footer />
    </>
  )
}
export default Projects;
