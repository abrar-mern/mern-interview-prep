import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export const Card = ({ course, likedCourses, setlikedCourses }) => {
    const [showtext,setshowtext] = useState(false);
      const info = showtext ? `${course.description}` :`${course.description.substring(0, 100)}..`;

    function readmoreHandler(){
        setshowtext(!showtext)
    }

    function clickHandler(){
      if(likedCourses.includes(course.id)){
        setlikedCourses((prev) => prev.filter((cid) => cid !==course.id));
        toast.warning('Liked removed')
      }
      else{
          setlikedCourses((prev) => [...prev, course.id])
          toast.success("You have liked it")
        }
    }

  
  return (
    <div>
      <div>
        <img src={course.image.url} alt="" />
      </div>
      <button onClick={clickHandler} >
       {
        likedCourses.includes(course.id) ? <FcLike/> : <FcLikePlaceholder/>
       }
      </button>
      <div>
        <h2>{course.title}</h2>
        <p>{info}
            <span onClick = {readmoreHandler}>
                {showtext ? 'Show Less' : 'Read More'}
            </span>
        </p>
      </div>
    </div>
  );
};
