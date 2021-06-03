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

//condense both login and register functions into one later?
export const register = async(username, password, checkUser = false) => {
    const response = await fetch(`${BASE_URL}/users/register`, 
        {
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

        if (error){
           throw Error(error.message)
        } else if (data && data.token){
               givenToken(data.token);
        }
    
        return data
}

export const login = async(username, password, checkUser = false) => {

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
    //console.log(data)
    
    /* fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error)        return result */ 
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