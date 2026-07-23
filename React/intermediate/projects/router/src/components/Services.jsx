import React from "react";
import { useNavigate } from "react-router";

export const Services = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate(-1)
    }
    return (
        <div>
            <h1>Welcome to Services Page</h1>
            <button onClick={clickHandler}>
                Go Back
            </button>
        </div>
    )
}