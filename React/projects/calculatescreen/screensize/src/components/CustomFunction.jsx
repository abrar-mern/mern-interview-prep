import React, { useEffect, useState } from "react";

export const CustomFunction = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h2>--------------------</h2>
      <h2>Custom function</h2>
      <h2>--------------------</h2>
      <p>Width = {size.width}</p>
      <p>Height = {size.height}</p>
      {size.width > 768 ? (
        <p>You are currently in Desktop Version</p>
      ) : (
        <p>You are currently in Mobile Version</p>
      )}
    </div>
  );
};
