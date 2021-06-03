import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AddPost from './AddPost'
import Edit from './EditPosts'

const Posts = (props) =>{
    const {publicPosts, setPublicPosts, loggedIn, setIsLoggedIn, isEditClicked, setIsEditClicked} = props;
    //const [postId, setPostsId] = useState(null)

    return (
        <> 
            <h1>Search Posts</h1>
            <AddPost publicPosts={publicPosts} setPublicPosts={setPublicPosts}/>
            {/* <input type ='text' id='postsearch'></input> */}
            
            <div className = 'userposts'> {publicPosts.map((post, index) => (
                <div key={index} className='post' > 
                    <h1>{post.title}</h1> 
                    <p>{post.description}</p>
                    <h3>Price: {post.price}</h3>
                    {/* causes error but still actually posts after refresh????? */}
                    <h2>Seller: {post.author.username}</h2> 
                    <h3>Location: {post.location}</h3>            
                    <Link to = {`/editpost/${post._id}`} >Edit</Link>
                </div>))}                
            </div>
        </>
    )
}

export default Posts;