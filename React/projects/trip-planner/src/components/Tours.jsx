import React from "react";
import { Card } from "./Card";

export const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div>
        <h2>Plan with Me</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour} ></Card>;
        })}
      </div>
    </div>
  );
};
