import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { publicPosts } from '../api'

// import AddPost from './AddPost'

const Posts = (props) =>{
    const [allPosts, setAllPosts] = useState([])
    //{publicPosts, setPublicPosts} = props;
    //LEFT OFF HERE TRYING TO PULL DATA TO MAP POSTS ON PAGE

    const something = publicPosts()
    .then(result => {
        console.log('result', result)
        setAllPosts(result)
    })
    .catch(console.error)
    console.log('something', something)
    //const something = publicPosts()
      //  .then()
    //console.log('check', something)
  
    
    return (

        <>
            <h1>Search Posts</h1>
            <input type ='text' id='postsearch'></input>
            

            {/* Do wee need <form> here? */}
                {/*<Link to = '/addpost'> Add Post </Link>*/}

            {/* why doesnt this work? */}
            {/* <Switch>
                <Route path = '/addpost' component = {AddPost}/>
            </Switch> */} 

        </>


    )


}

export default Posts;