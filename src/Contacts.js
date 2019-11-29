import React from 'react';
import Footer from './Footer'
import Header from './Header'
import MobileMenu from './MobileMenu'

const Input = (props) => {
  return (
    <p>
      <label>{props.nameData}<br />
        <input type = {props.type} name = {props.name} required />
      </label>
    </p>
  )
}

const Contacts = () => {
  return(
    <div>
      <Header />
      <main>
        <h1>Contacts</h1>
        <p id="text">Do you have a question or suggestion for cooperation?<br />
          Contact with me. I am opened for communication and interesting offers.<br />
          Phone: <a href="callto://+358 41 723 7774?call">+358 41 723-77-74</a><br />
          E-mail: <a href="mailto:konstantin.veselovskii@gmail.com?subject=About cooperation">konstantin.veselovskii@gmail.com</a><br />
        </p>
        <div id="wrapper">
          <form class="" action="/send" method="post" data-netlify="true">
            <Input nameData = 'Your name: ' type = 'text' name = 'name'/>
            <Input nameData = 'Your email: ' type = 'email' name = 'email'/>
            <p>
              <label>Message:<br />
                <textarea name="message" required></textarea>
              </label>
            </p>
            <button type="submit" name="send">Send</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default Contacts;
