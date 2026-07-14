import React from "react";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { Card } from "./components/Card";
import { reviews } from "./data";

const App = () => {
  return (
    <div>
      <Navbar />
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
