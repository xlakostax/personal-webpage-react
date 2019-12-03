import React from 'react';
import Footer from './Footer'
import Header from './Header'
import Form from './Form'
import BurgerMenu from './BurgerMenu';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Main = styled.main`
  position: relative;
  width: 50%;
  & h1 {
    position: relative;
    margin: 1.2em 0;
  }
`;

const Contacts = () => {
  return(
    <Div>
      <Header />
      <Main>
        <h1>Contacts</h1>
        <p>Do you have a question or suggestion for cooperation?
          Contact with me in every way you want (phone or email), or just fill in the form. I am opened for communication and interesting offers.<br /><br />
          Phone: <a href="callto://+358 41 723 7774?call">+358 41 723-77-74</a><br />
          E-mail: <a href="mailto:konstantin.veselovskii@gmail.com?subject=About cooperation">konstantin.veselovskii@gmail.com</a>
        </p><br />
        <Form />
      </Main>
      <Footer />
    </Div>
  )
}
export default Contacts;
