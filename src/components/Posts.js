import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AddPost from './AddPost'
import Edit from './EditPosts'

const Posts = (props) =>{
    const {publicPosts, setPublicPosts, isEditClicked, setIsEditClicked} = props;

    return (
        <>
            <h1>Search Posts</h1> {/* change into a form for input later */}
            <AddPost publicPosts={publicPosts} setPublicPosts={setPublicPosts}/>
            {/* <Switch>
                <Route path = '/addpost' component = {AddPost}/>
            </Switch> */}             
            <div className = 'userposts'> 
                {publicPosts.map((post, index) => (
                    <div key={index} className='post'> 
                    <h1>{post.title}</h1> 
                    <p>{post.description}</p>
                    <h3>Price: {post.price}</h3>
                    <h2>Seller: {post.author.username}</h2>
                    <h3>Location: {post.location}</h3>
                    {/* console.log(post) */}
                    <Link to = {`/editpost/${post._id}`} >Edit</Link>
                    {/* {post.editing ? <Edit /> : null} */}                    
                </div>
                ))}                
            </div>
        </>
    )
}

export default Posts;