import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Nav = () =>{

    return (
        <>
        <nav className = 'navi'>
                
                   
                    {/* <Link to='/'>Main</Link> */}
                    <Link to='/'> Home </Link>
                    <Link to='/posts'> Posts </Link>
                    <Link to='/profile'> Profile </Link>
                    <Link to='/logout'> Logout </Link>
                    <Link to='/register'>Register</Link>
                    

            </nav>
        </>
    )
}

export default Nav