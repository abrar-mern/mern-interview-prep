import React from "react";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";

export const App = () => {
  return (
    <div>
      <h2>Random GIFS</h2>
      <Random />
      <Tag />
    </div>
  ) 
}