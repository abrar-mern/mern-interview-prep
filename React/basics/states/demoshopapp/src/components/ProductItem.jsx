import React from "react";
import { ProductDate } from "./ProductDate";
import "./ProductItem.css"

export const ProductItem = (props) => {
  function clickHandler(){
    console.log('clicked')
  }
  return (
    <div className="product-item">
      <h2 className="emp-name">{props.name}</h2>
      <ProductDate date={props.dob} />
      <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
};
