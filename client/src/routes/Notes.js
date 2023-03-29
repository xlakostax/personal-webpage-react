import React, {useEffect, useState} from "react";

/*Import components*/
import Footer from "../components/Footer"
import Header from "../components/Header"

/*Import configuration*/
import firebaseConf from "../Firebase";

/*Import styles*/
import {Main} from "../styles/styled";

const Notes = () => {
  const [state, setState] = useState(
    {
      defPostsHistory: [],
      postsHistory: [],
    }
  )

  useEffect(() => {
    updateList();
  }, []);

  const updateList = () => {
    /* Create a reference to posts in the Firebase Database.
    The reference represents a specific location in the Database,
    and can be used for reading or writing data to that Database location. */
    let postsRef = firebaseConf.database().ref("posts");
    /* Firebase offers several different event types for reading data.
    child_added
    This event type will be triggered once for every message and every time
    a new message is added to the Database.  */
    postsRef.on("value", (snapshot) => {
      /* snapshot.val() contains an object of objects from the Database:
      {{}, {}, ... , {}} */
      let obj = snapshot.val();
      // console.log(obj)
      for (let key in obj) {
        obj[key]["id"]= key;
        // console.log(key)
     }

      let posts = [];
      for (let key in obj) {
          posts.push(obj[key])
     }
      //console.log(typeof posts)
      //console.log(posts)

      setState({
         defPostsHistory: posts,
         postsHistory: posts
     })
      //console.log(this.state.postsHistory)
   });
 }

  const filterHandler = (element) => {
    let tags = element.target.innerHTML;
    //console.log(tags)
    let filtered = state.defPostsHistory.filter((element) => {
      return element.tag.indexOf(tags) !== -1
   })
    //console.log(filtered)
    setState({
      ...state,
      postsHistory: filtered
   })
 }

  const history = state.postsHistory.map((element) => {
    return (
      <article key = {element.index}>
        <h3>{element.header}</h3>
        <div dangerouslySetInnerHTML = {{__html: element.post}}/>
        <div className = "tagWrapper">
          {element.tag.map(element => {return <p className = "tags" onClick = {filterHandler} key = {element.id}>{element}</p>})}<p className = "tags" onClick = {updateList}>reset</p>
        </div>
      </article>
    )
 })
  return(
    <>
      <Header />
      <Main>
        <h1>Notes</h1>
        <section>
          {history}
        </section>
      </Main>
      <Footer />
    </>
 );
}

export default Notes;
