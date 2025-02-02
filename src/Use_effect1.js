import React,{useEffect,useState} from 'react';
// useEffect: it is a hook that allows you to perform side effects in a function component in respective time.



export default function Use_effect1(){
    const[bgColor,setBgcolor] = useState("white");

    useEffect(()=> { 
        let colors=["red","green","blue"];
        let i =0;
        let interval = setInterval(() =>{
            setBgcolor(colors[i]);
            i = (i+1)% colors.length;
                },1000);
    return () =>
        clearInterval(interval);
    },[]);

    return(
        <div style ={{ backgroundColor:bgColor , height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
         <h1> changing the colour in every second</h1>   
        </div>

    );

}