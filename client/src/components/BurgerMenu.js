import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import '../styles/burger.css';

export default class BurgerMenu extends Component {
  render () {
    return (
      <Menu right width={ '100%' } noOverlay disableAutoFocus>
        <NavLink id="home" className="menu-item" activeClassName='active' exact to="/">Home</NavLink>
        <NavLink id="projects" className="menu-item" activeClassName='active' exact to="/projects">Projects</NavLink>
        <NavLink id="about" className="menu-item" activeClassName='active' exact to="/about">About</NavLink>
        <NavLink id="contact" className="menu-item" activeClassName='active' exact to="/contacts">Contact</NavLink>
      </Menu>
    );
  }
}
