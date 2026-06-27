import React from 'react';
import { useState } from 'react';

export const CalculateCount = () => {
    const [count,setCount] = useState(null);
    function clickHandler(){
        setCount(a => a + 1);
    }
    function removeHandler(){
        setCount(a => 0)
    }
    return(
        <div>
            <button onClick={clickHandler}>
                You have pressed the button {count} times
            </button>
            <br /><br />
            <button onClick={removeHandler}>
                Remove Count
            </button>
        </div>
    )
}