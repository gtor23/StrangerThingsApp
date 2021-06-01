import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {authen} from '../api'

const LogIn =(Props) =>{

    const {setIsLoggedIn} = props;

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    const [errorMessage, setErrorMessage] = useState(null);




    return(

        <>

        
                
        <form className ='authen' onSubmit = {(event) => event.preventDefault()}> 
            <h1> Log In</h1>

            {errorMessage ? <h2 className = 'error'>{errorMessage}</h2> : null}
            {/* <label>Username:</label> */}
            
            <input type ='text' value ={username} onChange={(event) => setUsername(event.target.value)}
            placeholder ='username'
            className = 'login'
                //id='username'
            />

            <input type = 'password' value = {password} onChange = {(event) => setPassword(event.target.value)}
            placeholder='password' className = 'login' />

            {/* <button onClick ={async (event) => {
                try{
                    const result = await authen(username, password, true);
                    setIsLoggedIn(true);
                    window.location.reload(false);
                }catch (error){
                    setErrorMessage(error.message);
                }
            }}> Register </button> */}

            <button onClick ={async (event) => {
                try{
                    const result = await authen(username, password);
                    setIsLoggedIn(true);
                    window.location.reload(false);
                }catch (error){
                    setErrorMessage(error.message);
                }
            }}> Log In </button>

        </form>

        </>



    )
}

export default LogIn;
