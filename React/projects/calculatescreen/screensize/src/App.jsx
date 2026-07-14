import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import { CustomFunction } from "./components/CustomFunction";

export const App = () => {
  const [width, height] = useWindowSize();
  return (
    <div>
      <h2>--------------------</h2>
      <h2>Inbuilt function</h2>
      <h2>--------------------</h2>
      <p>Width - {width}</p>
      <p>Height - {height}</p>

      {width > 768 ? (
        <p>You are currently in Desktop Version</p>
      ) : (
        <p>You are currently in Mobile Version</p>
      )}
      <CustomFunction />
    </div>
  );
};
