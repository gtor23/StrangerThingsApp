import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {grabToken, clearToken, test, publicPosts} from './api'
import {Register, Posts, Profile, AddPost, Nav, Edit} from './components'

const Main = () =>{

    const [loggedIn, setIsLoggedIn] = useState(grabToken());
    const [publicPosts, setPublicPosts] = useState ([])
    // const [postId, setPostsId] = useState(null)

    useEffect(() => {
        fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
        .then(response => response.json())
        .then(result=> setPublicPosts(result.data.posts))
    }, []);

    return (
        
        <div>
            <header>
                 <h1>Stranger's Things</h1>
                
                <Nav />

            </header>

            {/* <LogIn /> */}
            {/* <Register /> */}

            
                {/* <Route exact path ='/' component = {LogIn} />
                <Route path = '/register' component = {Register} />
                <Route path = '/posts' component = {Posts} />
                <Route path = '/profile' component = {Profile} />
                <Route path = '/addpost' component = {AddPost}/> */}
                <Route path = '/editpost/:id' render = {() => <Edit publicPosts = {publicPosts} setPublicPosts = {setPublicPosts} />} /> 

            {/* </Switch> */}

                {/* all of our posts are imported as Posts */}

    
            {loggedIn ? (
                <>
                <div className ='logout'>
                <h1 className='loggedin'>Sucessful Log in!</h1> {/*if logged in then show posts from other users?(posts from api)*/}
                {/*<button onClick={test}>User test button</button>*/}
                
                <Posts publicPosts={publicPosts} setPublicPosts={setPublicPosts} loggedIn ={loggedIn} setIsLoggedIn ={setIsLoggedIn} />
                {/* <Edit publicPosts = {publicPosts} setPublicPosts = {setPublicPosts} /> */}
                <span>
                    <button className='logoutbutton' onClick={() => {
                        clearToken() 
                        // setIsLoggedIn(false) 
                        setIsLoggedIn('') 
                        window.location.reload()
                    }}> Log Out</button>
                </span>
                </div>
                </>
            ) : (
                <Register setIsLoggedIn = {setIsLoggedIn} />
            )}

            
    
        </div>









    )


}





const App = document.getElementById('app')

ReactDOM.render(
    <Router>
        <Main />
    </Router>,

    App
)



