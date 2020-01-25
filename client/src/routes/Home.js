import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap/all';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';

const Main = styled.main`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 767px) {
    /*Do smth with layout*/
  }
  & h1 {
    font-size: 8em;
    line-height: 1;
    @media (min-width: 900px) and (max-width: 1199px) and (orientation: landscape) {
      font-size: 6em;
    }
    @media (min-width: 768px) and (max-width: 899px) and (orientation: landscape) {
      font-size: 4em;
    }
    /* @media (min-width: 425px) and (max-width: 767px) and (orientation: landscape) {
      font-size: 3em;
    } */
    & span {
      font-weight: 400;
    }
  }
  & h2 {
    font-size: 2em;
    font-weight: 400;
    padding-right: 0.5em;
    @media (min-width: 900px) and (max-width: 1199px) and (orientation: landscape) {
      font-size: 1.6em;
    }
    @media (min-width: 768px) and (max-width: 899px) and (orientation: landscape) {
      font-size: 1.4em;
    }
    /* @media (min-width: 425px) and (max-width: 767px) and (orientation: landscape) {
      font-size: 1.2em;
    } */
  }
  & section {
    padding-top: 1.2em;
    @media (min-width: 768px) and (max-width: 899px) and (orientation: landscape) {
      padding-top: 0.8em;
    }
    @media (min-width: 768px) and (max-width: 899px) and (orientation: landscape) {
      font-size: 0.6em;
    }
    /* @media (min-width: 425px) and (max-width: 767px) and (orientation: landscape) {
      font-size: 0.4em;
    } */
    & i {
      font-size: 2em;
      padding-right: 0.2em;
      @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 1.6em;
      }
      @media (min-width: 768px) and (max-width: 899px) {
        font-size: 1.4em;
      }
      /* @media (min-width: 425px) and (max-width: 767px) {
        font-size: 1.2em;
      } */
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
    padding-top: 1.2em;
    & h2 {
      &:hover {
        transition: color 100ms linear;
        color: rgb( 255, 99, 71 );
      }
    }
    @media (min-width: 768px) and (max-width: 899px) and (orientation: landscape) {
      padding-top: 0.8em;
    }
    @media (min-width: 768px) and (max-width: 899px) and (orientation: landscape) {
      font-size: 0.6em;
    }
    /* @media (min-width: 425px) and (max-width: 767px) and (orientation: landscape) {
      font-size: 0.4em;
    } */
    & li {
      display: inline-block;
      font-size: 0.8em;
    }
  }
`;

class Home extends Component {
  /* Parallax effect using gsap from side sources */
  componentDidMount = () => {
    if( window.screen.width >= 360 ){
      var rect = $( '#root' )[0].getBoundingClientRect();
      var mouse = { x: 0, y: 0, moved: false };

      $( '#root' ).mousemove( (e) => {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } );

      TweenLite.ticker.addEventListener('tick', () => {
        if ( mouse.moved ){
          parallaxIt( '#titleContainer', -30 );
        }
        mouse.moved = false;
      });

      function parallaxIt( target, movement ) {
        TweenMax.to( target, 0.3, {
          x: ( mouse.x - rect.width / 2 ) / rect.width * movement,
          y: ( mouse.y - rect.height / 2 ) / rect.height * movement
        });
      }

      $( window ).on( 'resize scroll', () => {
        rect = $( '#root' )[0].getBoundingClientRect();
      })
    }
  }
  render() {
    const data = require( '../menu.json' );
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
    return(
      <Main>
        <div id = 'titleContainer'>
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
