import React, { useState } from "react";
import {Card} from "./Card"

export const Cards = ({courses, category}) => {
    const [likedCourses, setlikedCourses] = useState([]);
    if (!courses) return [];
    const allCourses = []
    const getCourses = () => {
        if (category === 'All'){
            Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course)
            })
        })
        console.log(allCourses)
        return allCourses;
        }
        else{
            return courses[category]
        }
        
        
    }
    return (
        <div>
           {
            getCourses().map((course) => {
                return <Card key={course.id} course = {course}
                likedCourses = {likedCourses}
                setlikedCourses = {setlikedCourses}
                />
            })
           }
        </div>
    )
}