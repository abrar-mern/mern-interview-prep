import React, { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";


export const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signUpData, setSignUpData} = useState({
        firstName : "",
        lastName : "",
        email : " ",
        password : ""
    })
    function changeHandler(event){
        setSignUpData((prevData) => {
            return {
                ...prevData,
                [event.target.name] : [event.target.value]
            }
        })
    }
    return (
        <div>
            <form>
                <div>
                    <button>Student</button>
                    <button>Instructor</button>
                </div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" onChange={changeHandler} />
                <br /><br />
                 <label htmlFor="lastName">First Name</label>
                <input type="text" name="lastName" id="lastName" onChange={changeHandler} />
                <br /><br />
                 <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={changeHandler} />
                <br /><br />
                 <label htmlFor="lastName">Enter Password</label>
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