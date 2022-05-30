import React from "react";
import axios from "axios";

export default function Todos()
{

    const getapi = ()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/todos/54').then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
}
    return(
        <>
        <h1>Todos Page</h1>

        <button onClick={getapi}>Get Api</button>
        </>
    )
}