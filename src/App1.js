import React from 'react';
export default function App1(props){
  let a = Number(props.num);
  if (a % 2 == 0){
    return <h1>Even Number</h1>;
  }
  else{
    return <h1>Odd Number</h1>;
  };
}

