import React from "react";
import { ProductDate } from "./ProductDate";

export const ProductItem = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ProductDate date={props.dob} />
    </div>
  );
};
