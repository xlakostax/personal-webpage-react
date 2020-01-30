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
       <p>{copy} Konstantin Veselovskii | <span id="year">{year}</span></p>
       {/*<p>Made with 🐑 in Helsinki.</p>*/}
       <p>Made with <span role="img" aria-label="heart">❤️</span> in Helsinki.</p>
    </FooterTag>
  )
}
export default Footer;
