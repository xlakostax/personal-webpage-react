import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  & h2 {
      margin: 0 0 1em 0;
      font-family: "Merriweather";
      font-size: 1em;
      /* line-height: 1.5; */
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

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount = () => {
    window.addEventListener( 'resize', this.handleWindowSizeChange );
  }

/* make sure to remove the listener when the component is not mounted anymore */
  componentWillUnmount = () => {
    window.removeEventListener( 'resize', this.handleWindowSizeChange );
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      return(
        <>
          <BurgerMenu />
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
    } else {
      return(
        <>
          <Header />
          <Main>
            <h1>About</h1>
            <p>My name is Konstantin Veselovskii. I was born and grew up in Petrozavodsk, a small town in Karelia. I am passionate my job. I have been studying the web development since 2019. I focus on writing clean, elegant and efficient code.</p><br />
            <p>If you need some inspiring ideas, <Link to = '/contacts'>let’s connect</Link> to get the process started.</p>
          </Main>
          <Footer />
        </>
      );
    }
  }
}
