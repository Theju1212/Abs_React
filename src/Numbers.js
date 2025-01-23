import React, { useState } from "react";
//we are doing this program for checking numbers of clicks the user has performed
export default function Numbers(){
    let [count,setCount]= useState(0);
    return(
        <>
        <h1>Count={count}</h1>
        <button onClick ={()=>setCount(count+1)}> Click</button> 
        <button onClick ={()=>setCount(0)}> Reset</button> 
        </>
    );
}