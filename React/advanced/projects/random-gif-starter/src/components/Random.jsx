import React from "react"
import { useGif } from "../hooks/useGif"

export const Random = () => {
    const {fetchData, loading, gif} = useGif("")
    return (
        <div>
            <h2>Random GIF</h2>
            <img src={gif} alt="Image Not Found" />
            <button onClick={()=> fetchData()}>Generate</button>
        </div>
    )
}