// import BurgerMenu from '../components/BurgerMenu';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import React from 'react';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
    font-size: 2rem;
    margin: 1.2rem 0;
    position: relative;
  }
  & article {
    text-align: justify;
  }
  & a {
    position: relative;
    display: inline-block;
    /* color: rgba(70, 130, 180); */
    &:after {
      content: '';
      position: absolute;
      background-color: rgba(70, 130, 180, 0.5);
      top: 60%;
      left: -0.1rem;
      right: -0.1rem;
      bottom: 0;
      z-index: -1;
      transition: top 200ms ease-in-out;
    }
    &:hover:after {
      top: 0%;
    }
  }
  /* & a:after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background: rgba(70, 130, 180);
    transition: 300ms;
      -webkit-transition: 300ms;
      -moz-transition: 300ms;
      -ms-transition: 300ms;
      -o-transition: 300ms;
  }
  & a:hover:after {
    width: 100%;
  } */
`;

const About = () => {
  // var currentWidth = window.innerWidth || document.documentElrement.clientWidth || document.body.clientWidth;
  // var visible = (currentWidth < 1024) ? {display: 'block'} : {display: 'none'};
  // const [style, setStyle] = useState(visible);
  // useEffect( () => {
  //   setStyle(visible);
  //   window.addEventListener('resize', setStyle);
  //   /* remove resize listener */
  //   return () => {
  //     window.removeEventListener('resize', setStyle);
  //   }
  // }, []);
  return(
    <>
      {/*<BurgerMenu />*/}
      <Header />
      <Main>
        <article>
          <h1>About</h1>
          <p>My name is Konstantin Veselovskii. I am a web developer from Helsinki, who makes handcraft digital products.
            I am passionate my job and eager to learn by doing new web technologies. I focus on writing clean, elegant and efficient code. I appreciate self-development as a professional.</p>
          {/* <p>My name is Konstantin Veselovskii. I was born and grew up in Petrozavodsk, a small town in Karelia. I am passionate my job. I have been studying the web development since 2019. I focus on writing clean, elegant and efficient code.</p> */}
          <p>If you need some inspiring ideas, <Link to = '/contacts'>let’s connect</Link> to get the process started.</p>
        </article>
      </Main>
      <Footer />
    </>
  )
}
export default About;
