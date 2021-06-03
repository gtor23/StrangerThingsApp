import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AddPost from './AddPost'
import { publicPosts } from '../api'

import Edit from './EditPosts'

// import AddPost from './AddPost'

const Posts = (props) =>{
   const {publicPosts, setPublicPosts, loggedIn, setIsLoggedIn, isEditClicked, setIsEditClicked} = props;

   const [postId, setPostsId] = useState(null)
    //const [allPosts, setAllPosts] = useState([])


    // useEffect(() => {
    //     fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
    //     .then(response => response.json())
    //     .then(result=> setAllPosts(result.data.posts))
    // }, []);

        // console.log(allPosts)
    //useEffect(() => setIsEditClicked(true), isEditClicked);


    return (

        <> 
            <h1>Search Posts</h1>
            <AddPost publicPosts={publicPosts} setPublicPosts={setPublicPosts}/>
            {/* <Route path = '/editpost/:id' render = {() => <Edit publicPosts = {publicPosts} setPublicPosts = {setPublicPosts} />} /> */}
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

                {/*{post.editing = false}*/}

                <h2>{post.title}</h2> 

                <h3> {post.description}</h3>

                <p>{post.price}</p>

                <p>{post.location}</p>
            
                <Link to = {`/editpost/${post._id}`} >Edit</Link>

                {/* <button className = 'editing' onClick ={() => setPostsId(post._id)}> Edit</button> */}

                

                {/* <Route exact path = '/editpost' component = {Edit}/> */}
                
              {/* {post.editing ? <Edit /> : null} */}
                    
                </div> ))}
                
            </div>
  

        </>


    )


}

export default Posts;