import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card"

function App() {
  const response = [
    {
      name: "Pranali",
      day: 2,
      month: "October",
      year: 1998,
    },
    {
      name: "Ashish",
      day: 4,
      month: "October",
      year: 1996,
    },
    {
      name: "Shubham",
      day: 4,
      month: "September",
      year: 2003,
    },
  ];
  return (
    <>
      <div>
        <Card>
          <h2>Hello Jee</h2>
          <Item name={response[0].name}>Abrar Khan</Item>
          <ItemDate
            day={response[0].day}
            month={response[0].month}
            year={response[0].year}
          ></ItemDate>
          <h2>Hello Jee</h2>
          <Item name="Ashish"></Item>
          <ItemDate
            day={response[1].day}
            month={response[1].month}
            year={response[1].year}
          ></ItemDate>
          <h2>Hello Jee</h2>
          <Item name="Shubham"></Item>
          <ItemDate
            day={response[2].day}
            month={response[2].month}
            year={response[2].year}
          ></ItemDate>
        </Card>
      </div>
    </>
  );
}

export default App;
