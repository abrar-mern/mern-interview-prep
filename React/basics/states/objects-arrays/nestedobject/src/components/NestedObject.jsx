import React, { useState } from "react";

export const NestedObject = () => {
    const [person, setPerson] = useState({
        name : 'Abrar',
        artwork : {
            title : 'mr',
            city : 'pune',
            image : 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg'
        }
    })
    function userchangeHandler(event){
        setPerson({
            ...person,
            name : event.target.value
        })
    }
    function titlechangeHandler(event){
        setPerson({
            ...person,
            artwork : {
                ...person.artwork,
                title : event.target.value
            }
        })
    }
    function citychangeHandler(event){

    }
    function imagechangeHandler(event){

    }
    return(
        <div>
            <form>
                <label htmlFor="user">
                    Name : 
                    <input type="text" name="user" id="user" value={person.name} onChange={userchangeHandler}/>
                </label>
                <br /> <br />
                  <label htmlFor="title">
                    Title : 
                    <input type="text" name="title" id="title" value={person.artwork.title}  onChange={titlechangeHandler} />
                </label>
                 <br /> <br />
                  <label htmlFor="city">
                    City : 
                    <input type="text" name="city" id="city" value={person.artwork.city}  onChange={citychangeHandler} />
                </label>
                 <br /> <br />
                  <label htmlFor="image">
                    Image : 
                    <input type="text" name="image" id="image" value={person.artwork.image} onChange={imagechangeHandler} />
                </label>
                 <br /> <br />
            </form>
            <p>
                Designed by {person.artwork.title} {person.name}
            </p>
            <p>Located in {person.artwork.city}</p>
            <img src="https://react.dev/images/docs/scientists/Sd1AgUOm.jpg" alt="Image Not Found" />
        </div>
    )
}