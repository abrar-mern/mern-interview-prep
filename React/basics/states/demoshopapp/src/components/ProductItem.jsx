import React, { useState } from "react";
import { ProductDate } from "./ProductDate";
import "./ProductItem.css";

export const ProductItem = (props) => {
  
  const [name, setName] = useState(props.name)

  function clickHandler() {
    console.log("clicked");
    setName("Abrar");
  }

  return (
    <div className="product-item">
      <h2 className="emp-name">{name}</h2>

      <ProductDate date={props.dob} />
      <button className="addtocart-btn" onClick={clickHandler}>
        Add to Cart
      </button>
    </div>
  );
};
