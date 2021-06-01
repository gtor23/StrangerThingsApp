import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import AddPost from './AddPost'

const Posts = () =>{

    return (

        <>
            <h1>Search Posts</h1>
            <input type ='text' id='postsearch'></input>
            

            {/* Do wee need <form> here? */}
                <Link to = '/addpost'> Add Post </Link>

            {/* why doesnt this work? */}
            {/* <Switch>
                <Route path = '/addpost' component = {AddPost}/>
            </Switch> */} 

        </>


    )


}

// ReactDOM.render

export default Posts;