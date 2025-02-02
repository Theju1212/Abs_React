import React,{useState, useRef} from 'react';

export default function Wordcount(){
    let [Wordcount,setwordcount] =useState(0);
    let textRef = useRef(null);
    const countwords = ()=>{
        let t=textRef.current.value.trim ();
        setwordcount(t.length);
    }


    return(
        <>
        <textarea ref= {textRef} rows="5" onChange={countwords} placeholder='Enter Your Text'></textarea>
        <h1>wordcount={Wordcount}</h1>
        </>
    );
}