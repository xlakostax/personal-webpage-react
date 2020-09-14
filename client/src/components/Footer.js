import React from 'react';

import {FooterTag} from "../styles/styled";

var copy = '\u00A9';
var year = new Date().getFullYear();

const Footer = () => {
  return(
    <FooterTag>
       <p>{copy} Konstantin Veselovskii | <span id="year">{year}</span></p>
       <p>Made with <span role="img" aria-label="heart">❤️{/*🐑*/}</span> in Helsinki.</p>
    </FooterTag>
  )
}
export default Footer;
