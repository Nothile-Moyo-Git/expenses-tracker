import HelloAlert from "./HelloAlert";
import React, { useState, useEffect } from 'react';

// This was practice to try out some states a ES6, as well as playing with props
const HelloButton = (textToShow) => {
    
    const [enteredText, setEnteredText] = useState();
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount( count+1 );
    }

    useEffect( () => {
            let counter = document.getElementById('show-count');
            counter.style.display = 'block';
            counter.innerHTML = count;
        }
    );

  
    const enteredTextHandler = (event) => {
        setEnteredText(event.target.value);
        console.log( enteredText );
    }

    return(
        <a>
            <HelloAlert onClick={alertBox}> Hello </HelloAlert>
            <div onClick={showTime} className="reactButton"> Time </div>
            <p id="show-time" className="show-time"></p>
            <div onClick={showText} className="reactButton"> Show Text </div>
            <p id="show-text" className="show-text"></p>
            <button type="button" onClick={increaseCount} className="reactButton"> Count Up </button>
            <p id="show-count" className="show-count"></p>
            <input type="text" onChange={enteredTextHandler} className="reactButton"></input>
            <p className="position-copy-text"> {enteredText} </p>
        </a>  
    );
}

const alertBox = () => {
    alert( 'Hello you :)!' );
}

const showTime = () => {

    document.getElementById("show-time").innerHTML=Date();
    let dateElement = document.getElementById('show-time');

    if( dateElement.style.display === 'none' ){
        dateElement.style.display = 'block';
        console.log( 'date Element is failing?' );
    }else{
        dateElement.style.display = 'none';
        console.log( 'date Element is Succeeding?' );
    }

}

const showText = () => {

    var checkText = document.getElementById("show-text");
    if( checkText.innerHTML === '' ){
        checkText.innerHTML = 'This text is now displaying :)';
    }else{
        checkText.innerHTML = '';
    }

}


export default HelloButton;