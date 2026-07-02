import React, { useState } from "react";

export const ProductForm = (props) => {
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    function titleHandler(event){
        setTitle(event.target.value)
    }
    function dateHandler(event){
        setDate(event.target.value)
        console.log(newTitle);
        console.log(newDate);
    }
    function submitHandler(event){
        event.preventDefault();
        const productData = {
            title : newTitle,   
            date : newDate
        }
        // console.log(productData)
       props.onsaveproduct(productData)
        setTitle(' ');
        setDate(' ');
        
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={titleHandler} value={newTitle}/>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" min='2026-01-01' onChange={dateHandler} value={newDate} />
            </div>
            <button type="submit">Add Product</button>

        </form>
    )
}