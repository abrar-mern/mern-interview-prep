import React, { useState } from "react";

export const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    state: " ",
    zipcode: " ",
    getemail: [],
    getradio: "",
  });

  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        return {
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : [...prevData[name].filter((item) => item !== value)],
        };
      });
    } else {
      setFormData((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  console.log(formData);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        />{" "}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <label htmlFor="email">Email Adress</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
        >
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="ireland">Ireland</option>
          <option value="afghanisthan">Afghanisthan</option>
        </select>
        <br />
        <label htmlFor="city">City Adress</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          onChange={changeHandler}
          value={formData.city}
        />
        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          onChange={changeHandler}
          value={formData.state}
        />
        <br />
        <label htmlFor="zipcode">Zipcode</label>
        <br />
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          onChange={changeHandler}
          value={formData.zipcode}
        />
        <br />
        <label>Email By</label>
        <br />
        <input
          type="checkbox"
          name="getemail"
          id="comments"
          onChange={changeHandler}
          checked={formData.getemail.includes("comments")}
          value="comments"
        />
        <label htmlFor="comments">
          Comments
          <p>Get notified when someone posts a comment on posting</p>
        </label>
        <input
          type="checkbox"
          name="getemail"
          id="candidates"
          value="candidates"
          onChange={changeHandler}
          checked={formData.getemail.includes("candidates")}
        />
        <label htmlFor="candidates">
          Candidates
          <p>Get notified when candidates applied for a job</p>
        </label>
        <input
          type="checkbox"
          name="getemail"
          id="offers"
          onChange={changeHandler}
          checked={formData.getemail.includes("offers")}
          value="offers"
        />
        <label htmlFor="offers">
          Offers
          <p>Get notified when candidates accepts or reject the offer</p>
        </label>
        <br />
        <p>Push Notifications</p>
        <span>These are delivered via sms to your mobile phones</span>
        <br />
        <input
          type="radio"
          name="getradio"
          id="everything"
          checked={formData.radio}
          onChange={changeHandler}
        />
        <label htmlFor="notifications">Everything</label>
        <br />
        <input
          type="radio"
          name="getradio"
          id="email"
          checked={formData.radio}
          onChange={changeHandler}
          value="sameasemail"
        />
        <label htmlFor="notifications">Same as email</label>
        <br />
        <input
          type="radio"
          name="getradio"
          id="notification"
          checked={formData.radio}
          onChange={changeHandler}
          value="nonotification"
        />
        <label htmlFor="notifications">No push notifications</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
