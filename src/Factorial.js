import React from 'react';
export default function Factorial(props){
    let a = Number(props.num);
    var f = 1;
    for (var i = 1; i <= a; i++){
        f = f * i;
    }
    return <h1>Factorial = {f}</h1>;

}
