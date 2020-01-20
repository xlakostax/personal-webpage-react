import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
  grid-area: header;
  position: sticky;
  margin: 0 auto;
  width: 80%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.2em 0;
  font-family: 'Nunito', Georgia, serif;
  background-color: white;
  z-index: 99;
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
    display: none;
  }
  & nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0;
    /* @media (max-width: 768px) {
      flex-direction: column;
    } */
    & ul:first-child {
      text-align: left;
      & h2 {
        font-weight: 400;
        font-size: 1.2em;
      }
      & span {
        font-weight: 800;
      }
    }
    & ul:last-child {
      text-align: right;
      /* @media (max-width: 768px) {
        display: flex;
        margin-top: 1.2em;
        justify-content: space-between;
      } */
      & li {
        display: inline-block;
        margin-left: 1em;
        /* @media (max-width: 768px) {
          margin-left: 0;
        } */
      & h2 {
        font-weight: 400;
        font-size: 1.2em;
        background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
        transition: background-position 120ms ease-in-out;
        background-size: 100% 180%;
      }
      & h2:hover {
        background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
        background-position: 0 100%;
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
      <input id = 'menu-btn' className = 'menu-btn' type='checkbox'/>
      <label className = 'menu-icon' for = 'menu-btn'>
        <span className = 'navicon'></span>
      </label>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/' >
              <h2>Konstantin<span>Veselovskii</span></h2>
            </NavLink>
          </li>
        </ul>
        <ul className = 'menu'>
          { menu }
        </ul>
      </nav>
    </HeaderTag>
  )
}

export default Header;
