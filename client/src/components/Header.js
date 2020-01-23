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
      font-weight: 800;
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
      transition: transform 1s ease-in-out;
      transform: translateX(-10%);
    }
    &:checked ~ .menu-icon .navicon {
      background: transparent;
      &:before {
        transform: rotate(-45deg);
        top: 0;
        transition: background 0.9s ease-in-out;
        background: rgb( 255, 255, 255 );
      }
      &:after {
        transform: rotate(45deg);
        top: 0;
        transition: background 0.9s ease-in-out;
        background: rgb( 255, 255, 255 );
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
      transition: background .2s ease-out;
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
        transition: all .3s ease-out;
        width: 100%;
        margin-bottom: .3em;
        @media (max-width: 1024px){

        }
      }
      &:before {
        top: 5px;
      }
      &:after {
        top: -5px;
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
        <h2 className = 'logo'>Konstantin<span>Veselovskii</span></h2>
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
