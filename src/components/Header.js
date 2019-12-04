import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-family: 'Nunito', Georgia, serif;
  background-color: white;
  z-index: 99;
  & .active {
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
  }
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
    return(
      <HeaderTag>
        <Nav id = 'navMenu'>
          <ul>
            <li>
              <h2>Konstantin<span>Veselovskii</span></h2>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink exact to='/' >
                <h2>Home</h2>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/projects'>
                <h2>Projects</h2>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/about'>
                <h2>About</h2>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/contacts'>
                <h2>Contacts</h2>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/blog'>
                <h2>Blog</h2>
              </NavLink>
            </li>
          </ul>
        </Nav>
      </HeaderTag>
    )
  }
};