import React from "react";
import axios from "axios";

export default function Users()
{

    const getapi = ()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/users/22').then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
}
    return(
        <>
        <h1>Users Page</h1>

        <button onClick={getapi}>Get Api</button>
        </>
    )
}