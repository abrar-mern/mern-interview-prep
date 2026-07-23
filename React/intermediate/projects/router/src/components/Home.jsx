import React from "react";
import { Outlet, useNavigate } from "react-router";


export const Home = () => {
    const navigate = useNavigate();
    function clickHandler(){    
        navigate("/services")
    }
    return (
        <div>
            <h1>This is hOME pAGE</h1>
            <button onClick={clickHandler}>
                Move to Services Page
            </button>
           
        </div>
    )
}