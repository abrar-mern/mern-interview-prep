import React from "react";

export const FilterCards = ({filterData, category, setCategory}) => {
    function clickHandler(title){
        setCategory(title);
    }
    return (
        <div>
            {
                filterData.map((data) => {
                    return (<button
                    category = {category}
                        onClick={() => clickHandler(data.title)}
                        key={data.id}>{data.title}</button>)
                })
            }
        </div>
    )
}