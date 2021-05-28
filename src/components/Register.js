import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

function checkUsername(username) {
    if (username.length >= 8) {
        //console.log('username works')
        return true
    } else {
        //console.log('username too short')
        return false
    }
}

function checkPassword(password, confirmPass) {
    if (password.length >= 8 && confirmPass.length >= 8) {
        if (password == confirmPass) {
            //console.log('passwords match')
            return true
        } else {
            //console.log('pass does not match')
            return false
        }
    } else {
        //console.log('pass too short');
        return false
    }
}

function checkInfo(username, password, confirmPass) {
    if (checkUsername(username) && checkPassword(password, confirmPass)) {
        //console.log('account made') 
        //LEFT OFF RIGHT HERE
    }
}

const Register = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')    
    const [confirmPassword, setConfirmPassword] = useState('')    



    return(

        <>
        <h1>Register </h1>
                
        <form> 
            <label>Username:</label>
            <input type ='text' 
                //id='username'
                onChange={ (event) => { setUsername(event.target.value) } }></input>
        </form>
        <form > 
            <label>Password:</label>
            <input type='text' 
            id='password'
            onChange={ (event) => { setPassword(event.target.value) } }></input>
        </form>
        <form > 
            <label>Confirm Password:</label>
            <input type='text' 
            id='confirmPass'
            onChange={ (event) => { setConfirmPassword(event.target.value) } }></input>
        </form>

        <button 
            className ='createAccount' 
            onClick={() => checkInfo(username, password, confirmPassword)}>Create Account</button>
        {/* <Link to='/register'>Register</Link> */}


        </>
    )
}

export default Register;