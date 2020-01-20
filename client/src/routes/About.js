import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useState, useEffect } from 'react';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
      position: relative;
      margin: 1.2em 0;
      /* @media (max-width: 768px) {
        font-size: 2em;
      } */
    }
  & article {
    text-align: justify;
  }
  & a {
    display: inline-block;
    color: rgb( 255, 99, 71 );
  }
  & a:after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background: rgb( 255, 99, 71 );
    transition: 300ms;
  }
  & a:hover:after {
    width: 100%;
  }
`;

const About = () => {
  var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var visible = (currentWidth < 1024) ? {display: 'block'} : {display: 'none'};
  const [style, setStyle] = useState(visible);
  useEffect( () => {
    setStyle(visible);
    window.addEventListener('resize', setStyle);
    /* remove resize listener */
    return () => {
      window.removeEventListener('resize', setStyle);
    }
  }, []);
  return(
    <>
      {/*<BurgerMenu />*/}
      <Header />
      <Main>
        <article>
          <h1>About</h1>
          <p>My name is Konstantin Veselovskii. I was born and grew up in Petrozavodsk, a small town in Karelia. I am passionate my job. I have been studying the web development since 2019. I focus on writing clean, elegant and efficient code.</p>
          <p>If you need some inspiring ideas, <Link to = '/contacts'>let’s connect</Link> to get the process started.</p>
        </article>
      </Main>
      <Footer />
    </>
  )
}
export default About;
