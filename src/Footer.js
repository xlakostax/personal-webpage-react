import React from 'react';

var copy = '\u00A9';
var year = new Date().getFullYear();

const Footer = () => {
  return(
    <footer>
       {copy} Konstantin Veselovskii | <span id="year">{year}</span>
    </footer>
  )
}
export default Footer;
