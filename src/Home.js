import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
            <h1>This is home page</h1>
            <Link to="/Home">Home</Link>
            <Link to="/Events">Events</Link>
            <Link to="/Factorial">Factorial</Link>
        </>
    )
}