import React, { useState } from "react";
import { data } from "./data";
import { Tours } from "./components/Tours";

export const App = () => {
  const [tours, setTours] = useState(data);
  function removetourHandler(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  function showtourHandler(){
    setTours(data);
  }
  if(tours.length == 0) {
    return (
      <div>
        <h2>
          No Tours Left
        </h2>
        <button onClick={showtourHandler}>
          Refresh Tours
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours}
      removetour = {removetourHandler}
      />
    </div>
  );
};
