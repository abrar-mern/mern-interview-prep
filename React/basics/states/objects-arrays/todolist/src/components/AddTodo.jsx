import React, {useState} from "react";

export const AddTodo = ({ addtodo }) => {
  const [title, setTitle] = useState('')
  function changeHandler(event){
    setTitle(event.target.value)
  }
  function clickHandler(){
    console.log('hi', title)
    addtodo(title);
    setTitle('')
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        name="todoadd"
        value={title}
        onChange={changeHandler}
      />
      <button type="button" onClick = {clickHandler}>Add</button>
    </div>
  );
};
