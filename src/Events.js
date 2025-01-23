import React from "react";
function Events(){
    const trail=()=>{
        console.log("console hitted");
    }
    return(
        <>
        {/* <button onClick={trail}>click</button> */}
        <button onMouseOver={trail}>click</button>
        </>
    )
}
export default Events;