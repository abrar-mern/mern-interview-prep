import React from "react";
import { LoginForm } from "./LoginForm";
import {SignUpForm} from "../components/SignupForm"

export const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "login" ? <LoginForm setLoggedIn={setLoggedIn} /> : <SignUpForm />}
      </div>

      <div>
        <img src={image} alt="Image Not Found" />
      </div>
    </div>
  );
};
