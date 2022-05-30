import React from "react";
import axios from "axios";

export default function Photos()
{

    const getapi = ()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/photos/12').then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
}
    return(
        <>
        <h1>Photos Page</h1>

        <button onClick={getapi}>Get Api</button>
        </>
    )
}