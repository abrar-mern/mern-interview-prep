import React, {useState} from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";


export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })
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
            <form>
                <label htmlFor="emailadress">Email Address</label>
                <input type="email" name="email" id="email" onChange={changeHandler} />
                <br /><br />
                <label htmlFor="password">Enter the Password</label>
                <input type={showPassword? ("text") : ("password")} name="password" id="password" onChange={changeHandler} />
                <span onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? (<FaRegEye />) : (<FaEyeSlash />)
                    }
                </span>
            </form>
        </div>
    )
}