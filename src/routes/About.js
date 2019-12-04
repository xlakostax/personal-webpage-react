import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

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

export default class About extends Component {
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
    {/*const { width } = this.state;*/}
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return(
        <Div>
          <BurgerMenu />
          <Main>
            <h1>About</h1>
            <Wrapper>
              <p>My name is Konstantin Veselovskii. I was born and grew up in "a horrible industrial city" ("The Sopranos", S02E12) in Karelia.<br />
              I am among the lucky ones who passionate their job. I have been studying to be a web developer since 2019. That’s why the portfolio is still empty. But you can improve it and get smth damn awesome.</p><br />
              <h2>Pros of work with me:</h2><br />
              <ul>
                <li>JavaScript, NODE.js, REACT.js</li>
                <li>Responsive, cross-browser web development</li>
              </ul>
              <br />
              <p>That list isn’t exhaustive. If you need some help, <a href="contacts">let’s connect</a> to get the process started.</p>
            </Wrapper>
          </Main>
          <Footer />
        </Div>
      )
    } else {
      return(
        <Div>
          <Header />
          <Main>
            <h1>About</h1>
            <Wrapper>
              <p>My name is Konstantin Veselovskii. I was born and grew up in "a horrible industrial city" ("The Sopranos", S02E12) in Karelia.
              I am among the lucky ones who passionate their job. I have been studying to be a web developer since 2019. That’s why the portfolio is still empty. But you can improve it and get smth damn awesome.</p>
              <br />
              <h2>Pros of work with me:</h2>
              <ul>
                <li>JavaScript, NODE.js, REACT.js</li>
                <li>Responsive, cross-browser web development</li>
              </ul>
              <br />
              <p>That list isn’t exhaustive. If you need some help, <a id="connectLink" href="contacts">let’s connect</a> to get the process started.</p>
            </Wrapper>
          </Main>
          <Footer />
        </Div>
      );
    }
  }
}
