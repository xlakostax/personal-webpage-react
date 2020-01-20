import React from 'react';
import { NavLink } from 'react-router-dom';

const Burger = () => {
  return (
    <>
    <input className = 'menu-btn' type='checkbox' id = 'menu-btn' />
    <label className = 'menu-icon' for = 'menu-btn'>
      <span className = 'navicon'></span>
    </label>
    <ul className = 'menu'>
      <li>
        <NavLink id = 'home' exact to = '/'>Home</NavLink>
      </li>
      <li>
        <NavLink id = 'projects' exact to = '/projects'>Projects</NavLink>
      </li>
      <li>
        <NavLink id = 'about' exact to = '/about'>About</NavLink>
      </li>
      <li>
        <NavLink id = 'contact' exact to = '/contacts'>Contact</NavLink>
      </li>
    </ul>
    </>
  );
}

export default Burger;
