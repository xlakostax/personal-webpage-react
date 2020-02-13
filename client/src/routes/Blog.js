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

      let posts = [];
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
    let filtered = this.state.postsHistory.filter( element => {
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    /*width="8.94444in" height="8.5in"*/
                    viewBox="0 0 644 612"
                    width = '100%'
                    height = '100%'
                >
                    <path id="Выделение"
                        fill="rgba( 220, 220, 220, 0.5 )"
                        stroke="rgba( 220, 220, 220, 0.5 )"
                        strokeWidth="1"
                        d="M 48.00,286.00
                        C 48.00,286.00 595.00,286.00 595.00,286.00
                        595.00,269.42 592.26,253.20 589.00,237.00
                        589.00,237.00 479.00,237.00 479.00,237.00
                        479.00,237.00 479.00,218.00 479.00,218.00
                        479.00,218.00 517.00,218.00 517.00,218.00
                        517.00,218.00 517.00,198.00 517.00,198.00
                        517.00,198.00 439.00,198.00 439.00,198.00
                        439.00,198.00 439.00,179.00 439.00,179.00
                        439.00,179.00 498.00,179.00 498.00,179.00
                        498.00,179.00 498.00,159.00 498.00,159.00
                        498.00,159.00 479.00,159.00 479.00,159.00
                        479.00,159.00 479.00,139.00 479.00,139.00
                        479.00,139.00 439.00,139.00 439.00,139.00
                        439.00,139.00 439.00,120.00 439.00,120.00
                        439.00,120.00 459.00,120.00 459.00,120.00
                        459.00,120.00 459.00,100.00 459.00,100.00
                        459.00,100.00 420.00,100.00 420.00,100.00
                        420.00,100.00 420.00,81.00 420.00,81.00
                        420.00,81.00 439.00,81.00 439.00,81.00
                        439.00,81.00 439.00,56.00 439.00,56.00
                        439.00,53.82 439.23,50.32 437.98,48.49
                        436.45,46.27 429.66,43.87 427.00,42.72
                        417.23,38.51 407.22,35.20 397.00,32.29
                        350.54,19.08 298.89,18.15 252.00,29.87
                        203.54,41.99 163.17,66.83 128.00,102.00
                        85.89,144.11 58.53,194.63 50.72,254.00
                        50.72,254.00 48.00,282.00 48.00,282.00
                        48.00,282.00 48.00,286.00 48.00,286.00 Z
                        M 216.00,81.29
                        C 259.19,77.25 300.93,110.51 301.00,155.00
                        301.02,165.70 301.32,172.47 297.97,183.00
                        289.58,209.41 264.83,232.09 237.00,235.71
                        212.10,238.95 187.39,232.76 169.04,214.91
                        134.40,181.22 139.34,122.64 179.00,95.04
                        191.50,86.34 201.15,83.55 216.00,81.29 Z
                        M 48.00,305.00
                        C 48.00,305.00 48.00,312.00 48.00,312.00
                        48.00,312.00 50.87,339.00 50.87,339.00
                        59.09,398.05 86.03,448.03 128.00,490.00
                        154.47,516.47 184.15,537.10 219.00,551.00
                        255.72,565.64 289.80,570.06 329.00,570.00
                        342.05,569.98 355.16,567.74 368.00,565.59
                        380.00,563.57 380.88,564.02 381.00,557.00
                        381.00,557.00 381.00,550.00 381.00,550.00
                        381.00,550.00 361.00,550.00 361.00,550.00
                        361.00,550.00 361.00,531.00 361.00,531.00
                        361.00,531.00 420.00,531.00 420.00,531.00
                        420.00,531.00 420.00,511.00 420.00,511.00
                        420.00,511.00 439.00,511.00 439.00,511.00
                        439.00,511.00 439.00,491.00 439.00,491.00
                        439.00,491.00 498.00,491.00 498.00,491.00
                        498.00,491.00 498.00,472.00 498.00,472.00
                        498.00,472.00 517.00,472.00 517.00,472.00
                        517.00,472.00 517.00,452.00 517.00,452.00
                        517.00,452.00 479.00,452.00 479.00,452.00
                        479.00,452.00 479.00,439.00 479.00,439.00
                        478.85,430.99 477.27,432.00 464.00,432.00
                        464.00,432.00 420.00,432.00 420.00,432.00
                        420.00,432.00 420.00,414.00 420.00,414.00
                        420.00,414.00 459.00,414.00 459.00,414.00
                        459.00,414.00 459.00,394.00 459.00,394.00
                        459.00,394.00 537.00,394.00 537.00,394.00
                        537.00,394.00 537.00,373.00 537.00,373.00
                        537.00,373.00 498.00,373.00 498.00,373.00
                        498.00,373.00 498.00,355.00 498.00,355.00
                        498.00,355.00 589.00,355.00 589.00,355.00
                        592.12,338.43 595.00,321.91 595.00,305.00
                        595.00,305.00 48.00,305.00 48.00,305.00 Z" />
                </svg>
              </p> <br />
              <p>Under construction</p> <br />
              {/*<div className = 'grid'>
                {history}
              </div>*/}
            </div>
          </article>
        </Main>
        <Footer />
      </>
    );
  }
}
