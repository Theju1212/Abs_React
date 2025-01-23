import React ,{useState}from 'react';
//hooks used to change and manage the state of web page
//useState used to change the state or event of the web page
export default function Hooks(){
    let [color,setColor] = useState ("white");
    
    
    const changecolor = (color) =>{
        setColor(color);
    }
    return(
        <div style = {{backgroundColor:color,height:"100vh"}}>
            <h1>Changing background color</h1>
            <div>
                <button onClick={()=>changecolor("red")}>RED</button>
                <button onClick={()=>changecolor("green")}>Green</button>
                <button onClick={()=>changecolor("orange")}>ORANGE</button>
                <button onClick={()=>changecolor("purple")}>PURPLE</button>
            </div>

        </div>
    )
}

