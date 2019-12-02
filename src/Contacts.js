import React from 'react';
import Footer from './Footer'
import Header from './Header'
import BurgerMenu from './BurgerMenu'
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: justify;
  & form {
    position: relative;
    margin: 10em:
  }
  & input, textarea {
    display: block;
    width: 100%;
    height: 2em;
    margin: 0 0 1em 0;
    border-radius: 5px 5px;
    border: 1px solid rgba(220, 220, 220, 1);
  }
  & textarea {
    height: 10em;
  }
  & button {
    padding: 1em;
    background-color: transparent;
    border-radius: 5px 5px;
    border: 1px solid rgba(47, 47, 47, 1);
    text-transform: uppercase;
  }
  & button:hover {
    cursor: pointer;
    color: rgb(255, 99, 71);
    border: 1px solid rgb(255, 99, 71);
  }
`;

const Input = (props) => {
  return (
    <p>
      <label>{props.nameData}
        <input type = {props.type} name = {props.name} required />
      </label>
    </p>
  )
}

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
        <Wrapper>
          <form action="/contacts" method="post" netlify>
            <Input nameData = 'Your name: ' type = 'text' name = 'name'/>
            <Input nameData = 'Your email: ' type = 'email' name = 'email'/>
            <p>
              <label>Message:
                <textarea name="message" required></textarea>
              </label>
            </p>
            <button type="submit" name="send">Send</button>
          </form>
        </Wrapper>
      </Main>
      <Footer />
    </Div>
  )
}
export default Contacts;
