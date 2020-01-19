import React from 'react';
import styled from 'styled-components';

var copy = '\u00A9';
var year = new Date().getFullYear();

const FooterTag = styled.footer`
  grid-area: footer;
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 1.2em 0;
  text-align: center;
`;

const Footer = () => {
  return(
    <FooterTag>
       {copy} Konstantin Veselovskii | <span id="year">{year}</span>
    </FooterTag>
  )
}
export default Footer;
