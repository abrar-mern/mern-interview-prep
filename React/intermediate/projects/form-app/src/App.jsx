import React, { useState } from "react";

export const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email : "",
    comments : "",
    visible : false,
    gender : ""
  });
  function changeHandler(event) {
    const {name,type,checked,value} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
       [name] : type === 'checkbox' ? checked : value
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={changeHandler}
           value={formData.lastName}
        />

        <br/><br/>
          <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={formData.email}
        />

          <label htmlFor="comments">Enter Comments</label>
        <textarea
          name="comments"
          id="comments"
          onChange={changeHandler}
            value={formData.comments}
        />

         
        <input
          type="checkbox"
          name="visible"
          id="visible"
          onChange={changeHandler}
          checked = {formData.visible}
        />
        <label htmlFor="visible">Am I Visible</label>

        <br/><br/>

        <fieldset>
          <legend>
            Select Your Gender
          </legend>
            <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={changeHandler}
          checked={formData.gender==='male'}
        />
        <label htmlFor="male">Male</label>

             <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={changeHandler}
            checked={formData.gender==='female'}
        />
        <label htmlFor="female">Female</label>
        </fieldset>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
