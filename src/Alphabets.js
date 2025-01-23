import React, { useState } from "react";

// This program cycles through letters a-z and resets back to a.
export default function Letters() {
    const [index, setIndex] = useState(0); // Start with index 0 for 'a'
    const letters = "abcdefghijklmnopqrstuvwxyz"; // The list of letters

    return (
        <>
            <h1>Letter = {letters[index]}</h1>
            <button onClick={() => setIndex((index + 1) % 26)}> Next</button>
            <span style={{ margin: "0 10px" }}></span> 
            <button onClick={() => setIndex(0)}> Reset</button>
        </>
    );
}
