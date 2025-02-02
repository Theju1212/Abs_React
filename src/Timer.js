import React,{useState,useEffect} from 'react';
export default function Timer(){
    let [count,setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count+1);
        },1000);
    });
    return (
        <>
    <h1>Count = {count}</h1>
    <button onClick={()=> setCount(0)}> Reset</button>
    </>
)
}
