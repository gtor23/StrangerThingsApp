import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { grabToken } from '../api'

const Nav = () => {
    const test = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/me',
        { headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${grabToken()}` 
        } })
    
        const data = await response.json();
        return data.data.username;
        //console.log('test', data.data.username)
    }

    return (
        <>
            <nav className = 'navigation'>                 
                {/* <Link to='/'>Main</Link> */}
                <Link to='/'> Home </Link>
                <Link to='/posts'> Posts </Link>
                {/* <Link to ='/profile'>Profile</Link> */} {/* profile/username gotta import */}
                <Link to = {`/profile/${test}`}>Profile</Link> 
                <Link to='/logout'> Logout </Link>
                <Link to='/register'>Register</Link>
            </nav>
        </>
    )
}

export default Nav