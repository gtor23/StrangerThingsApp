import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { publicPosts } from '../api'


const Edit = (props) =>{

    const {publicPosts, setPublicPosts} = props;

    console.log('edit posts props:', props)

    // use render on source index file
    // pass in the props (array of posts) 
    //console log props

    //figure out how we grab id from url bar and look at array of post and find the one we want (method for this exists)




    // const {postId} = props.
    // const [postsId, setPostsId] = useState([])

    // useEffect(() => {
    //     fetch(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${postId}`)
    //     .then(response => response.json())
    //     .then(result=> setAllPosts(result.data.posts._id))
    // }, []);

    return(

        <>


        <h3>Editing</h3>


        </>
    )

}

export default Edit