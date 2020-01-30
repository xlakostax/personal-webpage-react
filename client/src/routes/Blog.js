import firebaseConf from '../Firebase';
import Footer from '../components/Footer'
import Header from '../components/Header'
import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & article {
    height: 70%;
    text-align: justify;
    & h1 {
      font-size: 2em;
      margin: 1.2em 0;
      position: relative;
    }
    & div {
      align-items: center;
      display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      & i {
        color: rgba( 220, 220, 220, 0.5 );
        font-size: 20em;
      }
    }
  }
`;

export default class Blog extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        postsHistory: [],
    };
    this.updateList = this.updateList.bind( this );
  }

  componentDidMount = () => {
    this.updateList();
  }

  updateList = () => {
    /* Create a reference to posts in the Firebase Database.
    The reference represents a specific location in the Database,
    and can be used for reading or writing data to that Database location. */
    let postsRef = firebaseConf.database().ref();
    /* Firebase offers several different event types for reading data.

    child_added

    This event type will be triggered once for every message and every time
    a new message is added to the Database.  */
    postsRef.on( 'child_added', ( snapshot ) => {
      /* snapshot.val() contains an object of objects from the Database:
      { {}, {}, ... , {} } */
      let obj = snapshot.val();
      // console.log( obj )
      for (let key in obj) {
         obj[ key ][ 'id' ] = key;
      }

      var posts = [];
      for (let key in obj) {
          posts.push( obj[ key ] )
      }
      // console.log( posts )

      this.setState( {
         postsHistory: posts
      })
      // console.log( this.state.postsHistory )
    });
  }

  filterHandler = () => {
    var filtered = this.state.postsHistory.filter( element => {
      return element.tag === 'React' || element.tag === 'Angular'
    })
    console.log(filtered)
    this.setState( {
       postsHistory: filtered
    })
  }

  render(){
    const history = this.state.postsHistory.map( ( element ) => {
        return (
          <div className = 'card-inGrid' key = { element.id }>
            <p key = { element.post }> <b>Post:</b> { element.post } </p>
            <p key = { element.tag } onClick = {this.filterHandler} style = {{ cursor: 'pointer'}}>#{ element.tag }</p>
          </div>
        )
    })
    return(
      <>
        <Header />
        <Main>
          <article>
            <h1>Blog</h1>
            <div>
              <p>
                <i className = 'swg swg-deathstar swg-6x'></i>
              </p> <br />
              <p>Under construction</p> <br />
              <div className = 'grid'>
                {history}
              </div>
            </div>
          </article>
        </Main>
        <Footer />
      </>
    );
  }
}
