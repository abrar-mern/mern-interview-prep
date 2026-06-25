import React from "react";
import { Products } from "./components/Products";
import "./App.css"

export const App = () => {
  const products = [
    {
    id : 'p1',
    name : 'Pranali',
    age : 30,
    dob : new Date ('1996','10','29')
  },
   {
    id : 'p2',
    name : 'Ashish',
    age : 24,
    dob : new Date ('1998','1','14')
  },
   {
    id : 'p3',
    name : 'Shubham',
    age : 22,
    dob : new Date ('2003','4','12')
  },
]
  return (
    <div className="product-wrapper">
        <Products items = {products} />
    </div>
  )
}