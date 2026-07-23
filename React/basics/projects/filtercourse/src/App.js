import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { FilterCourses } from "./components/FilterCourses";
import { Cards } from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { SpinnerComp } from "./components/Spinner";
import { Button } from "flowbite-react";

export const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        console.log(output);
        setCourses(output.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Button>Test</Button>
      <Navbar />
      <FilterCourses
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      {loading ? <SpinnerComp /> : <Cards courses={courses} category = {category} />}
    </div>
  );
};
