import React, { useState } from "react"
import { useGif } from "../hooks/useGif"

export const Tag = () => {
    const {fetchData, loading, gif} = useGif("")
    const [tag, setTag] = useState();
    function changeHandler(event){
        setTag(event.target.value);
    }
    return (
        <div>
            <h2>A Random GIF</h2>
            <img src={gif} alt="Image Not Found" />
            <input type="text" name="tag" id="tag" onChange={changeHandler} />
            <button onClick={()=> fetchData(tag)}>Generate</button>
        </div>
    )
}