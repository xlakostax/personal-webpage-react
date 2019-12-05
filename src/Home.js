import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap/all';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';
import './styles/Home.css';

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 8em;
  line-height: 1;
  & span {
    font-weight: 400;
  }
`;

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 400;
  padding-right: 0.5em;
`;

const SubtitleContainer = styled.div`
  padding-top: 1.2em;
  & ul {
    padding-inline-start: 0;
  }
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
`;
const NavMenu = styled.nav`
  position: relative;
  padding-top: 1.2em;
  & ul {
    padding-inline-start: 0;
  }
  & li {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8em;
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
    return(
      <Main>
        <div id='titleContainer'>
          <H1>
            <span>I'm </span>
            Konstantin
            <br />
            Veselovskii
          </H1>
          <SubtitleContainer>
            <ul>
              <li>
                <H2>a web developer</H2>
              </li>
              <li>
                <a href='https://github.com/xlakostax'>
                  <i className='fab fa-github-square'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/veselovskii/'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/xlakostax'>
                  <i className='fab fa-facebook-square'></i>
                </a>
              </li>
            </ul>
          </SubtitleContainer>
          <NavMenu>
            <ul>
              <li>
                <NavLink to='/projects'>
                  <H2>Projects</H2>
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'>
                  <H2>About</H2>
                </NavLink>
              </li>
              <li>
                <NavLink to='/contacts'>
                  <H2>Contacts</H2>
                </NavLink>
              </li>
              <li>
                <NavLink to='/contacts'>
                  <H2>Blog</H2>
                </NavLink>
              </li>
            </ul>
          </NavMenu>
        </div>
      </Main>
    )
  }
}

export default Home;
