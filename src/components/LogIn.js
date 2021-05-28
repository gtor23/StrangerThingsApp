import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


const LogIn =() =>{





    return(

        <>
        <h1>Log In </h1>
                
        <form> 

            <label>Username:</label>
            <input type ='text' id='username'></input>

        </form>
        <form > 
        <label>Password:</label>
        <input type='text' id='password'></input>
        </form>

        <button className ='loginbutton'>Log In</button>
        <Link to='/register'>Register</Link>


        </>
    )
}

export default LogIn;
