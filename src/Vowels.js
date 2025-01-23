
import React from 'react';
export default function Vowels(props){
let a = props.value;
if(a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
    return <h1>It is a Vowel </h1>;
}
else {
    return <h1>It is a Consonant</h1>;
}
}

