import React, { useState } from "react";

export const Object = () => {
    const [form,setForm] = useState({
        firstName : 'Barbara',
        lastName : 'Hepworth',
        email : 'hepworth@sculpture.com'
    })
    function firstNameHandler(event){
        setForm({
            ...form,
            firstName : event.target.value,
        })
    }
     function lastNameHandler(event){
        setForm({
            ...form,
            lastName : event.target.value,
        })
    }
     function emailHandler(event){
        setForm({
            ...form,
            email : event.target.value,
        })
    }
    return (
        <div>
           <form>
            <label htmlFor="">First Name :</label>
            <input type="text" name="firstname" id="firstname" value={form.firstName} onChange={firstNameHandler} />
            <br />
            <label htmlFor="">Last Name :</label>
            <input type="text" name="lastname" id="lastname" value={form.lastName} onChange={lastNameHandler}/>
            <br />
            <label htmlFor="">Email :</label>
            <input type="email" name="email" id="email" value={form.email} onChange={emailHandler} />
           </form>
           <p>
            Hello First Name-{form.firstName} Last Name - {form.lastName} Email - {form.email}
           </p>
        </div>
    )
}