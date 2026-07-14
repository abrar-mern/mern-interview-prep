import React, { useState } from "react";
import { Card } from "./Card";

export const Cards = ({ courses, category }) => {
    console.log(category)
  const [likedCourses, setLikedCourses] = useState([]);
  console.log("Courses", courses);
  if (!courses) return [];

  const allCourses = [];
 
  const getAllCourses = () => {
     if(category === 'All') {
            Object.values(courses).forEach((courseCategory) =>
      courseCategory.forEach((course) => {
        allCourses.push(course);
      }),
    );
    return allCourses;
     }
     else{
       return courses[category]
     }
  };
  return (
    <div>
      {getAllCourses().map((course) => {
        return (
          <Card
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
            key={course.id}
            course={course}
            category = {category}
          />
        );
      })}
    </div>
  );
};
