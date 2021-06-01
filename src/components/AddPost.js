import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

const AddPost =() => {

    return (

        <>

        <h1>Add New Post</h1>
        <form> 
            <label>Title</label>
            <input type ='text' id='title'></input>
        </form>
        <form > 
            <label>Description</label>
            <input type='text' id='description'></input>
        </form>
        <form > 
            <label>Price</label>
            <input type='text' id='price'></input>
        </form>
        <form > 
            <label>Location</label>
            <input type='text' id='location'></input>
        </form>

        <button className ='create'>Create</button>
 




        </>

    )
}

export default AddPost