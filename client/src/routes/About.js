import React from 'react';

/*Import components*/
import Footer from '../components/Footer'
import Header from '../components/Header'

/*Import libraries*/
import {Link} from 'react-router-dom';

/*Import styles*/
import {Main} from "../styles/styled";

const About = () => {
  return(
    <>
      <Header />
      <Main>
        <article>
          <h1>About</h1>
          <p>My name is Konstantin Veselovskii. I am a web developer from Helsinki, who makes handcraft digital products.
            I am passionate my job and eager to learn by doing new web technologies. I focus on writing clean, elegant and efficient code. I appreciate self-development as a professional.</p>
          <p>If you need some inspiring ideas, <Link to = '/contacts'>let’s connect</Link> to get the process started.</p>
        </article>
      </Main>
      <Footer />
    </>
  )
}
export default About;
