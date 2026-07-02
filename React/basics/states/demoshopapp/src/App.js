import React from "react";
import { Products } from "./components/Products";
import { NewProduct } from "./components/NewProduct";
import "./App.css";

export const App = () => {
  const products = [
    {
      id: "p1",
      name: "Emp1",
      age: 30,
      dob: new Date("1996", "10", "29"),
    },
    {
      id: "p2",
      name: "Emp2",
      age: 24,
      dob: new Date("1998", "1", "14"),
    },
    {
      id: "p3",
      name: "Emp3Emp3",
      age: 22,
      dob: new Date("2003", "4", "12"),
    },
  ];

  function productData(data) {
    console.log(data);
  }

  return (
    <>
      <NewProduct abrar={productData} />
      <div className="product-wrapper">
        <Products items={products} />
      </div>
    </>
  );
};
