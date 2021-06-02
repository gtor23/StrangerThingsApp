import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {grabToken} from '../api'

const AddPost = ({publicPosts, setPublicPosts}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts', {
            method: 'POST',
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
            })
        }) 

        const data = await response.json();
        //setPublicPosts([data, ...publicPosts])
        setPublicPosts([data, ...publicPosts])
    } 

    return (

        <>
            <form onSubmit={handleSubmit}>
                <h1>Add New Post</h1>
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

                <button className ='create'>Create</button>
            </form>
        </>

    )
}

export default AddPost