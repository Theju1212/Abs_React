import React, { useState } from 'react';
import Image from './kia_black.png';
import Image1 from './kia_blue.jpeg';
import Image2 from './kia_olive.png';
import Image3 from './kia_red.jpg';
export default function Hooks2(){
    let[bgImage,setBgimage] = useState("");
    const changeImage = (image) =>{
        setBgimage(image);
    }
    return(
        <div style={{backgrounImage:`url(${bgImage})`,backgroundSize:"cover",padding:"50px",height:"100vh",color:"white",backgroundPosition:"center"}}>
        <h1> Changing the Background image </h1>
            <div>
                <button onClick={()=>changeImage(Image)}>Image</button>
                <button onClick={()=>changeImage(Image1)}>Image 1</button>
                <button onClick={()=>changeImage(Image2)}>Image 2</button>
                <button onClick={()=>changeImage(Image3)}>Image 3</button>
            </div>
        </div>
    )
}
