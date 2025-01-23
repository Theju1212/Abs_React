import React, { useState } from "react";
import image1 from "./kia_black.png";
import image2 from "./kia_blue.jpeg";
import image3 from "./kia_olive.png";
import image4 from "./kia_red.jpg";
export default function Hooks2() {
    let [bgImage, setBgImage] = useState("");

    const changeImage = (image) => {
        setBgImage(image);
    };

    return (
        <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "white",
            backgroundPosition: "center",
            padding:"50px",
            
        }}>
            <h1 style={{color:"black"}}>Changing the Background Image</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => changeImage(image1)}>Image 1</button>
                <button onClick={() => changeImage(image2)}>Image 2</button>
                <button onClick={() => changeImage(image3)}>Image 3</button>
                <button onClick={() => changeImage(image4)}>Image 4</button>
            </div>
        </div>
    );
}
