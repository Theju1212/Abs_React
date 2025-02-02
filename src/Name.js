import {useState, useRef} from 'react';

export default function Namepage(){
    let [valid, setValid] = useState(null);
    let passwordRef = useRef(null);

    const passwordvalidator = () => {
        let pass = passwordRef.current.value;
        setValid(pass.length > 10);
    }

    return(
        <>
        <input ref = {passwordRef} onChange = {passwordvalidator} placeholder="Enter your password" type = "password"/>
        <h1>{valid === null?"":valid?"password is strong":"password is weak"}</h1>
        </>
    )
}