import React, { Fragment, Component } from 'react';
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

const Wrapper = styled.div`
  position: relative;
  text-align: justify;
  & h2 {
      margin: 0 0 1em 0;
      font-family: "Merriweather";
      font-size: 1em;
      /* line-height: 1.5; */
    }
  & a {
    display: inline-block;
    color: rgb(255, 99, 71);
  }
  & a:after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background: rgb(255, 99, 71);
    transition: 300ms;
  }
  & a:hover:after {
    width: 100%;
  }
`;

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

// make sure to remove the listener
// when the component is not mounted anymore
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return(
        <Fragment>
          <BurgerMenu />
          <Main>
            <h1>Blog</h1>
            <Wrapper>
              <p>Under construction</p> <br />
            </Wrapper>
          </Main>
          <Footer />
        </Fragment>
      )
    } else {
      return(
        <Fragment>
          <Header />
          <Main>
            <h1>Blog</h1>
            <Wrapper>
              <p>Under construction</p> <br />
              <a href="/">Go back home</a>
            </Wrapper>
          </Main>
          <Footer />
        </Fragment>
      );
    }
  }
}
