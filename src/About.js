import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
import MobileMenu from './MobileMenu'
import BurgerMenu from './BurgerMenu'
import './About.css'


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
    const { width } = this.state;
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return(
        <div>
          <BurgerMenu />
          <main>
            <h1>About</h1>
            <div id="wrapper">
              <p>My name is Konstantin Veselovskii. I was born and grew up in "a horrible industrial city" ("The Sopranos", S02E12) in Karelia.<br /><br />
              I am among the lucky ones who passionate their job. I have been studying to be a web developer since 2019. That’s why the portfolio is still empty. But you can improve it and get smth damn awesome.</p>
              <h2>Pros of work with me:</h2>
              <ul>
                <li>JavaScript, NODE.js, REACT.js</li>
                <li>Responsive, cross-browser web development</li>
              </ul>
              <br />
              <p>That list isn’t exhaustive. If you need some help, <a id="connectLink" href="contacts">let’s connect</a> to get the process started.</p>
            </div>
          </main>
          <Footer />
        </div>
      )
    } else {
      return(
        <div>
          <Header />
          <main>
            <h1 style = {{
              position: "relative",
              display: "block",
              width: "100%",
              margin: "1.2em 0"
            }}>About</h1>
            <div id="wrapper">
              <p>My name is Konstantin Veselovskii. I was born and grew up in "a horrible industrial city" ("The Sopranos", S02E12) in Karelia.<br /><br />
              I am among the lucky ones who passionate their job. I have been studying to be a web developer since 2019. That’s why the portfolio is still empty. But you can improve it and get smth damn awesome.</p>
              <h2>Pros of work with me:</h2>
              <ul>
                <li>JavaScript, NODE.js, REACT.js</li>
                <li>Responsive, cross-browser web development</li>
              </ul>
              <br />
              <p>That list isn’t exhaustive. If you need some help, <a id="connectLink" href="contacts">let’s connect</a> to get the process started.</p>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
  }
  }
