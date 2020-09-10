import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
    position: relative;
    margin: 1.2rem 0;
  }
  & article {
    text-align: justify;
  }
`;

const Contacts = () => {
  return(
    <>
      <Header />
      <Main>
        <h1>Contacts</h1>
        <article>
          <p>Do you have a question or suggestion? Contact with me in every way you want (phone and email). I am open to any ideas of cooperation.</p>
          <p>
            Phone: <a href="callto://+358 41 723 7774?call">+358 41 723-77-74</a><br />
            E-mail: <a href="mailto:konstantin.veselovskii@gmail.com?subject=About cooperation">konstantin.veselovskii@gmail.com</a>
          </p>
        </article><br />
        <Form />
      </Main>
      <Footer />
    </>
  )
}
export default Contacts;
