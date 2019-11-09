import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
import MobileMenu from './MobileMenu'
import BurgerMenu from './BurgerMenu'


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
          <Footer />
        </div>
      )
    } else {
      return(
        <div>
          <Header />
          <Footer />
        </div>
      );
    }
  }
  }
