import React, { useEffect,useState } from 'react';
import Image0 from './kia_black.png';
import Image1 from './kia_blue.jpeg';
import Image2 from './kia_olive.png';
import Image3 from './kia_red.jpg';
export default function Image_Effect(){
   let image =[Image0,Image1,Image2,Image3];
   let [bgImage,setBgimage] = useState(0);

   useEffect(() => {
    let interval = setInterval(()=>{
        setBgimage((e)=> (e+1) %image.length);
    },2000);
    return ()=> clearInterval(interval);
   },[image.length]);
   return <div style ={{backgroundImage: `url(${image[bgImage]})`, backgroundSize:"cover",transition:"background-image  0.3s ease-out"}}></div>;
}
