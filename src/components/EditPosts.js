import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom'
// import { publicPosts } from '../api'


const Edit = (props) =>{

    const {publicPosts, setPublicPosts} = props;

    console.log('public posts:', publicPosts)
    // console.log('set public posts:', setPublicPosts)
    console.log('props',props)

    // use render on source index file
    // pass in the props (array of posts) 
    //console log props

    //figure out how we grab id from url bar and look at array of post and find the one we want (method for this exists)
    const urlEdit = useParams()
    console.log('url id from bar', urlEdit)
    


    // const updatePost = publicPosts.map(post => {
    
    // if (urlEdit === publicPosts._id){
    //     return //the updated info
    // }else{
    //     return post //the original post
    // }

    // })
    


    //find or filter

   const filterPost =  publicPosts.find((post) => {
        // if (urlEdit === post._id){
            return post.id === urlEdit
        // }
    })

    console.log('find',filterPost)


    return(

        <>


        <h3>Editing</h3>


        </>
    )

}

export default Edit