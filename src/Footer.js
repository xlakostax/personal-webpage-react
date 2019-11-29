import React from 'react';
import styled from 'styled-components';

var copy = '\u00A9';
var year = new Date().getFullYear();

const FooterTag = styled.footer`
  position: relative;
  width: 80%;
  margin: 2em auto;
  padding: 2em 0;
  text-align: center;
  z-index: 999;
`;

const Footer = () => {
  return(
    <FooterTag>
       {copy} Konstantin Veselovskii | <span id="year">{year}</span>
    </FooterTag>
  )
}
export default Footer;
