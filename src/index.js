import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {grabToken, clearToken} from './api'
import {Register, Posts, Profile, AddPost, Nav} from './components'

const Main = () =>{

     const [loggedIn, setIsLoggedIn] = useState(grabToken());


    return (
        
        <div>
            <header>
                 <h1>Stranger's Things</h1>
                
                <Nav />

            </header>

            {/* <LogIn /> */}
            {/* <Register /> */}

            {/* <Switch>
                <Route exact path ='/' component = {LogIn} />
                <Route path = '/register' component = {Register} />
                <Route path = '/posts' component = {Posts} />
                <Route path = '/profile' component = {Profile} />
                <Route path = '/addpost' component = {AddPost}/>
            </Switch> */}


            {loggedIn ? (
                <>
                <div className ='logout'>
                <h1 className='loggedin'>Sucessful Log in!</h1>
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



