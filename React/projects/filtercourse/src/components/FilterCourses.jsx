import React from "react";

export const FilterCourses = ({filterData, category, setCategory}) => {
    function datafilter(title){
        setCategory(title)
    }
    return (
        <div>
            {
                filterData.map((data) => (
                     <button key={data.id} onClick={() => datafilter(data.title)} >{data.title}</button>
                ))
            }
        </div>
    )
}