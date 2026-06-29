import React, { useState } from "react";

export const Form = () => {
    const [name,setName] = useState('Pranali');
    const [age,setAge] = useState(42)
    function changeHandler(e){
        setName(e.target.value)
    }
    function addHandler(e){
        setAge(age + 1)
    }
    return(
        <div>
            <form>
                <input type="text" name="user" id="user" value={name} onChange={changeHandler} />
                <br />
                <button type="button" onClick={addHandler}>Increment Age</button>
            </form>
            <br /><br />
            <p>Hello {name}, Taylor. You are {age}</p>
        </div>
    )
}