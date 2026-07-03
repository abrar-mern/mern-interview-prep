import React, { useState } from "react";

export const Card = ({id, name, info, image, price, removeTour}) => {
    const [readMore, setreadMore] = useState(false);
    const description =   readMore ? info : `${info.substring(0,200)}...`
    function showtextHandler(){
  
        setreadMore(!readMore)
    }
   
    return (
        <div className="card">
            <img src={image} alt={name}/>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4>{name}</h4>
            </div>
            <div>
                {description}
                <span onClick = {showtextHandler}>
                    {readMore ? 'Show Less' : 'Read More'}
                </span>
            </div>
            <div>
                <button onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}