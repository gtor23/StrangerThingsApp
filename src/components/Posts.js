import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { publicPosts } from '../api'

import Edit from './EditPosts'

// import AddPost from './AddPost'

const Posts = (props) =>{
   const {publicPosts, setPublicPosts, loggedIn, setIsLoggedIn} = props;

//    const [allPosts, setAllPosts] = useState([])
    //LEFT OFF HERE TRYING TO PULL DATA TO MAP POSTS ON PAGE
    // console.log(props)

    // console.log(publicPosts)

    // publicPosts

    //const something = publicPosts()
      //  .then()
    //console.log('check', something)
    
    // fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
    // .then(response => response.json())
    // .then(result => {
    // //   console.log('this is result:', result);
    //   const thePosts = result.data.posts
    //   console.log(thePosts)
    // //   setAllPosts(thePosts)
    // })
    // .catch(console.error);

    // console.log(thePosts)


    // useEffect(() => {
    //     fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
    //     .then(response => response.json())
    //     .then(result=> setAllPosts(result.data.posts))
    // }, []);

    // console.log(allPosts)

    // console.log(allPosts)

    // useEffect( () => {const thePosts = async() => { 
    //     const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
    //     const data = await response.json()
    //     setAllPosts(thePosts)} 
    //     thePosts(), []})

        // console.log(allPosts)


    return (

        <>
            <h1>Search Posts</h1>
            {/* <input type ='text' id='postsearch'></input> */}
            

            {/* Do wee need <form> here? */}
                {/*<Link to = '/addpost'> Add Post </Link>*/}

            {/* why doesnt this work? */}
            {/* <Switch>
                <Route path = '/addpost' component = {AddPost}/>
            </Switch> */} 
            
            <div className = 'userposts'> {publicPosts.map((post, index) => 
                
                (
                <div key={index} className = 'post' > 

                {post.editing = false}

                <h2>{post.author.username}</h2> 

                <h3> {post.description}</h3>

                <p>{post.price}</p>
            
                <Link to = {`/editpost/${post._id}`} > Edit</Link>

                {/* <Route exact path = '/editpost' component = {Edit}/> */}
                
              {/* {post.editing ? <Edit /> : null} */}
                    
                </div> ))}
                
            </div>
  

        </>


    )


}

export default Posts;