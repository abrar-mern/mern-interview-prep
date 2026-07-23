import React, { useState } from "react";

export const Card = ({ id, name, info, image, price, removetour }) => {
  const [readmore, setreadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}..`;
  function showtextHandler() {
    setreadmore(!readmore);
  }

  return (
    <div className="card-wrapper">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{price}</h2>
        <div>
          {description}
          <span onClick={showtextHandler}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>
        <div>
          <button onClick={() => removetour(id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
};
