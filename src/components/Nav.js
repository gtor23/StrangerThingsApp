import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


const Nav = (props) => {
    const {currentUser} = props

    return (
        <>
            <nav className = 'navigation'>                 

                <Link className = 'tohome' to='/'> Home </Link>

                <Link className = 'toprofile' to = '/profile'>Profile</Link> 

            </nav>
        </>
    )
}

export default Nav