import React, { useState } from 'react';

export const TextEvaluator = () => {
    const [text, setText] = useState('hello')
    function updateHandler(event){
        setText(event.target.value)
    }
    return(
        <div>
            <form>
                <input type="text" id='texteval' value={text} onChange={updateHandler}/>
                <br />
                <label htmlFor="texteval">
                    Enter string
                </label>
            </form>
            <h4>
                Your current String is {text}
            </h4>
        </div>
    )
}