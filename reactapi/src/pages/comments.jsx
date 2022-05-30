import React from "react";
import axios from "axios";

export default function Comments()
{

    const getapi = ()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/comments/12').then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
}
    return(
        <>
        <h1>Comments Page</h1>

        <button onClick={getapi}>Get Api</button>
        </>
    )
}