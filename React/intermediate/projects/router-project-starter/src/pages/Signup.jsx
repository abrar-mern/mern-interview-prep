import React from "react";
import SignUpImage from "../assets/signup.png"
import { Template } from "../components/Template";

export const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
       <Template
        title = "Join the millions learning to code with StudyNotion for free"
        desc1= "Build skills for today, tomorrow, and beyond"
        desc2= "Education to future-proof your career."
        image={SignUpImage}
      />
    </div>
  );
};
