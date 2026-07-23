import React from "react";
import { Template } from "../components/Template";
import LoginImage from "../assets/login.png"
import { LoginForm } from "../components/LoginForm";

export const Login = ({setLoggedIn}) => {
  return (
    <div>
      <h2>Login</h2>
      <Template
        title = "Welcome Back"
        desc1= "Build skills for today, tomorrow, and beyond"
        desc2= "Education to future-proof your career."
        image={LoginImage}
        formtype="login"
        setLoggedIn = {setLoggedIn}
      />
      <LoginForm

      />
    </div>
  );
};
