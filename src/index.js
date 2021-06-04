import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {grabToken, clearToken, test, publicPosts} from './api'
import {Register, Posts, Profile, AddPost, Nav, Edit} from './components'

const Main = () =>{
    const [loggedIn, setIsLoggedIn] = useState(grabToken());
    const [publicPosts, setPublicPosts] = useState ([])

    useEffect(() => {
        fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
        .then(response => response.json())
        .then(result => setPublicPosts(result.data.posts))
    }, []);

    return (        
        <div>
            <div className="header">
                <h1>Stranger's Things</h1>            
                <Nav />
            </div>
                {/* <Route exact path ='/' component = {LogIn} />
                <Route path = '/register' component = {Register} />
                <Route path = '/posts' component = {Posts} />
                <Route path = '/profile' component = {Profile} />
                <Route path = '/addpost' component = {AddPost}/> */}
                <Route path = '/editpost/:id' render = {() => <Edit publicPosts = {publicPosts} setPublicPosts = {setPublicPosts} />} /> 
                <Route path = '/profile/:username' render = {() => <Profile />} /> 
    
            {loggedIn ? (
                <>
                <div className ='logout'>
                <h1 className='loggedin'>Successful Log in!</h1> 
                {/* <button onClick={test}>User test button</button> */}
               
                <Posts publicPosts={publicPosts} setPublicPosts={setPublicPosts} loggedIn ={loggedIn} setIsLoggedIn ={setIsLoggedIn} />
                <span>
                    <button className='logoutbutton' onClick={() => {
                        clearToken() 
                        setIsLoggedIn('') 
                        window.location.reload() 
                    }}>Log Out</button>
                </span>
                </div>
                </>
            ) : (
                <Register setIsLoggedIn = {setIsLoggedIn} />
            )}    
        </div>
    )
}

ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById('app')
)