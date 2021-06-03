import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom'
import {grabToken} from '../api'

/* changing only one part of post will delete other sections
find a way to fill in forms with existing data */
const Edit = (props) => {
    const {publicPosts, setPublicPosts} = props;
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')

    const urlEdit = useParams()
    //console.log('public posts:', publicPosts)
    //giving me a slightly different id?
    console.log('url id from bar:', urlEdit.id)
    // console.log(typeof (urlEdit.id))

    /*find or filter
        const findPost =  publicPosts.find((post) => {
         if (urlEdit.id === post._id){
             return true
         }
         })
         console.log('find',findPost) */

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log('title, description, price, location: ', title, description, price, location);
<<<<<<< HEAD
        // console.log()


        const response = await fetch(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${urlEdit.id}`, {
=======
     


        const response = await fetch(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${urlEdit.id}`,
        {
>>>>>>> c727e4068cafeb8200198a61afe5a5cbbdf4c3d3
            method: 'PATCH',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${grabToken()}` 
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    location
                }
<<<<<<< HEAD
        })
    })
=======
            })
        })
>>>>>>> c727e4068cafeb8200198a61afe5a5cbbdf4c3d3

        const data = await response.json();
        console.log('data:', data)
    }

    return (
        <>
            <h3>Editing</h3>    
            <form onSubmit={handleSubmit}>
                <h1>Edit Post</h1>
                <label>Title</label>
                <input type ='text' id='title' 
                //value={title}
                onChange={(event) => {setTitle(event.target.value)}}></input>
                <label>Description</label>
                <input type='text' id='description' 
                //value={description}
                onChange={(event) => {setDescription(event.target.value)}}></input>
                <label>Price</label>
                <input type='text' id='price' 
                //value={price}
                onChange={(event) => {setPrice(event.target.value)}}></input>
                <label>Location</label>
                <input type='text' id='location' 
                //value={location}
                onChange={(event) => {setLocation(event.target.value)}}></input>
                <button className ='submit'>Submit</button>
            </form>     
        </>
    )
}

export default Edit