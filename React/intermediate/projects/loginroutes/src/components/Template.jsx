import React, {useState} from "react";
import { SignUpForm } from "./SignUpForm";
import {LoginForm} from "./LoginForm"

export const Template = ({title, desc1, desc2, image, formtype, setIsLoggedin}) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {
                    formtype==="signup" ? (<SignUpForm/>) : (<LoginForm/>)
                }
            </div>
            <div>
                <img src = {image} height={400}/>
            </div>
        </div>
    )
}