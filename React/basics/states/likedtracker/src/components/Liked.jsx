import React, { useState } from "react";

export const Liked = () => {
    const [liked,setLiked] = useState(null)
    function likeHandler(e){
        setLiked(e.target.checked)
    }
    return (
        <div>
           <input type="checkbox" checked name="like" id="like" onChange={likeHandler} />
            <label htmlFor="">I liked this</label>
            <p>{liked ? 'You have checked' : 'You have not checked'}</p>
        </div>
    )
}