import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
import BurgerMenu from '../components/BurgerMenu';
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
    position: relative;
    margin: 1.2em 0;
  }
`;

const Contacts = () => {
  return(
    <>
      <Header />
      <Main>
        <h1>Contacts</h1>
        <p>Do you have a question or suggestion?
          Contact with me in every way you want (phone and email). I am open to any ideas of cooperation.<br /><br />
          Phone: <a href="callto://+358 41 723 7774?call">+358 41 723-77-74</a><br />
          E-mail: <a href="mailto:konstantin.veselovskii@gmail.com?subject=About cooperation">konstantin.veselovskii@gmail.com</a>
        </p><br />
        <Form />
      </Main>
      <Footer />
    </>
  )
}
export default Contacts;
