import firebaseConf from '../Firebase';
import Footer from '../components/Footer'
import Header from '../components/Header'
import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
    font-size: 2rem;
    margin: 1.2rem 0;
    position: relative;
  }
  & section {
    height: 70%;
    text-align: justify;
    & article {
      & span {
        color: red;
      }
      & h3, div {
        margin-bottom: 1rem;
      }
      & h3 {
        text-align: left;
      }
      & div {
        & p, code {
          margin-bottom: 1rem;
        }
        & code {
          display: block;
          & ul {
            padding-left: 1rem;
          }
        }
      }
      & .tagWrapper {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start
      }
      & .tags {
        margin-right: 1rem;
        padding: .2rem;
        background-color: rgb(220,220,220);
        border-radius: 2px;
      }
    }
  }
`;

export default class Blog extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        defPostsHistory: [],
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
    let postsRef = firebaseConf.database().ref("posts");
    /* Firebase offers several different event types for reading data.

    child_added

    This event type will be triggered once for every message and every time
    a new message is added to the Database.  */
    postsRef.on( 'value', ( snapshot ) => {
      /* snapshot.val() contains an object of objects from the Database:
      { {}, {}, ... , {} } */
      let obj = snapshot.val();
      // console.log( obj )
      for (let key in obj) {
         obj[ key ]['id']= key;
         console.log(key)
      }

      let posts = [];
      for (let key in obj) {
          posts.push( obj[ key ] )
      }
      //console.log( typeof posts )
      //console.log( posts )

      this.setState( {
         defPostsHistory: posts,
         postsHistory: posts
      })
      //console.log( this.state.postsHistory )
    });
  }

  // filterHandler = () => {
  //   let filtered = this.state.postsHistory.filter( element => {
  //     return element.tag === 'React' || element.tag === 'Angular'
  //   })
  //   console.log(filtered)
  //   this.setState( {
  //      postsHistory: filtered
  //   })
  // }
  // filterHandler = (clicked) => {
  //   console.log(clicked.target.innerHTML)
  //   let filtered = this.state.postsHistory.filter( element => {
  //     return element.tag.includes(clicked.target.innerHTML)
  //   })
  //   console.log(filtered)
  //   this.setState( {
  //      postsHistory: filtered
  //   })
  // }
  filterHandler = (element) => {
    //console.log(element.target.innerHTML)
    // let tags = element.target.innerHTML.slice( -element.target.innerHTML.length + 1 )
    let tags = element.target.innerHTML;
    //console.log(tags)
    let filtered = this.state.defPostsHistory.filter( (element) => {
      return element.tag.indexOf(tags) !== -1
    } )
    //console.log(filtered)
    this.setState({
        postsHistory: filtered
    })
  }

  render(){
    const history = this.state.postsHistory.map( ( element ) => {
        return (
          // <div key = { element.id }>
          //   <h3>{ element.header }</h3>
          //   <p>{ element.post }</p>
          //   <p style = {{ cursor: 'pointer', display: 'flex'}}>{ element.tag.map( element => { return <p onClick = { this.filterHandler } key = { element.id } style = {{ marginRight: '1rem' }}>#{ element }</p> } ) }<p onClick = { this.updateList }>#reset tag</p></p>
          // </div>
          <article key = { element.index }>
            <h3>{ element.header }</h3>
            <div dangerouslySetInnerHTML = {{ __html: element.post }}/>
            <div className = 'tagWrapper'>
              { element.tag.map( element => { return <p className = 'tags' onClick = { this.filterHandler } key = { element.id }>{ element }</p> } ) }<p className = 'tags' onClick = { this.updateList }>reset</p>
            </div>
          </article>
        )
    })
    return(
      <>
        <Header />
        <Main>
          <h1>Blog</h1>
          <section>
            {history}
          </section>
        </Main>
        <Footer />
      </>
    );
  }
}
