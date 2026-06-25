import React from "react";
import { ProductItem } from "./ProductItem";
import { Card } from "./Card";

export const Products = (props) => {
  return (
    <div>
      <Card>
        <ProductItem
          name={props.items[0].name}
          age={props.items[0].age}
          dob={props.items[0].dob}
        />

        <ProductItem
          name={props.items[1].name}
          age={props.items[1].age}
          dob={props.items[1].dob}
        />

        <ProductItem
          name={props.items[2].name}
          age={props.items[2].age}
          dob={props.items[2].dob}
        />
      </Card>
    </div>
  );
};
