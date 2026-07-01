import React, { useState } from "react";

export const TaskList = ({ todos, onchange, onremove }) => {
  return (
    <div>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            <Task todos={todos} onchange={onchange} onremove={onremove} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function Task({ todos, onchange, onremove }) {
  function changeHandler(event) {
    onchange({
      ...todos,

      title: event.target.value,
    });
  }
  function checkedHandler(event) {
    onchange({
      ...todos,
      done: event.target.checked,
    });
  }
  const [isEditing, setisEditing] = useState(false);
  let todosContent;
  if (isEditing) {
    todosContent = (
      <>
        <input type="text" value={todos.title} onChange={changeHandler} />
        <button onClick={() => setisEditing(false)}>Save</button>
      </>
    );
  } else {
    todosContent = (
      <>
        <input type="text" value={todos.title} onChange={changeHandler} />
        <button onClick={() => setisEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div>
      <label>
        <input type="checkbox" onChange={checkedHandler} />

        {todosContent}
        <button onClick={() => onremove(todos.id)}>Delete</button>
      </label>
    </div>
  );
}
