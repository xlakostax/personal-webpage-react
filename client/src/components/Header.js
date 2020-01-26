import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
  display: flex;
  grid-area: header;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  margin: 0 auto;
  width: 80%;
  top: 0; right: 0; bottom: 0; left: 0;
  padding: 1.2em 0;
  font-family: 'Nunito', Georgia, serif;
  background-color: white;
  z-index: 3;
  box-shadow: 0 1px rgba( 220, 220, 220, 1 );
  /* to avoid 'jumping' of fixed header */
  transform:translateZ(0);
    -webkit-transform:translateZ(0);
    -moz-transform:translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform:translateZ(0);
  /* & .active {
    color: rgb(255, 99, 71);
  }
  & .active:after, .inactive:after {
    content: '';
    display: block;
    width: 0px;
    height: 1px;
    transition: 300ms;
  }
  & .active:after {
    background: rgb(255, 99, 71);
  }
  & .inactive:after {
    background: rgba(47, 47, 47, 1);
  }
  & .active:hover:after, .inactive:hover:after {
    width: 100%;
  } */
  & .logo {
    font-weight: 400;
    font-size: 1.2em;
    & span {
      display: inline-block
      transition: transform .2s ease-in-out;
      transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transition: translateY(0);
        -o-transform: translateY(0);
    }
    & :nth-child(2) {
      font-weight: 800;
    }
    &:hover :nth-child(2) {
      transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        -moz-transform: translateY(-2px);
        -ms-transition: translateY(-2px);
        -o-transform: translateY(-2px);
    }
    &:hover :first-child {
      transform: translateY(2px);
        -webkit-transform: translateY(2px);
        -moz-transform: translateY(2px);
        -ms-transition: translateY(2px);
        -o-transform: translateY(2px);
    }
  }
  & nav {
    @media ( max-width: 1024px ) {
      color: rgb( 255, 255, 255 );
      transition: transform 1s ease-in-out;
        -webkit-transition: transform 1s ease-in-out;
        -moz-transition: transform 1s ease-in-out;
        -ms-transition: transform 1s ease-in-out;
        -o-transition: transform 1s ease-in-out;
      top: 0;
      bottom: 0;
      min-height: 100vh;
      position: fixed;
      width: 100vw;
      background-color: rgba( 47, 47, 47, 0.9 );
      transform: translateX( -200vw );
        -webkit-transform: translateX(-200vw);
        -moz-transform: translateX(-200vw);
        -ms-transition: translateX(-200vw);
        -o-transform: translateX(-200vw);
    }
    & ul {
      display: flex;

      @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        height: 100%;
      }
      & li {
        color: rgb( 255, 255, 255 )
        display: inline-block;
        margin-left: 1em;
        @media (min-width: 768px) and (max-width: 1023px) {
          font-size: 4em;
          /* forcing <li>'s width to be the same as it's content */
          /* float:left;
          clear:left; */
          /* forcing <li>'s width to be the same as it's content */
        }
        @media (min-width: 425px) and (max-width: 767px) {
          font-size: 3em;
        }
        @media (max-width: 424px) {
          font-size: 2em;
        }
        & h2 {
          font-weight: 400;
          font-size: 1.2em;
          background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
          transition: background-position 120ms ease-in-out;
            -webkit-transition: background-position 120ms ease-in-out;
            -moz-transition: background-position 120ms ease-in-out;
            -ms-transition: background-position 120ms ease-in-out;
            -o-transition: background-position 120ms ease-in-out;
          background-size: 100% 180%;
          @media (max-width: 1024px) {
            background-image: none;
          }
        }
        & h2:hover {
          background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
          background-position: 0 100%;
          @media (max-width: 1024px) {
            background-image: none;
          }
        }
      }
    }
  }
  & .menu-btn {
    display: none;
    &:checked ~ nav {
      transform: translateX(-10%);
        -webkit-transform: translateX(-10%);
        -moz-transform: translateX(-10%);
        -ms-transition: translateX(-10%);
        -o-transform: translateX(-10%);
    }
    &:checked ~ .menu-icon .navicon {
      background: transparent;
      &:before {
        transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transition: rotate(-45deg);
          -o-transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transition: rotate(45deg);
          -o-transform: rotate(45deg);
      }
      &:before, :after {
        top: 0;
        background: rgb( 255, 255, 255 );
        transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -webkit-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -moz-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -ms-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -o-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
      }
    }
  }
  & .menu-icon {
    cursor: pointer;
    user-select: none;
    z-index: 999;
    & .navicon {
      background: rgba( 47, 47, 47 );
      display: none;
      height: 2px;
      position: relative;
      transition: background .1s ease-out 0.3s;
        -webkit-transition: background .1s ease-out 0.3s;
        -moz-transition: background .1s ease-out 0.3s;
        -ms-transition: background .1s ease-out 0.3s;
        -o-transition: background .1s ease-out 0.3s;
      width: 2em;
      @media (max-width: 1024px){
        display: block;
      }
      &:before, :after {
        background: rgba( 47, 47, 47 );
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: transform .3s ease-out, top .3s ease-out .3s;
          -webkit-transition: transform .3s ease-out, top .3s ease-out .3s;
          -moz-transition: transform .3s ease-out, top .3s ease-out .3s;
          -ms-transition: transform .3s ease-out, top .3s ease-out .3s;
          -o-transition: transform .3s ease-out, top .3s ease-out .3s;
        width: 100%;
        transform: rotate(0);
          -webkit-transform: rotate(0);
          -moz-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
        @media (max-width: 1024px){

        }
      }
      &:before {
        top: 10px;
      }
      &:after {
        top: -10px;
      }
    }
  }
`;

const Header = () => {
  var data = require( '../menu.json' );
  var menu = data.slice( 0, 4 ).map ( ( element ) => {
    return (
      <li key = { element.id }>
        <NavLink exact to = { element.path }>
          <h2>{ element.title }</h2>
        </NavLink>
      </li>
    );
  });
  return(
    <HeaderTag>
      <NavLink exact to = '/'>
        <h2 className = 'logo'><span>Konstantin</span><span>Veselovskii</span></h2>
      </NavLink>
        <input id = 'menu-btn' className = 'menu-btn' type = 'checkbox'/>
        <label className = 'menu-icon' htmlFor = 'menu-btn'>
          <span className = 'navicon'></span>
        </label>
      <nav id = 'nav'>
        <ul className = 'menu'>
          { menu }
        </ul>
      </nav>
    </HeaderTag>
  )
}

export default Header;
