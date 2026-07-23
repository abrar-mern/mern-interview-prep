import React from "react";
import { Card } from "./Card";

export const Tours = ({ tours, removetour }) => {
  return (
    <div>
      <div>
        <h2>Plan with Abrar</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removetour = {removetour}></Card>;
        })}
      </div>
    </div>
  );
};
