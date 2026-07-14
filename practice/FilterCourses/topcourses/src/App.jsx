import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import { FilterCards } from "./components/FilterCards";
import { Cards } from "./components/Cards";

export const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        setCourses(data.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <FilterCards 
      category = {category}
      setCategory = {setCategory}
      filterData={filterData} />
      {loading ? <p>Loading..</p> : <Cards 
      category = {category}
      courses={courses} />}
    </div>
  );
};
