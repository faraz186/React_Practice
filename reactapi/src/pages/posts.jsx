import React from "react";
import axios from "axios";

export default function Posts()
{

    const getapi = ()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/posts/6').then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
}
    return(
        <>
        <h1>Posts Page</h1>

        <button onClick={getapi}>Get Api</button>
        </>
    )
}