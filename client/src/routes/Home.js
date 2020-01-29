import React, { Component } from 'react';
// import { TweenLite, TweenMax } from 'gsap/all';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
import styled from 'styled-components';

const Main = styled.main`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  position: relative;
  display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 5%;
  & h1 {
    font-size: 8rem;
    line-height: 1;
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 6rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 4rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      font-size: 3rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      font-size: 2rem;
    }
    & span {
      font-weight: 400;
    }
  }
  & h2 {
    font-size: 2rem;
    font-weight: 400;
    padding-right: 0.5em;
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 1.5rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 1rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      font-size: 0.75rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      font-size: 0.5rem;
    }
    @media (min-width: 375px) and (max-width: 424px) and (orientation: portrait) {
      font-size: 1.125rem;
    }
    @media (min-width: 320px) and (max-width: 374px) and (orientation: portrait) {
      font-size: 0.75rem;
    }
  }
  & ul {
    @media (min-width: 1024px) and (max-width: 1439px) {
      line-height: 1.125rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 0.75rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      font-size: 0.5625rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      font-size: 0.375rem;
    }
  }
  & section {
    margin-top: 1rem;
    @media (min-width: 1024px) and (max-width: 1439px) {
      margin-top: 0.75rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-top: 0.5rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      margin-top: 0.375rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      margin-top: 0.25rem;
    }
    & i {
      font-size: 2rem;
      padding-right: 0.2em;
      @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 1.5rem;
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1rem;
      }
      @media (min-width: 475px) and (max-width: 767px) {
        font-size: 0.75rem;
      }
      @media (min-width: 320px) and (max-width: 474px) {
        font-size: 0.5rem;
      }
      @media (min-width: 375px) and (max-width: 424px) and (orientation: portrait) {
        font-size: 1.125rem;
      }
      @media (min-width: 320px) and (max-width: 374px) and (orientation: portrait) {
        font-size: 0.75rem;
      }
    }
    & i:hover {
      transition: color 100ms linear;
      color: rgb( 255, 99, 71 );
    }
    & li {
      display: inline-block;
    }
  }
  & nav {
    margin-top: 1rem;
    @media (min-width: 1024px) and (max-width: 1439px) {
      margin-top: 0.75rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-top: 0.5rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      margin-top: 0.375rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      margin-top: 0.25rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      margin-top: 0.75rem;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      margin-top: 0.5rem;
    }
    & h2 {
      &:hover {
        transition: color 100ms linear;
        color: rgb( 255, 99, 71 );
      }
    }
    & li {
      display: inline-block;
      @media (min-width: 320px) and (max-width: 767px) {
        display: inline;
      }
    }
  }
`;

class Home extends Component {
  constructor( props ) {
    super( props );
    // this.div = React.createRef();
    this.state = {
      transform: ''
    };
    this.parallax = this.parallax.bind( this );
  }

  /* Parallax effect using gsap from side sources */
  componentDidMount = () => {
    // if ( window.screen.width >= '1660px' ){}
      document.addEventListener('mousemove', this.parallax);
    // console.log(this.div.current.className)
    // console.log(this.state.transform);
  }

  componentWillUnmount = () => {
    window.removeEventListener('mousemove', this.parallax);
  }

  parallax = ( e ) => {
    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
    // console.log( e );
    // var smth = document.querySelectorAll(`.${this.div.current.className}`);
    var smth = document.querySelectorAll(`.${this.className = 'titleContainer'}`);
    smth.forEach( element => {
      if (!isMobile) {
        var speed = element.getAttribute('speed');
        // console.log(speed)
        var x = ( window.innerWidth - e.pageX * speed) / 100;
        var y = ( window.innerWidth - e.pageY * speed) / 100;
        // console.log(x, y);
        this.setState({
          transform: `translateX(${x}px) translateY(${y}px)`,
        })
        // console.log(this.state.transform);
      }
    })
  }

  render() {
    var data = require( '../menu.json' );
    const menu = data.slice( 0, 4 ).map ( ( element ) => {
      return (
        <li key = { element.id }>
          <NavLink exact to = { element.path }>
            <h2>{ element.title }</h2>
          </NavLink>
        </li>
      );
    });
    const links = data.slice( 4 ).map ( ( element ) => {
      return (
        <li key = { element.id }>
          <a href = { element.url } target = '_blank' rel = 'noopener noreferrer'>
            <i className = { element.icon }></i>
          </a>
        </li>
      );
    });
    var speedAttr = {
      'speed': 2
    }
    return(
      <Main>
        {/*<div id = 'titleContainer' className = 'titleContainer' {...speedAttr} style = {{ transform: this.state.transform }} ref = { this.div }>*/}
        <div id = 'titleContainer' className = 'titleContainer' {...speedAttr} style = {{ transform: this.state.transform }}>
          <h1>
            <span>I'm </span>
            Konstantin
            <br />
            Veselovskii
          </h1>
          <section>
            <ul>
              <li>
                <h2>a web developer</h2>
              </li>
              {links}
            </ul>
          </section>
          <nav>
            <ul>
              {menu}
            </ul>
          </nav>
        </div>
      </Main>
    )
  }
}
export default Home;
