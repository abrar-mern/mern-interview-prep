import React, { useState } from "react";

export const CalculateAge = () => {
    const [age,setAge] = useState(null)
    function clickHandler(){
         setAge(a => a + 1)
         console.log(age)
    }
    function clearAge(){
        setAge(0);
    }
    function updateHandler(event){
        setAge(Number(event.target.value))
    }
    return(
        <div>
           <form>
            <input type="number" id="age" value={age} onChange={updateHandler} />
            <br /><br />
            <label htmlFor="age">Enter Your age {age}</label>
           </form>
           <h2>
            Your age is {age}
           </h2>
           <button onClick ={clickHandler}>+1</button>
           <br /><br />
           <button onClick={clearAge}>Clear Age</button>
        </div>
    )
}