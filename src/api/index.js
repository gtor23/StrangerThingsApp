const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT';

export const givenToken = (token) =>{
    localStorage.setItem('given-token', token);
}

export const grabToken = () => {
    return localStorage.getItem('given-token')
}

export const clearToken = () => {
    localStorage.removeItem('given-token');
}

//crerate constants for users?
// export const activeUser = () => {
//     return 
// }


//Headers?????????
function makeHeaders(){
    let aHeader = {
        'Content-Type': 'application/json',
    };
    
    if (grabToken()){
        aHEader['Authorization'] = `Bearer ${grabToken()}`;
    }
    return aHeader
}


// Do some authentication?

export const register = async(username, password, checkUser = false) => {
    //const url = `${BASE_URL}/users` + (checkUser ? '/register' : 'login');

    //hasAccount for checkUser

    const response = await fetch(`${BASE_URL}/users/register`, 
        {
        //following API doc, 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
        })

        const {error, data} = await response.json();
        console.log('register', data)
        //gather data for token
        //set as token and get stored in localStorage

        if (error){
           throw Error(error.message)
        } else if (data && data.token){
               givenToken(data.token);
        }
    
        return data
}

export const login = async(username, password, checkUser = false) => {
    //const url = `${BASE_URL}/users` + (checkUser ? '/register' : 'login');

    const response = await fetch(`${BASE_URL}/users/login`, 
        {
        //following API doc, 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
        })

        const {error, data} = await response.json();
        console.log('logging in', data)

        if (error){
           throw Error(error.message)
        } else if (data && data.token){
               givenToken(data.token);
        }
    
        return data
}

export const publicPosts = async () => {
    const response = await fetch(`${BASE_URL}/posts`)
    
    
    const data = await response.json();
    
    console.log(data)
    
    // fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
    // .then(response => response.json())
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(console.error);

    // return result
  
}

/*export const test = async () => {
    const response = await fetch(`${BASE_URL}/users/me`,
    { headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${grabToken()}` 
    } })

    const data = await response.json();
    //return data
    console.log(data)
}*/

/*export const hitAPI = async(method, endPoint, keyBody) => {
    const result = {
        method: method,
        headers: makeHeaders()
    }

    if (keyBody){
        result.body = JSON.stringify(keyBody);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, result)

    const {error, data} = await response.json();


       if (error){
           throw Error(error.message)
       }else if (data && data.token){
               givenToken(data.token);
           }
       
        return data



}*/

//function regarding posting and user capabilities

//DO something regarding posts?
// target the posts data using the endpoint (url/posts)

//building the headers calling the headers function

//give the user the option forthe action: posts, delete, update, etc.
//still creating a header so give an input parameter of 'method'

//fetch(.......), {
 //   method: method,   POST, DELETE, UPDATE, etc
 //   headers: makeHeaders(),


//reference the endpoint (/update, /post, etc)

//more token work


