import React from "react";
import { ProductForm } from "./ProductForm";

export const NewProduct = (props) => {
    function saveProduct(product){
        console.log('We are in New PRODUCT', product)
        props.abrar(product)
    }
  
    return (
        <div>
            <ProductForm onsaveproduct = {saveProduct} />
        </div>
    )
}