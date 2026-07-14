import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";


export const Card = ({ course, likedCourses, setLikedCourses }) => {
  const [readmore, setreadmore] = useState(true);
  const info = readmore
    ? `${course.description.substring(0, 90)}..`
    : course.description;
  function readMoreHandler() {
    setreadmore(!readmore);
  }
  function clickHandler() {
    if(likedCourses.includes(course.id)){
        // already like hua pada hai
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id))
        toast.warning("Liked Removed")
    }
    else{
        setLikedCourses((prev) => [...prev, course.id]);
        toast.success("Liked ADDED");
    }
  }

  return (
    <div>
      <img src={course.image.url} alt="Image Not Found" />
      <h2>{course.title}</h2>
      <p>
        {info}
        <span onClick={readMoreHandler}>
          {!readmore ? "Show less" : "Read More"}
        </span>
      </p>
      <button onClick={clickHandler}>
        {
            likedCourses.includes(course.id) ? <FcLike size={40} /> : <FcLikePlaceholder size={40}/>
        }
      </button>
    </div>
  );
};
