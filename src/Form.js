import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

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

class Form extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      /*showModal: false*/
    };
    /*this.onChangeHandler = this.onChangeHandler.bind( this );
    this.handleCloseModal = this.handleCloseModal.bind( this );*/
  }

  submitForm (e) {
		e.preventDefault()
		this.props.history.push('/success');
	}

  render() {
    const Input = (props) => {
      return (
        <p>
          <label>{props.nameData}
            <input type = {props.type} name = {props.name} required />
          </label>
        </p>
      )
    }

    return(
      <Wrapper>
        {/*<form action="/contacts" method="post" netlify onSubmit={this.submitForm.bind(this)}>*/}
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
    )
  }
}
export default withRouter(Form);
