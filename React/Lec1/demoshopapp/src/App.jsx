import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  return (
    <>
      <div>
        <h2>Hello Jee</h2>
        <Item name="Pranali"></Item>
        <ItemDate day='2' month='October' year='1998'></ItemDate>
        <h2>Hello Jee</h2>
        <Item name="Ashish"></Item>
        <ItemDate day='4' month='October' year='1998'></ItemDate>
        <h2>Hello Jee</h2>
        <Item name="Shubham"></Item>
        <ItemDate day='6' month='October' year='1998'></ItemDate>
      </div>
    </>
  );
}

export default App;
