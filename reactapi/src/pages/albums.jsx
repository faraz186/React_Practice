import React from "react";
import axios from "axios";

export default function Albums()
{

    const getapi = ()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/albums/10').then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
}
    return(
        <>
        <h1>Albums Page</h1>
        
        <button onClick={getapi}>Get Api</button>
        </>
    )
}