const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT';

/* Create constants regarding token and export them*/

// export grabbed token
    //use localStorage

// export cleared out token
    //use localStorage


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


// Do some authentication?

export const authen = async(username,password, checkUser = false) => {
    const url = `${BASE_URL}/users` + (checkUser ? '/register' : 'login');

    //hasAccount for checkUser

    const response = await fetch(url, 
        {
        //following API doc, 
        method: 'POST',
        headers : makeHeaders(),
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
        });

       const {error, data} = await response.json;

        //gather data for token
        //set as token and get stored in localStorage

       if (error){
           throw Error(error.message)
       }else if (data && data.token){
               givenToken(data.token);
           }
       
        return data

}

export const hitAPI = async(method, endPoint, keyBody) => {
    const result = {
        method: method,
        headers: makeHeaders()
    }

    if (keyBody){
        result.body = JSON.stringify(keyBody);
    }


}

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

