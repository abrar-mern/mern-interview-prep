import React, { useState } from "react"
import toast from "react-hot-toast";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const LoginForm = ({setLoggedIn}) => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })
    const [showPassword, SetShowPassword] = useState(false);
    function submitHandler(event){
        event.preventDefault();
        console.log(loginData);
        setLoggedIn(true);
        toast.success("Login Successfully")
        navigate("/dashboard")
    }
    function changeHandler(event){
    setLoginData((prevData) => {
        return {
            ...prevData,
            [event.target.name] : event.target.value
        }
    })
    }
    console.log(loginData);
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={changeHandler} />
                <br /><br />
                  <label htmlFor="password">Enter Password</label>
                <input type={showPassword ? ("text") : ("password")} name="password" id="password" onChange={changeHandler} />
                <span onClick={()=> SetShowPassword(!showPassword)}>
                    {
                        showPassword ? (<FaRegEyeSlash />) : (<FaRegEye />) 
                    }
                </span>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}