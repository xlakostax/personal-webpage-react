import React from 'react';
import Footer from './Footer'
import Header from './Header'
import MobileMenu from './MobileMenu'
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Projects = () => {
  return(
    <Div>
      <Header />
      <Footer />
    </Div>
  )
}
export default Projects;
