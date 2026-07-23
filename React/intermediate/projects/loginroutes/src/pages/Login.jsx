import React, {useState} from "react";
import {Template} from "../components/Template"
import loginImg from "../assets/login.png"

export const Login = ({setIsLoggedIn}) => {
    return (
        <div>
            <Template 
                title = "Welcome Back"
                desc1="Build Skills for today, tomorrow, and beyond."
                desc2 = "Education for future proof your career"
                image = {loginImg}
                formtype="login"
                setIsLoggedIn = {setIsLoggedIn}
            />
        </div>
    )
}