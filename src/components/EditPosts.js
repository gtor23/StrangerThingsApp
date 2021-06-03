import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { publicPosts } from '../api'


const Edit = (props) =>{

    const {publicPosts, setPublicPosts} = props;

    console.log('edit posts props:', props)

    // use render on source index file
    
    return(

        <>


        <h3>Editing</h3>


        </>
    )

}

export default Edit