import React, { useState } from "react";
import { Card } from "./Card";

export const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

function leftShiftHandler(){
 setIndex((prevState) => prevState === 0 ? reviews.length - 1 : prevState - 1)
}

function rightShiftHandler(){
  setIndex((prevState) => prevState === reviews.length - 1 ? 0 : prevState + 1)
}



  function supriseHandler() {
    const suprise = (Math.floor(Math.random() * reviews.length));
    setIndex(suprise)
  }
  return (
    <div>
      <div>
        <Card review={reviews[index]} />
      </div>
      <div>
        <button onClick={leftShiftHandler}>Left</button>
        <button onClick={rightShiftHandler} >Right</button>
      </div>

      <button onClick={supriseHandler}>Suprise Me</button>
    </div>
  );
};
