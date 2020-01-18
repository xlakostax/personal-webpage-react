import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap/all';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';
import '../styles/Home.css';

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 8em;
    line-height: 1;
    & span {
      font-weight: 400;
    }
  }
  & h2 {
    font-size: 2em;
    font-weight: 400;
    padding-right: 0.5em;
  }
  & section {
    padding-top: 1.2em;
    & i {
      position: relative;
      font-size: 2em;
      padding-right: 0.2em;
    }
    & i:hover {
      transition: color 100ms linear;
      color: tomato;
    }
    & li {
      display: inline-block;
      vertical-align: middle;
    }
  }
  & nav {
    position: relative;
    padding-top: 1.2em;
    & li {
      display: inline-block;
      vertical-align: middle;
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
        <li key={element.id}>
          <NavLink exact to = {element.path}>
            <h2>{element.title}</h2>
          </NavLink>
        </li>
      );
    });
    const links = data.slice( 4 ).map ( ( element ) => {
      return (
        <li key={element.id}>
          <Link href = {element.url}>
            <i className = {element.icon}></i>
          </Link>
        </li>
      );
    });
    return(
      <Main>
        <div id='titleContainer'>
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
