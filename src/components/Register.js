import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {authen} from '../api'

// import {authen} from './api'

// function checkUsername(username) {
//     if (username.length >= 8) {
//         //console.log('username works')
//         return true
//     } else {
//         //console.log('username too short')
//         return false
//     }
// }

// function checkPassword(password, confirmPass) {
//     if (password.length >= 8 && confirmPass.length >= 8) {
//         if (password == confirmPass) {
//             //console.log('passwords match')
//             return true
//         } else {
//             //console.log('pass does not match')
//             return false
//         }
//     } else {
//         //console.log('pass too short');
//         return false
//     }
// }

// function checkInfo(username, password, confirmPass) {
//     if (checkUsername(username) && checkPassword(password, confirmPass)) {
//         //console.log('account made') 
//         //LEFT OFF RIGHT HERE
//     }
// }

// const Register = () =>{
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')    
//     // const [confirmPassword, setConfirmPassword] = useState('')    
//     const [confirmPassword, setConfirmPassword] = useState(null)    



//     return(

//         <>
//         <h1>Register </h1>
                
//         <form> 
//             <label>Username:</label>
//             <input type ='text' 
//                 //id='username'
//                 onChange={ (event) => { setUsername(event.target.value) } }></input>
//         </form>
//         <form > 
//             <label>Password:</label>
//             <input type='text' 
//             id='password'
//             onChange={ (event) => { setPassword(event.target.value) } }></input>
//         </form>
//         <form > 
//             <label>Confirm Password:</label>
//             <input type='text' 
//             id='confirmPass'
//             onChange={ (event) => { setConfirmPassword(event.target.value) } }></input>
//         </form>

//         <button 
//             className ='createAccount' 
//             onClick={() => checkInfo(username, password, confirmPassword)}>Create Account</button>
//         {/* <Link to='/register'>Register</Link> */}


//         </>
//     )
// }

// export default Register;

const Register = (props) =>{
    
    const {setIsLoggedIn} = props;

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    // const [confirmPassword, setConfirmPassword] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    console.log('the username:' , username);
    console.log('the password:', password);
    return(

        <>
        
                
        <form className ='authenticate' onSubmit = {(event) => event.preventDefault()}> 
            <h1> Log In</h1>

            {errorMessage ? <h2 className = 'error'>{errorMessage}</h2> : null}
            {/* <label>Username:</label> */}
            
            <input type ='text' value ={username} onChange={(event) => setUsername(event.target.value)}
            placeholder ='username'
            className = 'credential'
                //id='username'
            />            

            <input type = 'password' value = {password} onChange = {(event) => setPassword(event.target.value)}
            placeholder='password' className = 'credential' />

            <button onClick ={async (event) => {
                try{
                    const result = await authen(username, password, true);
                    setIsLoggedIn(true);
                    // window.location.reload(false);
                }catch (error){
                    setErrorMessage(error.message);
                }
            }}> Register </button>

            <button onClick ={async (event) => {
                try{
                    const result = await authen(username, password);
                    setIsLoggedIn(true);
                    // window.location.reload(false);
                }catch (error){
                    setErrorMessage(error.message);
                }
            }}> Log-In </button>

        </form>

        </>
    )
}

export default Register;