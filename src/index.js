import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


import {LogIn, Register} from './components'

const Main = () =>{

    return (
        <div>
            <header>
                
                <div className = 'navi'>
                
                    <h1>Stranger Things</h1>
                    {/* <Link to='/'>Main</Link> */}
                    <Link to='/'> Home </Link>
                    <Link to='/posts'> Posts </Link>
                    <Link to='/profile'> Profile </Link>
                    <Link to='/logout'> Logout </Link>
                    <Link to='/register'>Register</Link>

                </div>
            </header>

            {/* <LogIn /> */}
            {/* <Register /> */}

            <Switch>
                <Route exact path ='/' component = {LogIn} />
                <Route path = '/register' component = {Register} />
            </Switch>

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



