import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
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
  @media (max-width: 1024px) {
    display: block;
  }
  & .logo {
    font-weight: 400;
    font-size: 1.2em;
    float: left;

    & span {
      font-weight: 800;
    }
  }

  & nav {
    position: relative;
    @media (max-width: 1024px) {
      width: 100vw;
      position: fixed;
      top: 0; left: 0; bottom: 0; right: 0;
    }
    & ul {
      & li {
        display: inline-block;
        margin-left: 1em;
        @media (min-width: 1024px) {
          float: left;
        }
        @media (max-width: 1024px) {
          margin-left: 0;
          /* forcing <li>'s width to be the same as it's content */
          float:left;
          clear:left;
          /* forcing <li>'s width to be the same as it's content */
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
            /* background-image: none; */
          }
        }
      }
    }
  }
  & .menu-holder {
    display: none;
    @media (max-width: 1024px) {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }
    & .menu-btn {
      display: none;
      &:checked ~ .menu-icon .navicon {
        background: transparent;
        &:before {
          transform: rotate(-45deg);
          top: 0;
        }
        &:after {
          transform: rotate(45deg);
          top: 0;
        }
      }
    }
    & .menu-icon {
      cursor: pointer;
      display: inline-block;
      float: right;
      user-select: none;
      & .navicon {
        background: red;
        display: block;
        height: 2px;
        position: relative;
        transition: background .2s ease-out;
        width: 18px;
        &:before, :after {
          background: red;
          content: '';
          display: block;
          height: 100%;
          position: absolute;
          transition: all .2s ease-out;
          width: 100%;
        }
        &:before {
          top: 5px;
        }
        &:after {
          top: -5px;
        }
      }
    }
  }
`;

const Header = () => {
  const handleClick = useCallback(() => {
    console.log('Clicked!')
  })
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
      <NavLink exact to='/' >
        <h2 className = 'logo'>Konstantin<span>Veselovskii</span></h2>
      </NavLink>
      <nav>
        <ul className = 'menu'>
          { menu }
        </ul>
      </nav>
      <div className = 'menu-holder'>
        <input id = 'menu-btn' className = 'menu-btn' type = 'checkbox'/>
        <label className = 'menu-icon' htmlFor = 'menu-btn' onClick = { handleClick }>
          <span className = 'navicon'></span>
        </label>
      </div>
    </HeaderTag>
  )
}

export default Header;
