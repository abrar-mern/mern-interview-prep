import React, {useState} from "react";
import {data} from "./data"
import {Tours} from "./components/Tours"

export const App = () => {
  const [tours, setTours] = useState(data)
  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  function fillTripHandler(){
    setTours(data)
  }
  if(tours.length === 0){
    return (
      <div>
        <h2>
          No Tours Left
        </h2>
        <button onClick={fillTripHandler}>
          Refresh Tour
        </button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours = {tours}
      removeTour = {removeTour}
      />
    </div>
  )
}