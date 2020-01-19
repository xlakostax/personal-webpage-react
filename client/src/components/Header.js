import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Nunito', Georgia, serif;
  background-color: white;
  z-index: 99;
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
`;

const Nav = styled.nav`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
  box-shadow: 0 1px rgba(220, 220, 220, 1);
  & ul:first-child {
    padding: 1.2em 0 1.2em 1.2em;
    text-align: left;
  }
  & ul:nth-child(2) {
    text-align: center;
    height: 0;
  }
  & ul:last-child {
    padding: 1.2em 1.2em 1.2em 0;
    text-align: right;
  }
  & li {
    display: inline-block;
    vertical-align: middle;
    padding: 0 0.6em;
  }
  & h2 {
    font-weight: 400;
    font-size: 1.2em;
  }
  & span {
    font-weight: 800;
  }
  & ul:nth-child(2) h2 {
    background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
    transition: background-position 120ms ease-in-out;
    background-size: 100% 180%;
  }
  & ul:nth-child(2) h2:hover {
    background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
    background-position: 0 100%;
  }
`;

export default class Header extends Component {

  componentDidMount = () => {
    var navBtns = document.getElementById( 'navMenu' ).getElementsByTagName( 'a' );
    var path = window.location.href;
    for ( let i = 0; i < navBtns.length; i++ ) {
      if ( navBtns[i].href !== path ){
        navBtns[i].className += ' inactive'
      }
    }
  };

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
    return(
      <HeaderTag>
        <Nav id = 'navMenu'>
          <ul>
            <li>
              <NavLink exact to='/' >
                <h2>Konstantin<span>Veselovskii</span></h2>
              </NavLink>
            </li>
          </ul>
          <ul>
            {menu}
          </ul>
        </Nav>
      </HeaderTag>
    )
  }
};
